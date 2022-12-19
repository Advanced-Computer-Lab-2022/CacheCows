import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import jsPDF from 'jspdf';
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"


const SendCertificateEmail=()=>{
const[error , setError] = useState(null);
const {user} = useAuthContext()
 const [indv_email , setEmail] = useState('');
setEmail(user.email);

const handleSubmit = async(e) => {
    e.preventDefault()
    

            
            
    const params = new URLSearchParams(window.location.search);
    const username = params.get('username');
    

      const response= await fetch('/api/indvtrainee/sendCertificateEmail',{
        method: 'POST',
        body: JSON.stringify(username),
        headers: {
          'Content-Type' : 'application/json',
        },
      })
      const json = await response.json()
if(!response.ok) {
console.log('mail not sent', json)
}
if(response.ok) {
console.log('mail sent', json)
}
        }

    


        return (
            <div style ={{textAlign : 'center'}}><br/>
            <button onClick={handleSubmit} type="primary">Send by Email</button>


            </div>
        )
    
}


export default SendCertificateEmail;