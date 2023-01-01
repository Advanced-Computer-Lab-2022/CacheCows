import { useEffect, useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import Reqdetails from "../components/AdminCourseReq"
import { useNavigate } from "react-router-dom";
import rubixgif from '../assets/Rubix.gif';
import Box from '@mui/material/Box';
const Viewrequests=()=>{
    const {user} = useAuthContext()
    const [corprequests,setCorprequests]=useState('')
    useEffect(()=>{

        const fetchreq=async()=>{
            const response=await fetch('/api/admins/viewrequests',
            {
                method:'GET',
                headers: {'Authorization': `Bearer ${user.token}`},
            })
            const json= await response.json()
            if(response.ok){
                setCorprequests(json)
                console.log(json)
                }

            
        }
        if(user){
            fetchreq()
        }
       
    },[user])

    const navigate=useNavigate();

    
    return(
        <div className="pagesplain" >

            <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>

        <div className="filter" >
        { corprequests && corprequests.map((request) =>(
            <Reqdetails request={request} key={request._id} />))}
  
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
     
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>

        );
}


  
  
  
export default Viewrequests