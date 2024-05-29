import React, { useState } from 'react'
import { MyInput } from '../../components/Forms/Forms'

export default function ReponseMessage({expediteur, objet}) {
    const [contenue, setContenue] = useState('')
    const handleContenuChange = (e) => {
        setContenue(e)
    }
  return (
    <div>
        <div className='fw-bold' style={{fontSize: '18px'}}>A: <span>{expediteur}</span></div>
        <div className='fw-bold mb-2' style={{fontSize: '18px'}}>Objet: <span>{objet}</span></div>

        <MyInput type={'textarea'} rows={8} value={contenue} onChange={handleContenuChange}/>

    </div>
  )
}
