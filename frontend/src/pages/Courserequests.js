import { useEffect, useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import Reqdetails from "../components/viewCourseReq"
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


    
    return(
        <div >
        <div className="app"  >
        { corprequests && corprequests.map((request) =>(
            <Reqdetails request={request} key={request._id} />))}
        </div>
        </div>
        );
}


  
  
  
export default Viewrequests