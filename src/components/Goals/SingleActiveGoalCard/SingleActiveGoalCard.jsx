import { Box, CircularProgress, LinearProgress, Paper, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Cell, Pie } from 'recharts';
import { PieChart } from 'recharts';



const currentValue = 12;
const targetValue = 36;
const data = [
    { name: 'Progress', value: currentValue },
    { name: 'Remaining', value: targetValue - currentValue }
];
const COLORS = ['#175075', '#9eb2c3'];

const SingleActiveGoalCard = ({ goal }) => {
    return (<Paper sx={{m:1}}>
        <PieChart width={180} height={180}>
            <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                startAngle={90}
                endAngle={-270}
                innerRadius={60}
                outerRadius={80}
                fill="#284a67"
            >
                {
                    data.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))

                }
            </Pie>
            <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontSize={24} fill="#black">{(currentValue / targetValue * 100).toFixed(0)}%</text>

        </PieChart >


    </Paper>


    );
};

SingleActiveGoalCard.propTypes = {
    goal: PropTypes.object.isRequired,
};

export default SingleActiveGoalCard;
