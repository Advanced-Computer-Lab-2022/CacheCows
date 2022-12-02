import { useState,useEffect } from "react";
import { json } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext"

    

    const Corpregistered=()=>{
        const params = new URLSearchParams(window.location.search);
        const userId = params.get('userId');
        const {user} = useAuthContext()
        console.log(userId)
        const handleSubmit = async(e) => {
            e.preventDefault()
            const corp={userId}

            const response=await fetch('/api/corpTrainee/registercourse',{
                method: 'POST',
                body:JSON.stringify(corp),
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization': `Bearer ${user.token}`
                    
                }
               
            })
            const json = await response.json()
            console.log(json)
        }

        return(
            <form className="create" onSubmit={handleSubmit} >
            <h2>Enter your Appeal</h2>
            <input type="text" />
            <button>confirm your appeal</button>
            </form>
        )
    }
    export default Corpregistered