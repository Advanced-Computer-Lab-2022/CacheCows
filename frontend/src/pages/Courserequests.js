import { useEffect, useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import Reqdetails from "../components/viewCourseReq"
import { useNavigate } from "react-router-dom";

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

        <div className="app"  >
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