import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailRecherche() {
    const {sessionId} = useParams();
    console.log(sessionId)
  return (
    <div>DetailRecherche</div>
  )
}
