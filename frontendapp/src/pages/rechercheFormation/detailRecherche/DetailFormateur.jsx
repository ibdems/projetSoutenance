import React from 'react'
import { Col, Row } from 'reactstrap'

export default function DetailFormateur() {
    return (
        <div>
            <Row>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <img src="" alt="Photo" height={200} width={200} style={{ border: '1px solid black', borderRadius: '50%' }} />
                    </div>
                </Col>
            </Row>
            <Row>
                <h2 className='text-center mt-3'>Ibrahim Dems</h2>
            </Row>
            <Row className=' p-1 styleCol'>
                <Col>
                    <h5 className='mt-2 text-justify'><i className="bi bi-job fs-3"></i> Profession</h5>
                </Col>
                <Col>
                    <p className='text-justify fw-3 fs-5 mt-2'>Developpeur Web & Mobile</p>
                </Col>
            </Row>
            <Row className=' p-1 '>
                <Col>
                    <h5 className='mt-2 text-justify'><i className="bi bi-job fs-3"></i> Adresse</h5>
                </Col>
                <Col>
                    <p className='text-justify fw-3 fs-5 mt-2'>Conakry/Hamdallaye</p>
                </Col>
            </Row>
            <Row className=' p-1 styleCol'>
                <Col>
                    <h5 className='mt-2 text-justify'><i className="bi bi-job fs-3"></i> Telephone</h5>
                </Col>
                <Col>
                    <p className='text-justify fw-3 fs-5 mt-2'>620 000 000</p>
                </Col>
            </Row>
            <Row className=' p-1 '>
                <Col>
                    <h5 className='mt-2 text-justify'><i className="bi bi-job fs-3"></i> Email</h5>
                </Col>
                <Col>
                    <p className='text-justify fw-3 fs-5 mt-2'>ibrahima2ds@gmail.com</p>
                </Col>
            </Row>
            <Row className=' p-1 styleCol'>
                <Col>
                    <h5 className='mt-2 text-justify'><i className="bi bi-job fs-3"></i> Linkdin</h5>
                </Col>
                <Col>
                    <p className='text-justify fw-3 fs-5 mt-2'>@IbrahimaDiallo</p>
                </Col>
            </Row>
            <Row className=' p-1'>
                <Col>
                    <h5 className='mt-2 text-justify'><i className="bi bi-job fs-3"></i> Competances</h5>
                </Col>
                <Col>
                    <p className='text-justify fw-3 fs-5 mt-2'><li>Developpement Web</li><li>Developpement Mobile</li></p>
                </Col>
            </Row>
            <Row className=' p-1 styleCol'>
                <Col>
                    <h5 className='mt-2 text-justify'><i className="bi bi-job fs-3"></i> Domaine d'expertise</h5>
                </Col>
                <Col>
                    <p className='text-justify fw-3 fs-5 mt-2'><li>Analyse et modelisation</li><li>ReactJs</li></p>
                </Col>
            </Row>
            <Row className=' p-1'>
                <Col>
                    <h5 className='mt-2 text-justify'><i className="bi bi-job fs-3"></i> Certifications</h5>
                </Col>
                <Col>
                    <p className='text-justify fw-3 fs-5 mt-2'><li>Diplomé en Genie Informatique de Guinée</li><li>DevOps</li></p>
                </Col>
            </Row>
        </div>
    )
}
