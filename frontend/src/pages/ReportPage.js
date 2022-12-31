import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";


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

  const navigate=useNavigate();

  return (
    <div>
                  <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>

            <br/>
      <br/>

      <br/>

    <div className="reports">
            <br/>

      <div className="reports">
      <h3>Your Reports!</h3>
      <br></br>
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
  )
}



export default ReportsPage