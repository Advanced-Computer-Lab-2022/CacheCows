import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link, json } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import ReportUnseen from "../components/ReportUnseen";
import ReportPending from "../components/ReportPending";
import ReportResolved from "../components/ReportResolved";

// components
import MyReports from "../components/MyReports";

const ReportFUPage = () => {
  const {user} = useAuthContext()
  const [reports, setreports] = useState('')
  const [error, setError] = useState(null)
  const [Uflag, setUflag] = useState(true)
  const [Pflag, setPflag] = useState(false)
  const [Rflag, setRflag] = useState(false)


  const params = new URLSearchParams(window.location.search);
  const _id = params.get('_id');
  const rid = {_id : _id}

  useEffect(() => {
    const fetchReviews = async () => {
      
      const response = await fetch('/api/reports/get1Report',{
        method: 'POST',
        body: JSON.stringify(rid),
        headers: {
          'Content-Type' : 'application/json',
          //'Authorization': `Bearer ${user.token}`
        },
      })

      const json = await response.json()

      if (response.ok) {
        setreports(json)
        console.log('Report: ',json)
      }
      if(!response.ok){
        setreports()
        setError(json.error)
        console.log('No Reports: ',json)
      }
      if(json.report_status === 'Pending'){
        setUflag(false)
        setPflag(true)
        setRflag(false)
      }
      if(json.report_status === 'Resolved'){
        setUflag(false)
        setPflag(false)
        setRflag(true)
      }

    }

    fetchReviews()
  }, [])

  return (
    <div className="course">
      <div classname="courses"> 
      <div className="reports">
      <h3 className="header">Report #{reports.course_id}!</h3>
      <div className="reports"> 
      {Uflag && (<ReportUnseen/>)}
      {Pflag && (<ReportPending/>)}
      {Rflag && (<ReportResolved/>)}      
      </div>
      </div>
      </div>
    </div>
  )
}



export default ReportFUPage