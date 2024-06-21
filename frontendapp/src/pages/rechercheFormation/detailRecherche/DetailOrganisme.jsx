import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'reactstrap';
import Axios from '../../../components/Axios';

export default function DetailCabinet({ id }) {
    const [cabinet, setCabinet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCabinet = async () => {
            try {
                const response = await Axios.get(`utilisateurs/detail/${id}/`);
                setCabinet(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching cabinet data:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchCabinet();
    }, [id]);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <div>Error loading cabinet details</div>;
    }

    if (!cabinet) {
        return <div>No cabinet found</div>;
    }

    return (
        <div>
            <Row>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <div>
                        {cabinet.photo === null ? (
                            <i className="bi bi-person-fill fs-1"></i>
                        ) : (
                            <img src={cabinet.photo} alt="Photo" height={200} width={200} style={{ border: '1px solid black', borderRadius: '20%' }} />
                        )}
                    </div>
                </Col>
            </Row>
            <Row>
                <h2 className='text-center mt-3'>{cabinet.nom_complet}</h2>
            </Row>
            <Row className=' p-1 styleCol'>
                <Col xs={12}>
                    <div className='fw-bold text-justify'><i className="bi bi-job fs-3"></i> Descrption:</div>
                </Col>
                <Col>
                    <p className=' text-justify'>{cabinet.cabinet ? cabinet.cabinet.description : 'N/A'}</p>
                </Col>
            </Row>
            <Row className=' p-1 '>
                <Col xs={5} md={4}>
                    <div className=' text-start text-md-end fw-bold'><i className="bi bi-geo-alt"></i> Adresse:</div>
                </Col>
                <Col>
                    <p className='text-justify fw-3 fs-5'>{cabinet.adresse}</p>
                </Col>
            </Row>
            <Row className=' p-1 styleCol'>
                <Col xs={5} md={4}>
                    <div className=' text-start text-md-end fw-bold'><i className="bi bi-telephone "></i> Telephone:</div>
                </Col>
                <Col>
                    <p className='fs-5 text-justify'>{cabinet.telephone}</p>
                </Col>
            </Row>
            <Row className=' p-1 '>
                <Col xs={5} md={4}>
                    <div className=' text-start text-md-end fw-bold'><i className="bi bi-envelope"></i> Email:</div>
                </Col>
                <Col>
                    <p className='fs-5 text-justify'>{cabinet.email}</p>
                </Col>
            </Row>
            <Row className=' p-1 styleCol'>
                <Col xs={5} md={4}>
                    <div className=' text-start text-md-end fw-bold'><i className="bi bi-job fs-3"></i> Durée d'experience :</div>
                </Col>
                <Col>
                    <p className='fs-5 text-justify'>{cabinet.cabinet ? cabinet.cabinet.duree_experience : 'N/A'} ans</p>
                </Col>
            </Row>
            
            
        </div>
    );
}
