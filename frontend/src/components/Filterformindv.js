import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';
import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import CourseDetails from './CourseDetailsInst';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FeaturedCourses from "../components/FeaturedCourses";

import CourseCardDB from "../components/CourseCardDB";
import Grid from '@mui/material/Unstable_Grid2';

import TCourseDetail from './indvtraineeviewAllCourses';

 const FFormIND = () =>  {
  const {user} = useAuthContext();

  const [filter, setFilter] = useState('');
  const [filter2, setFilter2] = useState('');
  const [courses, setCourses] = useState('');
  const[error , setError] = useState(null);
  const[error2 , setError2] = useState(null);

  const handleChange1 = (event) => {
    setFilter(event.target.value);
  };

  const handleChange2 = (event) => {
    setFilter2(event.target.value);
  };


  const handleSubmit = async(e) => {
    e.preventDefault()

    const subj = { 
      course_subject : filter,
      course_rating : filter2 }

    const response = await fetch('/api/courses/filterCourseBySubjectOrRating', {
        method: 'POST',
        body: JSON.stringify(subj),
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${user.token}`
        }
    })
    const json = await response.json()

    if(!response.ok) {
        setError(json.error)
        setError2(json.error)
        setCourses('')

        console.log('filter !ok: ', filter)
        console.log('filter2 !ok: ', filter2)
        console.log('response: ', json)
    } 
    if(response.ok) {
     setCourses(json)
     setError(null)
     setError2(null)

        
     console.log('filter: ', filter)
     console.log('filter2: ', filter2)
    }
}

function clear(){
  setFilter('');
  setFilter2('');
  setCourses('');
  setError(null);
     setError2(null);
}
  
    return (
      <div className='realfilter'>

      <FormControl sx={{ m: 1, minWidth: 120 , marginRight :85}} >
        <InputLabel id="demo-simple-select-helper-label">Subject</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={filter}
          label="Age"
          onChange={handleChange1}
          onClick={handleSubmit}
        >
        <MenuItem value="" onClick={handleSubmit}><em>None</em></MenuItem>
        <MenuItem value="Biology">Biology</MenuItem>
        <MenuItem value="Hardware" onClick={handleSubmit}>Hardware</MenuItem>
        <MenuItem value="IT and Software">IT and Software</MenuItem>
        <MenuItem value="Music">Music</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
      <br/>

      <FormControl sx={{ m: 1, minWidth: 120 ,marginRight :35, marginTop: -11}} >
        <InputLabel id="demo-simple-select-helper-label">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={filter2}
          label="Age"
          onChange={handleChange2}
          onClick={handleSubmit}
        >
          <MenuItem value=""><em>None</em></MenuItem>
        <MenuItem value="5" >5</MenuItem>
        <MenuItem value="4" >4</MenuItem>
        <MenuItem value="3" >3</MenuItem>
        <MenuItem value="2" >2</MenuItem>
        <MenuItem value="1" >1</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>

      {error && <div className="error">{error}</div>}

      <br/>
      {courses && (
      <Box >
      <h3> ___________________________________________ </h3>
     <br></br>
     <h3> Filter Results</h3>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 7, sm: 2, md: 7 }} sx={{ marginLeft : 11, }}>
            {courses && courses.map((course) =>(
          <Grid >
            <TCourseDetail course={course} key={course._id} sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 300,
            display : "inline",
            border : 2
          }}/>
          </Grid> ))}
      </Grid>
      {error && <div className="error">{error}</div>}
    </Box> 
      )}
      </div>
    );
  }


  export default FFormIND