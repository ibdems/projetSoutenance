import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    {
        name: 'Ja',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Fe',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Ma',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Av',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Mai',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Ju',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Jui',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Au',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Se',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Oc',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'No',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'De',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

// Function to normalize data
const normalizeData = (data) => {
    const maxValue = Math.max(...data.map(item => item.uv));
    return data.map(item => ({
        ...item,
        uv: (item.uv / maxValue) * 1000,
    }));
};

// Normalized data
const normalizedData = normalizeData(data);

export default function ChatVisit({ icone, title }) {
    return (
        <div>
            <div className='fw-bold fs-4 mb-2'><i className={`${icone} fs-5`}></i>{title}</div>
            <div style={{ height: '240px', width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={normalizedData}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 1000]} />
                        <Tooltip contentStyle={{ backgroundColor: 'transparent' }} />
                        <Area type="monotone" dataKey="uv" stroke="#03031efc" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
