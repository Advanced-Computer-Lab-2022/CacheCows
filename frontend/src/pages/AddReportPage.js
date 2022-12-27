import { useEffect, useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext";

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { BorderLeft } from "@material-ui/icons";
    
const AddReportPage = () => {
        const params = new URLSearchParams(window.location.search);
        const course_id = params.get('course_id');
        const { user } = useAuthContext()
    
        const [report, setreport] = useState('')
        const [report_type, settype] = useState('')
        const [admin_id, setAID] = useState('')
        const [user_id, setUID] = useState('')
        const [user_name, setname] = useState('')
        const [report_status, setStatus] = useState('')
        const[error , setError] = useState(null)
        const[success , setSuccess] = useState(null)
        const [report_comment, setComment] = useState('')
    
        const handleChange = (event) => {
            settype(event.target.value);
          };
    
        const handleSubmit = async(e) => {
            setStatus('Unseen')
            setAID(' ')
            setUID(user._id)
            setname(user.name)
            e.preventDefault()
    
            if (!user) {
                setError('You must be logged in')
                return
              }
    
            const rprt = {
                report,
                report_type,
                course_id,
                admin_id,
                user_id,
                user_name,
                report_status,
                report_comment
                
            }
    
            const response = await fetch('/api/reports/setReport', {
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
                setSuccess(null)

                console.log('No Report Added', json)
            }
            if(response.ok) {
            setreport('')
            settype('')
            setUID('')
            setname('')
            setStatus('')
            setComment('')
            setError(null)
    
            setSuccess(json.success)
                
            console.log('New Report Added', json)
            }
        }
    
    
    return (
        <form className="filter" onSubmit={handleSubmit}>
            <h3>Add a New Report!</h3>
            <Stack spacing={2} direction="row" sx={{marginLeft : 3}}>
            
    
            <TextField 
            multiline
            maxRows={4}
            id="outlined-basic" 
            label="Report" 
            variant="outlined" 
            type = "text"
            onChange={(e) => setreport(e.target.value)}
            value={report}/>

            <br/>
    
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={report_type}
                label="Report Type"
                onChange={handleChange}
            >
              <MenuItem value="">
              </MenuItem>
                <MenuItem value={'Technical'}>Technical</MenuItem>
                <MenuItem value={'Financial'}>Financial</MenuItem>
                <MenuItem value={'Other'}>Other</MenuItem>
            </Select>
            <TextField 
            sx={{ marginLeft : -27.5, marginTop : 1}}
            multiline
            maxRows={4}
            id="outlined-basic" 
            label="Comment" 
            variant="outlined" 
            type = "text"
            onChange={(e) => setComment(e.target.value)}
            value={report_comment}/>
                                      
            </FormControl>
            </Stack>
            <br/>
    
            <Button onClick={handleSubmit} variant="contained">Add Report</Button>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}
        </form>
        )
    }
    
export default AddReportPage