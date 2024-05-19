import React from 'react'
import { Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ChartBox({icone, title, total, lien}) {
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
      <Row className='m-1'>
        <div className='fw-bold'><i className={`${icone} title`}></i>{title}</div>
        <Col xs={5}>
          <div className='mt-3 fs-3 fw-bold'>{total}</div>
          <div className='mt-2 fw-bold link' ><Link to={lien} style={{ color: '#03031efc', textDecoration: 'none' }}>Voir tout</Link></div>
        </Col>
        <Col xs={7} >
          <div style={{ height: '100px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart width={300} height={100} data={data}>
              <Tooltip 
                contentStyle={{background: 'transparent', border: 'none',color: 'black'}}
                labelStyle={{display: 'none'}}
                position={{x: 30, y: 60}}
              />
                <Line type="monotone" dataKey="pv" stroke="#03031efc" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Col>
      </Row>
    </div>
  )
}
