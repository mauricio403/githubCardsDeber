import React, { useState } from 'react'
// import axios from 'axios';
import './app.css'
import { Formulario } from './Formulario';
// import TextField from '@material-ui/core/TextField'
import { CardList } from './ListaTarjetas';



//padre hecho funcion


export const Tarjetas2 = ({tittle}) => {

  const [profiles, setProfiles] = useState([]);

  const addNewProfile = (profileData) => {

    setProfiles([...profiles, profileData])

  }


  return (
    <div>
        <div className="header">{tittle}</div>
        <Formulario onSubmit={addNewProfile} />
        <CardList profiles={profiles} />
    </div>
  )
}


