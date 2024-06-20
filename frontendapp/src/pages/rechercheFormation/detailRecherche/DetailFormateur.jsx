import React, { useEffect, useState } from 'react'
import { Col, Row, Spinner } from 'reactstrap'
import Axios from '../../../components/Axios';

export default function Detailutilisateur({ id }) {
    const [utilisateur, setUtilisateur] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSession = async () => {
            try {
                const response = await Axios.get(`utilisateurs/detail/${id}/`);
                setUtilisateur(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching session data:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchSession();
    }, [id]);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <div>Error loading user details</div>;
    }

    if (!utilisateur) {
        return <div>No user found</div>;
    }

    return (
        <div>
            <Row>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <div>
                        {utilisateur.photo === null ? (
                            <i className="bi bi-person-fill fs-1"></i>
                        ) : (
                            <img  src={utilisateur.photo} alt="" height={200} width={200} style={{borderRadius: '50%'}} />
                        )}
                    </div>
                </Col>
            </Row>
            <Row>
                <h2 className='text-center mt-3'>{utilisateur.nom_complet}</h2>
            </Row>
            <Row className='px-1 styleCol'>
                <Col xs={4}>
                    <div className='fw-bold text-start text-md-end'><i className="bi bi-job fs-3"></i> Profession:</div>
                </Col>
                <Col>
                    <p className='text-justify fs-5 mt-1'>{utilisateur.formateur ? utilisateur.formateur.profession : 'N/A'}</p>
                </Col>
            </Row>
            <Row className='px-1'>
                <Col xs={5}>
                    <div className='fw-bold text-start'><i className="bi bi-job fs-3"></i> Durée d'experience:</div>
                </Col>
                <Col>
                    <p className='text-justify fs-5 mt-1'>{utilisateur.formateur.duree_experience} ans</p>
                </Col>
            </Row>
            <Row className='px-1 styleCol'>
                <Col xs={5}>
                    <div className='fw-bold text-start'><i className="bi bi-job fs-3"></i> Niveau d'étude:</div>
                </Col>
                <Col>
                    <p className='text-justify fs-5 mt-1'>{utilisateur.formateur.niveau_etude}</p>
                </Col>
            </Row>
            {utilisateur.formateur && utilisateur.formateur.competances && utilisateur.formateur.competances.length > 0 && (
                <Row className='px-1'>
                    <Col xs={12}>
                        <div className='fw-bold text-start '><i className="bi bi-job fs-3"></i> Competances:</div>
                    </Col>
                    <Col>
                        {utilisateur.formateur.competances.map(competance => (
                           <li className='text-justify fs-5 mt-1 ms-md-5' key={competance.id}>{competance.libelle}</li>
                        ))}
                    </Col>
                </Row>
            )}
            {utilisateur.formateur && utilisateur.formateur.domaineExpertises && utilisateur.formateur.domaineExpertises.length > 0 && (
                <Row className='px-1 styleCol'>
                    <Col xs={12}>
                        <div className='fw-bold text-start '><i className="bi bi-job fs-3"></i> Domaine d'expertise:</div>
                    </Col>
                    <Col>
                        {utilisateur.formateur.domaineExpertises.map(domaineExpertise => (
                            <li className='text-justify fs-5 mt-1 ms-md-5' key={domaineExpertise.id}>{domaineExpertise.libelle}</li>
                        ))}
                    </Col>
                </Row>
            )}
            
        </div>
    );
}
