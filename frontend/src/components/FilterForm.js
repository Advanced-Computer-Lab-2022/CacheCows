import * as React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';
import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import CourseDetails from './CourseDetailsInst';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


 const FForminst = () =>  {
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
      instructor_id : user._id,
      course_subject : filter,
      course_rating : filter2 }

    const response = await fetch('/api/courses/filterCourseBySubjectOrRatingInst', {
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
      <div className='filter'>
        <h3>Subject: {filter}</h3>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={filter}
          label="Age"
          onChange={handleChange1}
          onClick={handleSubmit}
        >
        <MenuItem value=""><em>None</em></MenuItem>
        <MenuItem value="Biology">Biology</MenuItem>
        <MenuItem value="Hardware">Hardware</MenuItem>
        <MenuItem value="IT and Software">IT and Software</MenuItem>
        <MenuItem value="Music">Music</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
      <br/>

      <h3>Rating: {filter2}</h3>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={filter2}
          label="Age"
          onChange={handleChange2}
          onClick={handleSubmit}
        >
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

      <button onClick={clear}>Clear Filters</button>

      <div className="courses"> 
        {courses && courses.map((course) =>(
        <CourseDetails course={course} key={course._id} />))}          
      </div> 

    
      </div>
    );
  }


  export default FForminst