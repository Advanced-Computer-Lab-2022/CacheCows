import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link, json } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import ReportUnseen from "../components/ReportUnseen";
import ReportPending from "../components/ReportPending";
import ReportResolved from "../components/ReportResolved";
import TextField from '@mui/material/TextField';
import Comments from "../components/NewText";

// components
import MyReports from "../components/MyReports";

const ReportFUPage = () => {
  const {user} = useAuthContext()
  const [reports, setreports] = useState('')
  const [error, setError] = useState(null)
  const [Uflag, setUflag] = useState(true)
  const [Pflag, setPflag] = useState(false)
  const [Rflag, setRflag] = useState(false)

  const [report, setreport] = useState('')
        const [report_type, settype] = useState('')
        const [admin_id, setAID] = useState('')
        const [user_id, setUID] = useState('')
        const [user_name, setname] = useState('')
        const [report_status, setStatus] = useState('')
        const[success , setSuccess] = useState(null)
        const [report_comment, setComment] = useState('')
        const [comments, setComments] = useState('')


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

      const response1 = await fetch('/api/reports/getComments',{
        method: 'POST',
        body: JSON.stringify(rid),
        headers: {
          'Content-Type' : 'application/json',
          //'Authorization': `Bearer ${user.token}`
        },
      })

      const json1 = await response1.json()

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

      if (response1.ok) {
        setComments(json1)
        console.log('comments: ',json1)
      }
      if(!response1.ok){
        setComments()
        setError(json1.error)
        console.log('No comments: ',json1)
      }

    }

    fetchReviews()
  }, [rid])

  return (
    <div className="reports">
      <div classname="filter"> 
      <h3 className="reports">Report #{reports.course_id}!</h3>
      <div className=""> 
      {Uflag && (<ReportUnseen/>)}
      {Pflag && (<ReportPending/>)}
      {Rflag && (<ReportResolved/>)}
      <TextField 
            className="filter"
            multiline
            maxRows={4}
            id="outlined-basic" 
            label="Comment" 
            variant="outlined" 
            type = "text"
            onChange={(e) => setComment(e.target.value)}
            value={report_comment}/>
                  <div className="dashboardpage">
            {comments && comments.map((comment) =>(
              <Comments comment={comment} key={comment._id}/>
            ))}  
            {error && <div className="error">{error}</div>}
            </div> 
      </div>
      </div>
      </div>
  )
}



export default ReportFUPage