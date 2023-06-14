import {
    XAxis,
    YAxis,
    ResponsiveContainer,
    BarChart,
    CartesianGrid,
    Tooltip,
    Legend,
    Bar,
} from 'recharts';
import { getUserActivities } from '../../../firebase/services/users.service';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../contexts/AuthContext';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import dayjs from 'dayjs';

const ActivitiesChart = () => {
    const [alignment, setAlignment] = useState(7);
    const [data, setData] = useState(Array.from({ length: alignment }));
    const { userData } = useContext(AuthContext);

    useEffect(() => {
        if (userData) {
            handleChange(null, alignment);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData]);

    const handleChange = (_event, newAlignment) => {
        setAlignment(newAlignment);
        getUserActivities(userData.username).then((activities) => {
            setData(Array.from({ length: newAlignment }));
            const dataSet = Array.from({ length: newAlignment }).map((_, index) => {
                const date = dayjs()
                    .add(index - (newAlignment - 1), 'day')
                    .format('DD/MM/YYYY');
                const fitnessExercisesForTheDay = activities.filter((activity) => {
                    const formattedDate = dayjs(activity.createdOn).format('DD/MM/YYYY');
                    if (formattedDate === date && activity.activityType === 'fitness') {
                        return activity;
                    }
                });
                const sportSessionsForTheDay = activities.filter((activity) => {
                    const formattedDate = dayjs(activity.createdOn).format('DD/MM/YYYY');
                    if (formattedDate === date && activity.activityType === 'sport') {
                        return activity;
                    }
                });
                const cardioSessionsForTheDay = activities.filter((activity) => {
                    const formattedDate = dayjs(activity.createdOn).format('DD/MM/YYYY');
                    if (formattedDate === date && activity.activityType === 'cardio') {
                        return activity;
                    }
                });
                const yogaSessionsForTheDay = activities.filter((activity) => {
                    const formattedDate = dayjs(activity.createdOn).format('DD/MM/YYYY');
                    if (formattedDate === date && activity.activityType === 'yoga') {
                        return activity;
                    }
                });
                return {
                    date,
                    Exercises: fitnessExercisesForTheDay.length,
                    Sport: sportSessionsForTheDay.length,
                    Cardio: cardioSessionsForTheDay.length,
                    Yoga: yogaSessionsForTheDay.length,
                };
            });
            setData(dataSet);
        });
    };

    return (
        <>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='date' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='Exercises' stackId='a' fill='#8884d8' />
                    <Bar dataKey='Sport' stackId='a' fill='#82ca9d' />
                    <Bar dataKey='Cardio' stackId='a' fill='#ffc658' />
                    <Bar dataKey='Yoga' stackId='a' fill='#3fa3c0' />
                </BarChart>
            </ResponsiveContainer>
            <ToggleButtonGroup
                color='primary'
                value={alignment}
                exclusive
                required
                onChange={handleChange}
                aria-label='Platform'
                sx={{
                    justifyContent: 'center',
                }}
            >
                Date
                <ToggleButton value={7}>7 days</ToggleButton>
                <ToggleButton value={30}>30 days</ToggleButton>
                <ToggleButton value={90}>90 days</ToggleButton>
            </ToggleButtonGroup>
        </>
    );
};

export default ActivitiesChart;
