import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Test(props) {
    const [name, setName] = useState("");
   
    useEffect(() => {
       axios.get('api/auth/user_data').then((response) => {
           console.log(response.data);
       }).catch((err) => {
           if (err) {
               console.log(err);
           }
       })
    }, [])


    
    const handleChange = (event) => {
        setName(event.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(name);
        setName("");
    }

    return (
        <>
           <h1>Test</h1> 
           <label>Name:</label>
           <input type="text" value={name} onChange={handleChange} />
           <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
