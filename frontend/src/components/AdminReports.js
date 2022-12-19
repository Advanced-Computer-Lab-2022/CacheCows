import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import Popover from '@mui/material/Popover';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate } from "react-router-dom";

const AdminReports = ({ report }) => {
    const params = new URLSearchParams(window.location.search);
    const admin_id = params.get('admin_id');
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [report_status, setstatus] = React.useState('')
    const { user } = useAuthContext()
    const[error , setError] = useState(null)
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);

   const handlereport1 = () => {
    setChecked1(!checked1)
    setChecked2(false)
   }

   const handlereport2 = () => {
    setChecked1(false)
    setChecked2(!checked2)
   }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleSubmit = async(e) => {
    e.preventDefault()

    if (!user) {
        setError('You must be logged in')
        return
      }

    const repo = {
        _id : report._id,
        report_status : report_status,
        admin_id : admin_id
        
    }

    const response = await fetch('/api/reports/UpdateReport', {
        method: 'PUT',
        body: JSON.stringify(repo),
        headers: {
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${user.token}`
        }
    })
    const json = await response.json()

    if(!response.ok) {
        setError(json.error)
        console.log('Report Not Updated', json)
    }
    if(response.ok) {
    setError(null) 
    console.log('Report Updated', json)
    }
}
const navigate=useNavigate();
  return (
    <div>
    <Card sx={{ maxWidth: 345 }} className='reports' onClick={() => window.location.href=`/ReportFUPage?_id=${report._id}`}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://dsu.edu/root-files/report-945x630.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Report #{report.course_id}
          </Typography>
          <Typography variant="body1" color="text.primary">
          {report.report}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {report.report_status}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="secondary" aria-label="edit">
        <EditIcon aria-describedby={id} variant="contained" onClick={handleClick} />
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
      >
        <FormGroup>
            <FormControlLabel control={<Checkbox onChange={handlereport1} checked={checked1} onClick={(e) => setstatus(e.target.value)} value={'Pending'}  />} label="Pending" />
            <FormControlLabel control={<Checkbox onChange={handlereport2} checked={checked2} onClick={(e) => setstatus(e.target.value)} value={'Resolved'} />} label="Resolved" />
            <Button onClick={handleSubmit} color="secondary">Update</Button>
        </FormGroup>
      </Popover>
      </Fab>
      </Box>
      </CardActions>
    </Card>
    <br/>
    </div>
  );
}

export default AdminReports