import BMIGraph from './BMIGraph';
import { Box, Typography, Paper, Card } from '@mui/material';

export const BMIGraphSection = ({ userData }) => {
    if (!userData?.bmi) {
        return (
            <Card sx={{ m: 2, p: 1 }}>
                <Typography variant='h6' textAlign='center'>
                    Please fill out your Health Data to calculate your BMI
                    score!
                </Typography>
            </Card>
        );
    }

    return (
        <Card sx={{ m: 2, p: 1 }}>
            <Typography variant='h4' textAlign='center'>
                BMI: {userData.bmi}
            </Typography>
            <BMIGraph userData={userData} />
        </Card>
    );
};

export default BMIGraphSection;
