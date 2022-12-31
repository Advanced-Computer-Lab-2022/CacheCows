import { useState,useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext"
import CorpviewRequests from "../components/Corpviewrequests";

const Corpviewreq=()=>{
    const [request,setRequest]=useState('')
    const {user} = useAuthContext()
useEffect(()=>{
    const func=async()=>{
        const response=await fetch('/api/corpTrainee/viewmyreq',{
            method: 'GET',
          headers: {
    'Content-Type' : 'application/json',
     'Authorization': `Bearer ${user.token}`
        },
    })
    const json =  await response.json()
     console.log(json)
if(response.ok){
console.log("hi")
setRequest(json)
}
if(!response.ok){
console.log(json)

}


}
func()
    },[user])


return(
    <div className="app"  >
        { request && request.map((request) =>(
            <CorpviewRequests request={request} key={request._id} />))}
        </div>
)
        }
export default Corpviewreq