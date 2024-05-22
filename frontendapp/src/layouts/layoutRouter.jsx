import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import ListDemande from '../pages/demande/ListDemande'
import ListFormateur from '../pages/formateur/ListFormateur'
import ListPayement from '../pages/payement/ListPayement'
import Profil from '../pages/profil/Profil'
import Connexion from '../pages/connexion/Connexion'
import Dashboard from '../pages/dashboard/Dashboard'
import ListFormation from '../pages/formation/ListFormation'
import GestionFormation from '../pages/formation/GestionFormation'
import AjoutFormation from '../pages/formation/AjoutFormation'
import AjoutFormateurCabinet from '../pages/formateur/AjoutFormateurCabinet'
import ListUtilisateur from '../pages/utilisateurs/ListUtilisateur'

function LayoutRouter() {
    return (
        <Routes>
            <Route element={<Layout />}>
                {/* La route du dashboard */}
                <Route index element={<Dashboard />} />
                {/* Les routes pour les formations */}
                <Route path='/formation'>
                    {/* Route pour la liste des formations */}
                    <Route path='list' element={<ListFormation />}> </Route>
                    {/* Route pour la gestion des formations, héritant de la liste des formations */}
                    <Route path='gestion/:formationId' element={<GestionFormation />} />
                    <Route path='ajoutformation' element={<AjoutFormation/>}/>
                </Route>
                {/* Les routes pour la gestion d'inscription */}
                <Route path='/gestionInscription'>
                    <Route index element={<ListDemande />} />
                    
                </Route>
                {/* Les routes pour la gestion des formateurs */}
                <Route path='/formateur'>
                    <Route index element={<ListFormateur />} />
                    <Route path='ajoutformateurcabinet' element={<AjoutFormateurCabinet/>}></Route>
                </Route>
                {/* Les routes pour la gestion des utilisateurs */}
                <Route path='/utilisateurs'>
                    <Route index element={<ListUtilisateur />} />
                </Route>
                {/* Les routes pour la gestion des payements */}
                <Route path='/payement'>
                    <Route index element={<ListPayement />} />
                </Route>
                {/* La route du profil */}
                <Route path='/profil' element={<Profil />} />
                
            </Route>
        </Routes>
    )
}

export default LayoutRouter
