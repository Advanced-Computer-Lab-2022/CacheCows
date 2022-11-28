import React, { Fragment, useReducer, useState } from "react";
import "../styles.css";
import CheckboxDropdownComponent, {
  createStyles
} from "react-checkbox-dropdown";
import Instructor from "../pages/Instructor";
import CourseDetails from "./CourseDetails";
import { Container } from "react-bootstrap";
import { useAuthContext } from "../hooks/useAuthContext"

const options = [
  "Development",
  "Business",
  "IT and Software",
  "Hardware",
  "Design"
].map(item => ({ value: item, label: item }));

const options2 = [
  "5",
  "4",
  "3",
  "2",
  "1"
].map(item2 => ({ value: item2, label: item2 }));

const style = createStyles({
  container({ isFocused }) {
    return {
      backgroundColor: "#e1a",
      color: "yellow",
      border: `.5px solid ${isFocused ? "yellow" : "transparent"}`
    };
  },
  displayText({ isOpen }) {
    return {
      color: isOpen ? "yellow" : "white"
    };
  }
});



function Filter() {
  const {user} = useAuthContext();

  const [checkboxValue, setValue] = useState([]);
  const [checkboxValue2, setValue2] = useState([]);
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

    if(!response.ok || checkboxValue.length === 0) {
        setError(json.error)
        setCourses('')
        setFilter('')

        console.log('checkboxValue !ok: ', checkboxValue)
        console.log('filter !ok: ', filter)
    } 
    if(response.ok) {
     setCourses(json)
     setError(null)

        
     console.log('checkboxValue: ', checkboxValue)
     console.log('filter: ', filter)
    }
}

const handleSubmit2 = async(e) => {
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

   if(!response.ok || checkboxValue2.length === 0){
    setError2(json.error)
    setFilter2('')

    console.log('checkboxValue2: ', checkboxValue)
    console.log('filter2: ', filter)
  }
  if(response.ok) {
   setCourses(json)
   setError2(null)

      
   console.log('checkboxValue2: ', checkboxValue)
   console.log('filter2: ', filter)
  }
}



  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div className="defalut">
        <CheckboxDropdownComponent 
          onSubmit={handleSubmit}
          displayText="Filter By Subject"
          options={options}
          onChange={e => {
            if (!checkboxValue.includes(e)) {
              const newValue = [...checkboxValue, e];
              setValue(newValue);
              setFilter(e.label)
              handleSubmit()
            }else{
                setFilter(e.label)
                handleSubmit()
            }
          }}
          onDeselectOption={option => {
            const filteredOptions = checkboxValue.filter(
              item => item.value !== option.value
            );
            setValue(filteredOptions);
          }}
          value={checkboxValue}
          displayTags
          isStrict={false}
        />
        {error && <div className="error">{error}</div>}
      </div>
    </form>

    <br/>

    <form onSubmit={handleSubmit2}>
      <div className="defalut2">
        <CheckboxDropdownComponent 
          onSubmit={handleSubmit2}
          displayText="Filter By Rating"
          options={options2}
          onChange={e => {
            if (!checkboxValue2.includes(e)) {
              const newValue2 = [...checkboxValue2, e];
              setValue2(newValue2);
              setFilter2(e.label)
              handleSubmit()
            }else{
              setFilter2(e.label)
              handleSubmit()
            }
          }}
          onDeselectOption2={option2 => {
            const filteredOptions2 = checkboxValue2.filter(
              item2 => item2.value !== option2.value
            );
            setValue2(filteredOptions2);
          }}
          value={checkboxValue2}
          displayTags2
          isStrict={true}
        />
        {error2 && <div className="error">{error2}</div>}
      </div>
    </form>
    <div className="courses"> 
        {courses && courses.map((course) =>(
        <CourseDetails course={course} key={course._id} />))}          
    </div> 
    </div>
  );
}

export default Filter;