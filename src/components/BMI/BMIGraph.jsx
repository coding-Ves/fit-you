import { Box, Paper } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';

const RADIAN = Math.PI / 180;
const BMIData = [
    { name: 'Underweight', value: 18.5, color: '#db3d3d' },
    { name: 'Normal', value: 25, color: '#2cde2c' },
    { name: 'Overweight', value: 30, color: '#de7f2c' },
    { name: 'Obesity', value: 40, color: '#991817' },
];
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;

const needle = (value, data, cx, cy, iR, oR, color) => {
    let total = 0;
    data.forEach((v) => {
        total += v.value;
    });
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
        <circle cx={x0} cy={y0} r={r} fill={color} stroke='none' />,
        <path
            d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
            stroke='#none'
            fill={color}
        />,
    ];
};

export const BMIGraph = ({ userData }) => {
    return (
        <PieChart width={300} height={300}>
            <Pie
                dataKey='value'
                startAngle={180}
                endAngle={0}
                data={BMIData}
                cx={cx}
                cy={cy}
                innerRadius={iR}
                outerRadius={oR}
                fill='#8884d8'
                stroke='none'
            >
                {BMIData.map((entry, index) => (
                    <Cell id={index} key={`cell-${index}`} fill={entry.color} />
                ))}
            </Pie>
            {needle(userData?.bmi, BMIData, cx, cy, iR, oR, '#5f95ed')}
        </PieChart>
    );
};

export default BMIGraph;
