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

 const FFormPriceIND = () =>  {
  const {user} = useAuthContext();

  const [filter, setFilter] = useState('');
  const [courses, setCourses] = useState('');
  const[error , setError] = useState(null);

  const handleChange1 = (event) => {
    setFilter(event.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault()


    const price = { 
      course_price : filter 
    }

    const response = await fetch('/api/courses/filterCourseByPrice', {
        method: 'POST',
        body: JSON.stringify(price),
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${user.token}`
        }
    })
    const json = await response.json()

    if(!response.ok) {
        setError(json.error)
        setCourses('')

        console.log('filter !ok: ', filter)
        console.log('response: ', json)
    } 
    if(response.ok) {
     setCourses(json)
     setError(null)

        
     console.log('filter: ', filter)
    }
}

function clear(){
  setFilter('');
  setCourses('');
  setError(null);
}
  
    return (
      <div className='realfilter'>

        <FormControl sx={{ m: 1, minWidth: 120 , marginRight :85}} onSubmit={handleSubmit}>
        <InputLabel id="demo-simple-select-helper-label">Price</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={filter}
          label="Age"
          onChange={handleChange1}
        >
          <MenuItem value=""><em>None</em></MenuItem>
        <MenuItem value="100">Up to 100</MenuItem>
        <MenuItem value="250">Up to 250</MenuItem>
        <MenuItem value="400">Up to 400</MenuItem>
        <MenuItem value="3000">up to 3000</MenuItem>
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


  export default FFormPriceIND