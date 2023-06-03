import { Title } from '@mui/icons-material';
import { Box, CircularProgress, LinearProgress, Paper, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Cell, Pie } from 'recharts';
import { PieChart } from 'recharts';
import ProgressPieChart from './ProgressPieChart/ProgressPieChart';

// TODO - move the PieChart to a separate component


const SingleActiveGoalCard = ({ goal }) => {
    return (
        <Box borderRadius={'5px'} border={'solid 1px #e4e4e4'} sx={{ m: 1 }}>
            <Typography
                fontWeight={500}
                sx={{
                    '@media (max-width: 600px)': { fontSize: '30px' },
                }}
                textAlign='center'
                m={'10px 10px 0px 10px'}
            >cry that many times</Typography>
            <ProgressPieChart />
            <Typography>
                hello
            </Typography>
            <Box sx={{
                display: 'flex', justifyContent: 'space-between', m: '0px 10px 5px 10px'
            }}>
                <Typography >
                    Started on: <br /> 03/06/2020
                </Typography>
                <Typography >
                    Target date: <br /> 03/06/2023
                </Typography>
            </Box>
        </Box>
    );
};

SingleActiveGoalCard.propTypes = {
    goal: PropTypes.object.isRequired,
};

export default SingleActiveGoalCard;

