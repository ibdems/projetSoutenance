import React from 'react'
import ProfilFormateur from './profilFormateur/ProfilFormateur'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

function Profil() {
  return (
    <div>
      <Breadcrumb listTag="div">
        <BreadcrumbItem>
          <Link to='/' style={{ textDecoration: 'none' }} className='fs-5 fw-bold text-black'>Accueil</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <span  style={{ textDecoration: 'none' }} className='fs-5 fw-bold text-black'>Mon Profil</span>
        </BreadcrumbItem>
      </Breadcrumb>
      <ProfilFormateur />
    </div>
  )
}

export default Profil