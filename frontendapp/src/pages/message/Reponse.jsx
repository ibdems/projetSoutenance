import React, { useState } from 'react'
import { MyInput } from '../../components/Forms/Forms'

export default function ReponseMessage({expediteur, objet}) {
    const [contenue, setContenue] = useState('')
    const handleContenuChange = (e) => {
        setContenue(e)
    }
  return (
    <div>
        <div className='fw-bold'>A: <span>{expediteur}</span></div>
        <div className='fw-bold mb-2'>Objet: <span>{objet}</span></div>

        <MyInput type={'textarea'} rows={8} value={contenue} onChange={handleContenuChange}/>

    </div>
  )
}
