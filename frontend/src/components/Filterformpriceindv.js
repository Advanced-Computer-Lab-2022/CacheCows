import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';
import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import CourseDetails from './traineeviewCourses';

 const FFormPrice = () =>  {
  const {user} = useAuthContext();

  const [filter, setFilter] = useState('');
  const [courses, setCourses] = useState('');
  const[error , setError] = useState(null);

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
      <div className='filter'>
        <h3>Price: {filter}</h3>
      <Dropdown color="primary" label="Filter By Price" className='filter' onClick={handleSubmit}
      onSelect={(v) => setFilter(v)}
      >
        <DropdownItem value="100">Up to 100</DropdownItem>
        <DropdownItem value="250">Up to 250</DropdownItem>
        <DropdownItem value="400">Up to 400</DropdownItem>
        <DropdownItem value="3000">up to 3000</DropdownItem>
      </Dropdown>

      {error && <div className="error">{error}</div>}

      <br/>

      <button onClick={clear}>Clear Filter</button>

      <div className="courses"> 
        {courses && courses.map((course) =>(
        <CourseDetails course={course} key={course._id} />))}          
      </div> 

    
      </div>
    );
  }


  export default FFormPrice