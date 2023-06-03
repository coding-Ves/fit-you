import React from 'react'
import PropTypes from 'prop-types'
import { Cell, Pie, PieChart } from 'recharts'

const currentValue = 24;
const targetValue = 36;
const data = [
    { name: 'Progress', value: currentValue },
    { name: 'Remaining', value: targetValue - currentValue }
];
const COLORS = ['#175075', '#9eb2c3'];


const ProgressPieChart = props => {
    return (
        <PieChart width={250} height={250}>
            <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                startAngle={90}
                endAngle={-270}
                innerRadius={70}
                outerRadius={90}
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


    )
}

ProgressPieChart.propTypes = {}

export default ProgressPieChart