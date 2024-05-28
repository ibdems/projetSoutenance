import React, {useState} from 'react'
import { MyInput, MyButton } from '../../components/Forms/Forms'

export default function ContactezNous() {
    const [infocontact, setInfoContact] = useState({
        nomComplet: '',
        email: '',
        sujet: '',
        message: '',
    })
    
    const handleInputChange = (name, value) => {

        setInfoContact(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    return (
        <section className="client_section layout_padding" id='contacteznous'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sectioner-header text-center">
                            <h1>Contactez nous</h1>
                            <span className="line"></span>
                            <p className='fs-3'>Avez vous des questions à nous posez ou quelques choses vous inquiète t-elle ? Choisiez un des moyens et contactz-nous</p>
                        </div>
                        <div className="section-content">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-8">
                                    <form id="contact_form" action="">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 mb-3 ">
                                                <MyInput type="text" id="your_name" name="nomComplet" placeholder="Nom Complet" value={infocontact.nomComplet} onChange={(value) => handleInputChange('nomComplet', value)} required />
                                            </div>
                                            <div className="col mb-3">
                                                <MyInput type="email" id="email" name="email" placeholder="Email" value={infocontact.email} onChange={(value) => handleInputChange('email', value)} required />
                                            </div>
                                        </div>
                                        <MyInput type="text" id="sujet" className='mb-3' name="sujet" placeholder="Sujet" value={infocontact.sujet} onChange={(value) => handleInputChange('sujet', value)} />
                                        <MyInput className={'mb-3'} id="message" placeholder="Message" type={'textarea'} rows={3} value={infocontact.message} name="message" onChange={(value) => handleInputChange('message', value)} />
                                        <MyButton type="submit" name="button" text={'Envoyer'} bgColor={'#03031efc'} onClick={() => { }} />
                                    </form>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-4">
                                    <div className="contact-info white">
                                        <div className="contact-item media"> <i className="fa fa-map-marker-alt media-left media-right-margin"></i>
                                            <div className="media-body">
                                                <p className="">Address :</p>
                                                <p className="fw-bold">Université Gamal Abdel Nasser de Conakry</p>
                                            </div>
                                        </div>
                                        <div className="contact-item media"> <i className="fa fa-mobile media-left media-right-margin"></i>
                                            <div className="media-body">
                                                <p className="">Telephone :</p>
                                                <p className=""><a className="text-black fw-bold" style={{textDecoration: 'none'}} href="tel:+15173977100">63874839237</a> </p>
                                            </div>
                                        </div>
                                        <div className="contact-item media"> <i className="fa fa-envelope media-left media-right-margin"></i>
                                            <div className="media-body">
                                                <p className="">E-mail :</p>
                                                <p className=""><a className="text-black fw-bold" href="mailto:ibrahima882001@gmail.com">ibrahima882001@gmail.com</a> </p>
                                            </div>
                                        </div>
                                        <div className="contact-item media"> <i className="fa fa-clock media-left media-right-margin"></i>
                                            <div className="media-body">
                                                <p className="">Jours de travaille</p>
                                                <p className="fw-bold">H24</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
