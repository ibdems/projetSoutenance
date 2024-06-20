import React from 'react'
import './titre.scss'

export default function Titre({size}) {
  return (
    <>
        <span className='titre' style={{fontSize: `${size}`}}>Match<span className='text-warning fs-1'>S</span>avoir</span>
    </>
  )
}
