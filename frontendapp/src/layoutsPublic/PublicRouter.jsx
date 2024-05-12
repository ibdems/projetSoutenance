import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Accueil from '../pages/accueil/Accueil'
import Recherche from '../pages/rechercheFormation/Recherche'
import DetailRecherche from '../pages/rechercheFormation/detailRecherche/DetailRecherche'
import IndexInscription from '../pages/inscriptions/Index'
import Connexion from '../pages/connexion/Connexion'
import LayoutPublic from './LayoutPublic'
import RechercheFormateur from '../pages/rechercheFormateur/RechercheFormateur'

export default function PublicRouter() {
  return (
    <Routes>
      <Route element={<LayoutPublic />}>
        <Route index element={<Accueil />}></Route>
        <Route path='/rechercheformation' element={<Recherche />}></Route>
        <Route path='/rechercheformateur' element={<RechercheFormateur />}></Route>
        <Route path='/rechercheformation/detail/:sessionId' element={<DetailRecherche />}></Route>
        <Route path='/inscription' element={<IndexInscription />} />
        <Route path='/connexion' element={<Connexion />} />
      </Route>

    </Routes>
  )
}
