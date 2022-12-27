import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

// components
import AdminReports from "../components/AdminReports";

const AdminReportsPage = () => {
  const {user} = useAuthContext()
  const [reports, setreports] = useState()
  const [error, setError] = useState()


  const params = new URLSearchParams(window.location.search);
  const user_id = params.get('userId');

  useEffect(() => {
    const fetchReviews = async () => {
      
      const response = await fetch('/api/reports/getReports',{
        method: 'GET',
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
    <div className="course">
      <div classname="courses"> 
      <div className="reports">
      <h5 >All Reports!</h5>
      <div className="reports"> 
        {reports && reports.map((report) =>(
        <AdminReports report={report} key={report._id} />))}          
      </div>
      <br />
      {error && <div className="error">{error}</div>}
      </div>
      </div>
    </div>
  )
}



export default AdminReportsPage