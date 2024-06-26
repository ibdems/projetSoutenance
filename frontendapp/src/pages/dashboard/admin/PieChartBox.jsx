import React from 'react';
import { Col, Row } from 'reactstrap';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { id: 1, name: 'Formateurs', value: 10, color: '#0088FE' },
    { id: 2, name: 'Organisme', value: 4, color: '#00C49F' },
    { id: 3, name: 'Désirants', value: 3, color: '#FFBB28' },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default function PieChartBox({ icone, title }) {
    return (
        <div>
            <div className='fw-bold fs-4'><i className={`${icone} fs-5`}></i>{title}</div>
            <div style={{ height: '250px', width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Tooltip 
                            contentStyle={{backgroundColor: 'transparent', fontWeight: 'bold'}}
                        />
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            innerRadius={20}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <Row>
                {data.map(item => (
                    <Col xs={3} key={item.id} className='m-1'>
                        <li className='fw-bold' style={{ position: 'relative', listStyle: 'none', paddingLeft: '11px', marginBottom: '10px' }}>
                            <span style={{
                                position: 'absolute',
                                left: '0',
                                top: '70%',
                                transform: 'translateY(-50%)',
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: item.color
                            }}></span>
                            <span style={{fontSize: '10px'}}>{item.name}</span>
                        </li>
                        <div className='text-center fw-bold'>{item.value}</div>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
