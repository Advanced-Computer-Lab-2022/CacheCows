import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link, json } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import ReportUnseen from "../components/ReportUnseen";
import ReportPending from "../components/ReportPending";
import ReportResolved from "../components/ReportResolved";
import TextField from '@mui/material/TextField';
import Comments from "../components/NewText";
import { Button, Icon } from '@mui/material';

// components
import MyReports from "../components/MyReports";

const ReportFUPage = () => {
  const {user} = useAuthContext()
  const [reports, setreports] = useState('')
  const [error, setError] = useState(null)
  const [Uflag, setUflag] = useState(true)
  const [Pflag, setPflag] = useState(false)
  const [Rflag, setRflag] = useState(false)

        const [report_type, settype] = useState('')
        const [report_id, setRID] = useState('')
        const [admin_id, setAID] = useState('')
        const [user_id, setUID] = useState('')
        const [course_id, setCID] = useState('')

        const [report_comment, setComment] = useState('')

        const [user_name, setname] = useState('')


        const [report_comment1, setComment1] = useState('')
        const [comments, setComments] = useState('')


  const params = new URLSearchParams(window.location.search);
  const _id = params.get('_id');
  const rid = {_id : _id}
  const reid = {report_id : _id}

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
        body: JSON.stringify(reid),
        headers: {
          'Content-Type' : 'application/json',
          //'Authorization': `Bearer ${user.token}`
        },
      })

      const json1 = await response1.json()

      if (response.ok) {
        setreports(json)

        setRID(reports._id)
        setAID(reports.admin_id)
        setUID(reports.user_id)
        setCID(reports.course_id)

        console.log('Report: ',reports.report_comment)
      }
      if(!response.ok){
        setreports()
        setComment1()
        setError(json.error)
        console.log('No Reports: ',json)
      }

      
      if (response1.ok) {
        setComments(json1)
        setComment1(reports)
        console.log('comments: ',reports)
      }
      if(!response1.ok){
        setComments()
        setError(json1.error)
        console.log('No comments: ',json1)
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
  }, [rid])

  const handleSubmit = async(e) => {
    e.preventDefault()

    if (!user) {
        setError('You must be logged in')
        return
      }

    const rprt = {
      report_id, 
      report_comment,
      course_id,
      user_id,
      admin_id,
    }

    const response = await fetch('/api/reports/AddComment', {
        method: 'POST',
        body: JSON.stringify(rprt),
        headers: {
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${user.token}`
        }
    })
    const json = await response.json()

    if(!response.ok) {
        setError(json.error)

        console.log('No Report Added', json)
    }
    if(response.ok) {
    settype('')
    setUID('')
    setComment('')
    setError(null)
        
    console.log('New Comment Added', json)
    }
}

  return (
    <div className="course">
      <div classname="courses"> 
      <br></br>
      <br></br>

      <br></br>

      <div className="reports">
      <h3 className="reports-header">Report #{reports.course_id}!</h3>
      <div className="reports"> 
      {Uflag && (<ReportUnseen/>)}
      {Pflag && (<ReportPending/>)}
      {Rflag && (<ReportResolved/>)}
      <TextField 
            className="reports"
            multiline
            maxRows={4}
            id="outlined-basic" 
            label="Comment" 
            variant="outlined" 
            type = "text"
            onChange={(e) => setComment(e.target.value)}
            value={report_comment}/>
            <Button onClick={handleSubmit} size='xlarge' sx={{border : 2, marginTop : 1}}>Add Comment</Button>
            {report_comment1 && (<Comments comment={report_comment1}/>)}
                  <div className="dashboardpage">
            {comments && comments.map((comment) =>(
              <Comments comment={comment} key={comment._id}/>
            ))}  
            {error && <div className="error">{error}</div>}
            </div> 
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
      </div>
      </div>
      </div>
  )
}



export default ReportFUPage