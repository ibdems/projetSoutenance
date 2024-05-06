import React from 'react'
import { Col } from 'reactstrap'

export default function NosChiffre() {
    return (
        <section className="about_section layout_padding">
            <div style={{ marginTop: '-50px' }}>
                <div className="heading_container heading_center">
                    <h1 className='font-bold'>
                        Quelques chiffres
                    </h1>

                </div>
                <div className="row">
                    <Col className='text-center fs-3 border-secondary'>
                        <h1 className='chiffre'>100</h1>
                        Apprenants inscrits à travers la plateforme
                    </Col>
                    <Col className='text-center fs-3 border-secondary'>
                        <h1 className='chiffre'>500</h1>
                        Formations proposés dans la plateforme
                    </Col>
                    <Col className='text-center fs-3 border-secondary'>
                        <h1 className='chiffre'>100 000</h1>
                        Formateurs et cabinets de formations actif
                    </Col>
                </div>
            </div>
        </section>
    )
}
