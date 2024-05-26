import React from 'react';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BarChart, Bar, Tooltip, ResponsiveContainer } from 'recharts';

export default function ChartBar({ icone, title }) {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div>
            <div className='fw-bold'>
                <i className={`${icone} fs-4`}></i>{title}
            </div>
            <div style={{ height: '140px', width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        Tool
                        <Bar dataKey="uv" fill="#8884d8" />
                        <Tooltip 
                            contentStyle={{backgroundColor: '#03031efc', borderRadius: '5px'}}
                            labelStyle={{display: 'none'}}
                            cursor={{fill: 'none'}}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
