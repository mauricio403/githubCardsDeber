import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField'

export const Formulario = ({onSubmit}) => {

    const [userName, setUserName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${userName}`)

        onSubmit(resp.data);
        setUserName('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
           
              label="Github username"
              type="text"
              value={userName}
              onChange={e => setUserName(e.target.value)}

              required
              
            />
            <hr />

            <button>Add card</button>
        </form>
    )
}
