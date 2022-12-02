import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';
import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import TCourseDetails from "../components/corpviewcourses";

 const FForm = () =>  {
  const {user} = useAuthContext();

  const [filter, setFilter] = useState('');
  const [filter2, setFilter2] = useState('');
  const [courses, setCourses] = useState('');
  const[error , setError] = useState(null);
  const[error2 , setError2] = useState(null);

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
      <div className='filter'>
        <h3>Subject: {filter}</h3>
      <Dropdown color="primary" label="Filter By Subject" className='filter' onClick={handleSubmit}
      onSelect={(v) => setFilter(v)}
      >
        <DropdownItem value="Biology">Biology</DropdownItem>
        <DropdownItem value="Hardware">Hardware</DropdownItem>
        <DropdownItem value="IT and Software">IT and Software</DropdownItem>
        <DropdownItem value="Music">Music</DropdownItem>
      </Dropdown>
      <br/>

      <h3>Rating: {filter2}</h3>
      <Dropdown color="primary" label="Filter By Rating" className='filter' onClick={handleSubmit}
      onSelect={(v) => setFilter2(v)}
      >
        <h4><DropdownItem value="5" >5</DropdownItem></h4>
        <h4><DropdownItem value="4" >4</DropdownItem></h4>
        <h4><DropdownItem value="3" >3</DropdownItem></h4>
        <h4><DropdownItem value="2" >2</DropdownItem></h4>
        <h4><DropdownItem value="1" >1</DropdownItem></h4>

      </Dropdown>

      {error && <div className="error">{error}</div>}

      <br/>

      <button onClick={clear}>Clear Filters</button>

      <div className="courses"> 
        {courses && courses.map((course) =>(
        <TCourseDetails course={course} key={course._id} />))}          
      </div> 

    
      </div>
    );
  }


  export default FForm