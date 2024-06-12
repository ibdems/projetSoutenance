import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col } from 'reactstrap'
import Axios from '../../components/Axios';

export default function NosChiffre() {
    const [data, setData] = useState({ formations: 0, total: 0, desirants: 0 });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseFormateursCabinets = await Axios.get('/utilisateurs/count-formateurs-cabinets/');
                const responseDesirants = await Axios.get('/utilisateurs/count-desirants/');
                const responseFormations = await Axios.get('/utilisateurs/count-formations/');
                setData({
                    formations: responseFormations.data.formations,
                    total: responseFormateursCabinets.data.total,
                    desirants: responseDesirants.data.desirants,
                });
                
            } catch (err) {
                console.log(err)
            }
        };

        fetchData();
    }, []);

    return (
        <section className="about_section layout_padding">
            <div style={{ marginTop: '-50px' }}>
                <div className="heading_container heading_center">
                    <h1 className="">
                        Quelques <span className='fs-2 text-warning'> Chiffres</span>
                    </h1>
                </div>
                <div className="row">
                    <Col className='text-center fs-3 border-secondary'>
                        <h1 className='chiffre'>{data.desirants}</h1>
                        Apprenants inscrits à travers la plateforme
                    </Col>
                    <Col className='text-center fs-3 border-secondary'>
                        <h1 className='chiffre'>{data.formations}</h1>
                        Formations proposés dans la plateforme
                    </Col>
                    <Col className='text-center fs-3 border-secondary'>
                        <h1 className='chiffre'>{data.total}</h1>
                        Formateurs et cabinets de formations actif
                    </Col>
                </div>
            </div>
        </section>
    )
};
