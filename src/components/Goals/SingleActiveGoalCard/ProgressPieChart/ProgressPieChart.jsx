import { Cell, Pie, PieChart } from 'recharts';
import { PROGRESS_PIE_COLORS } from '../../../../common/constants';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';

const ProgressPieChart = ({ currentProgress, goalTarget }) => {
    const data = [
        { name: 'Progress', value: currentProgress },
        { name: 'Remaining', value: goalTarget - currentProgress },
    ];
    const textColor = useTheme().palette.mode === 'dark' ? '#fff' : '#000';

    return (
        <PieChart width={280} height={197}>
            <Pie
                data={data}
                dataKey='value'
                cx='50%'
                cy='50%'
                startAngle={90}
                endAngle={-270}
                innerRadius={70}
                outerRadius={90}
                fill='#284a67'
                style={{outline:'none'}}
            >
                <Cell key={'progress'} fill={PROGRESS_PIE_COLORS[0]} />
                <Cell key={'target'} fill={PROGRESS_PIE_COLORS[1]} />
            </Pie>
            <text
                x='50%'
                y='50%'
                dominantBaseline='central'
                textAnchor='middle'
                fontSize={24}
                fill={textColor}
            >
                {((currentProgress / goalTarget) * 100).toFixed(0)}%
            </text>
        </PieChart>
    );
};

ProgressPieChart.propTypes = {
    currentProgress: PropTypes.number.isRequired,
    goalTarget: PropTypes.number.isRequired,
};

export default ProgressPieChart;
