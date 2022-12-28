import { useEffect, useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import AdminPromotion from "../components/AdminPromotion";
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from "@mui/material";
import rubixgif from '../assets/Rubix.gif';
import Box from '@mui/material/Box';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const AdminSetPromo=()=>{
    const {user} = useAuthContext()

    const[course_discount_time,setDiscountTime]=useState('');
    const[course_discount_start,setDiscountTimeStart]=useState('');

    const[course_discount,setDiscount]=useState('');

    const[error , setError] = useState(null);
    const [courses, setCourses] = useState(null)
    const [personName, setPersonName] = React.useState([]);
    const [allFlag, setAll] = useState(false)

    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/courses/getCourses')
      const json = await response.json()

      if (response.ok) {
        setCourses(json)
      }
    }

    fetchCourses()
  }, [])
    

    const handleSubmit = async(e) => {
        e.preventDefault();
    
        const course = {courses : personName,
        course_discount_time : course_discount_time,
        course_discount_start : course_discount_start,
        course_discount : course_discount}

        const response = await fetch('/api/admins/AdminSetDiscount', {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
if(!response.ok) {
    console.log(json)
    setError(json.error)
}
if(response.ok) {
    setDiscountTime('');
    setDiscountTimeStart('');
    setDiscount('');
    setPersonName('')
    console.log(json)
    setError(null)


}

}

const selectAll = (event) => {
  setAll(!allFlag);
  
    if(personName.length !== 0){
      setPersonName('')
    }
    else{
    setPersonName(courses)
}
};

return(
<div className="pagesplain">
  <br></br>
    <form className="reports" onSubmit={handleSubmit}>
      <br></br>
    <label>Course Discount % </label>
        <input
            type = "text"
            onChange={(e) => setDiscount(e.target.value)}
            value={course_discount}
        />

    <label>Start Date  </label>
    <input
        type = "Date"
        onChange={(e) => setDiscountTimeStart(e.target.value)}
        value={course_discount_start}
    />
    <label>End Date</label>
    <input
        type = "Date"
        onChange={(e) => setDiscountTime(e.target.value)}
        value={course_discount_time}
    />
    <div>
    <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Course</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Course" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
        {courses && courses.map((course) =>(
            <MenuItem key={course.course_id} value={course.course_id}>
            <Checkbox checked={personName.indexOf(course.course_id) > -1} />
            <ListItemText primary={course.course_id} />
          </MenuItem>
        ))}
                </Select>
      </FormControl>
    </div>
    <Typography>
                <Checkbox checked={allFlag} onClick={selectAll}/>
                Select All Courses
      </Typography>
         <button>Set Discount</button>
         <br></br>
        {error && <div className="error">{error}</div>}
        <br></br>
    </form>

    <br></br>
        <div>
            
                                <Box
                        component="img"
                        sx={{ height: 438, width: 825 , padding : 0, margins: 0}}
                        alt="Logo"
                        src={rubixgif}
                        />
                        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>


   
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
)
}
export default AdminSetPromo
    
