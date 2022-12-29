import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

// components
import MyReports from "../components/MyReports";

const ReportsPage = () => {
  const {user} = useAuthContext()
  const [reports, setreports] = useState()
  const [error, setError] = useState()


  const params = new URLSearchParams(window.location.search);
  const user_id = params.get('user_id');
  const uid = {user_id : user_id}

  useEffect(() => {
    const fetchReviews = async () => {
      
      const response = await fetch('/api/reports/getReport',{
        method: 'POST',
        body: JSON.stringify(uid),
        headers: {
          'Content-Type' : 'application/json',
          //'Authorization': `Bearer ${user.token}`
        },
      })

      const json = await response.json()

      if (response.ok) {
        setreports(json)
      }
      if(!response.ok){
        setreports()
        setError(json.error)
        console.log('No Reviews',json)
      }

    }

    fetchReviews()
  }, [])

  return (
    <div>
            <br/>
      <br/>

      <br/>

    <div className="filter">
            <br/>

      <div classname="courses"> 
      <div className="reports">
      <h5>Your Reports!</h5>
      <div className="reports"> 
        {reports && reports.map((report) =>(
        <MyReports report={report} key={report._id} />))}          
      </div>
      <br />
      {error && <div className="error">{error}</div>}
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


      </div>
      <br/>
      <br/>
      <br/>
      <br/>      <br/>
      <br/>
      <br/>
      <br/>      <br/>
      <br/>
      <br/>
      <br/>      <br/>
      <br/>
      <br/>
      <br/>      <br/>
      <br/>
      <br/>
      <br/>
      </div>
      </div>
  )
}



export default ReportsPage