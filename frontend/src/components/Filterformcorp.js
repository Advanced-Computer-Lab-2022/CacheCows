import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';
import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import TCourseDetails from "./corpviewAllcourses";
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';


 const FForm = () =>  {
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
<br></br>
      <FormControl sx={{ m: 1, minWidth: 120 , marginRight :85}} onSelect={handleSubmit}>
        <InputLabel id="demo-simple-select-helper-label">Subject</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={filter}
          label="Subject"
          onChange={handleChange1}
        >
        
        <MenuItem value="Biology">Biology</MenuItem>
        <MenuItem value="Hardware">Hardware</MenuItem>
        <MenuItem value="IT and Software">IT and Software</MenuItem>
        <MenuItem value="Music">Music</MenuItem>
        <MenuItem value=""><em>None</em></MenuItem>
        </Select>
        <FormHelperText>Choose The Subject</FormHelperText>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 ,marginRight :35, marginTop: -11}} onSelect={handleSubmit}>
        <InputLabel id="demo-simple-select-helper-label">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={filter2}
          label="Rating"
          onChange={handleChange2}
        >
        <MenuItem value="5" >5</MenuItem>
        <MenuItem value="4" >4</MenuItem>
        <MenuItem value="3" >3</MenuItem>
        <MenuItem value="2" >2</MenuItem>
        <MenuItem value="1" >1</MenuItem>
        <MenuItem value=""><em>None</em></MenuItem>

        </Select>
        <FormHelperText>Choose The Rating</FormHelperText>
      </FormControl>

      {error && <div className="error">{error}</div>}

    

      <Button sx={{marginLeft: 80, marginTop : -20}} onClick={clear}>Clear Filters</Button>

      <div className="courses"> 
        {courses && courses.map((course) =>(
        <TCourseDetails course={course} key={course._id} />))}          
      </div> 

    
      </div>
    );
  }


  export default FForm