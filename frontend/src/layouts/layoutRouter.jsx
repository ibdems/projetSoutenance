import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import ListDemande from '../pages/demande/ListDemande'
import ListFormateur from '../pages/formateur/ListFormateur'
import ListPayement from '../pages/payement/ListPayement'
import Profil from '../pages/profil/Profil'
import Connexion from '../pages/Connexion'
import Dashboard from '../pages/dashboard/Dashboard'
import ListFormation from '../pages/formation/ListFormation'
function LayoutRouter() {
  return (
    <Routes>
        <Route element= {<Layout/>}>
            {/* La route du dashboard */}
            <Route index  element={<Dashboard/>} />
            {/* Les routes  pour les formations */}
            <Route path='formation'>
                <Route path='list' element={<ListFormation/>}/>
            </Route>
            {/* Les routes  pour les gestions d'inscription */}
            <Route path='gestionInscription'>
                <Route path='list' element={<ListDemande/>}/>
            </Route>
            {/* Les routes  pour la gestion des formateurs */}
            <Route path='formateur'>
                <Route path='list' element={<ListFormateur/>}/>
            </Route>
            {/* Les routes  pour la gestion des utilisateurs */}
            <Route path='utilisateurs'>
             smartyp <Route path='list' element={<ListFormateur/>}/>
            </Route>
            {/* Les routes  pour la gestion des payements */}
            <Route path='payement'>
                <Route path='list' element={<ListPayement/>}/>
            </Route>
            {/* La route du profile */}
            <Route path='profil' element={<Profil/>} />
            {/* La route pour la deconnexion */}
            <Route path='deconnexion' element={<Connexion/>} />
        </Route>
    </Routes>
  )
}

export default LayoutRouter