import React from 'react'
import './dashboard.scss'
import { Card, CardGroup } from 'reactstrap';
import TopFormateur from '../../components/dahboardAdmin.jsx/TopFormateur';

function DashboardAdmin() {
  return (
    <>
      <div className='home'>
          <div className="box box1">
              <TopFormateur />
          </div>
          <div className="box box2">Box2</div>
          <div className="box box3">Box3</div>
          <div className="box box4">Box4</div>
          <div className="box box5">Box5</div>
          <div className="box box6">Box6</div>
          <div className="box box7">Box7</div>
          <div className="box box8">Box8</div>
          <div className="box box9">Box9</div>

          
      </div>
      <CardGroup>
          <Card className='mt-3 box h-200 mr-2'>

          </Card>
          <Card className='mt-3 box mr-2' sm='3'>

          </Card>
          <Card className='mt-3 box'>

          </Card>
          <Card className='mt-3 box'>

          </Card>
      </CardGroup>
    </>

  )
}

export default DashboardAdmin