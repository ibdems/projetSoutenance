import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Accueil from '../pages/accueil/Accueil'
import Recherche from '../pages/rechercheFormation/Recherche'
import DetailRecherche from '../pages/rechercheFormation/detailRecherche/DetailRecherche'
import IndexInscription from '../pages/inscriptions/Index'

export default function PublicRouter() {
  return (
    <Routes>
      <Route index element={<Accueil />}></Route>
      <Route path='/rechercheformation' element={<Recherche />}></Route>
      <Route path='/rechercheformation/detail/:sessionId' element={<DetailRecherche />}></Route>
      <Route path='/inscription' element={<IndexInscription/>}/>
    </Routes>
  )
}
