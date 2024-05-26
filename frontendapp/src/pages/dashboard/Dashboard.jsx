import React from 'react';
import './dashboard.scss';
import TopFormateur from './admin/TopFormateur';
import { Col, Row } from 'reactstrap';
import ChartBox from './admin/ChartBox';
import ChartBar from './admin/ChartBar';
import PieChartBox from './admin/PieChartBox';
import ChatVisit from './admin/ChatVisit';

function Dashboard() {
  return (
    <div >
      <Row>
        <Col lg={3} md={5} sm={6} className="gx-5">
          <Row>
            <Col lg={12} className="box mt-3 box1">
              <h4 className='text-justify fw-bold mt-md-3' style={{fontSize: '15px'}}>Meilleurs Formateurs</h4>
              <TopFormateur />
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="box mt-3  box2">
              <ChartBar title={'Notations'} />
            </Col>
          </Row>
        </Col>
        <Col lg={6} md={7} sm={6}>
          <Row>
            <Col xs={12} lg={6}  className='mt-3'>
              <Col md={12}  className="box  box3">
                <ChartBox
                  icone={'bi bi-person'}
                  title={'Utilisateurs total'}
                  total={6487}
                  lien={'/admin/utilisateurs'}
                />
              </Col>
            </Col>
            <Col xs={12} lg={6}  className='mt-3 mt-sm-4 mt-lg-3'>
              <Col md={12}  className="box box4">
                <ChartBox
                  icone={'bi bi-coin'}
                  title={'Payements Total'}
                  total={`${640}`}
                  lien={'/admin/payement'}
                />
              </Col>
            </Col>


          </Row>
          <Row>
            <Col xs={12} lg={6} className='mt-3 mt-sm-3'>
              <Col md={12} className="box  box3">
                <ChartBox
                  icone={'bi bi-mortarboard-fill'}
                  title={'Formations Total'}
                  total={`${640}`}
                  lien={'/admin/formation/list'}
                />
              </Col>
            </Col>

            <Col xs={12} lg={6} className='mt-3 mt-sm-3'>
              <Col md={12}  className="box box4">
                <ChartBox
                  icone={'bi bi-charts'}
                  title={'Ratio Formation/Formateur'}
                  total={`${640}`}
                  lien={'/admin/formation/list'}
                />
              </Col>
            </Col>

          </Row>
          <Row className="mt-0 d-lg-block d-none d-sm-none d-md-none p-lg-3">
            <Col lg={12} className="box box5">
              <ChatVisit icone={'bi bi-eye'} title={'Visites'} />
            </Col>
          </Row>
        </Col>
        <Col lg={3} md={12} sm={12} xs={12} className="gx-5">
          <Row>
            <Col lg={12} sm={6} className="box mt-3 box6">
              <PieChartBox title={'Utilisateurs'} />
            </Col>


            <Col lg={12} sm={5} className="box mt-3 box7 ms-md-5 ms-sm-5 pt-md-5 pt-sm-5 pt-lg-0 ms-lg-0 mt-md-3">
              <ChartBar title={'Inscriptions'} icone={'bi bi-pen fs-5'} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="d-lg-none d-block d-sm-block d-md-block mt-3 m-2">
        <Col sm={12} className="box box5">
          <ChatVisit icone={'bi bi-eye'} title={'Visites'} />
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
