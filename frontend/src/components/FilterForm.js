import React, { Fragment, useReducer, useState } from "react";
import "../styles.css";
import CheckboxDropdownComponent, {
  createStyles
} from "react-checkbox-dropdown";
import Instructor from "../pages/Instructor";
import CourseDetails from "./CourseDetails";
import { Container } from "react-bootstrap";

const options = [
  "Development",
  "Business",
  "IT and Software",
  "Hardware",
  "Design"
].map(item => ({ value: item, label: item }));

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
  const [checkboxValue, setValue] = useState([]);
  const [filter, setFilter] = useState('');
  const [courses, setCourses] = useState('');
  const[error , setError] = useState(null);

  const handleSubmit = async(e) => {
    e.preventDefault()


    const subj = { course_subject : filter }

    const response = await fetch('/api/courses/filterCourseBySubjectOrRating', {
        method: 'POST',
        body: JSON.stringify(subj),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    const json = await response.json()

    if(!response.ok) {
        setError(json.error)
        setCourses('')
        setFilter('')
    }
    if(response.ok) {
     setCourses(json)
     setError(null)
     setFilter('')

        
    console.log('Courses Retrieved', checkboxValue)
    }
}



  return (
    <form onSubmit={handleSubmit}>
    <Fragment>
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
              //handleSubmit()
            }else{
                setFilter(e.label)
                //handleSubmit()
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
    </Fragment>
    <div className="courses"> 
        {courses && courses.map((course) =>(
        <CourseDetails course={course} key={course._id} />))}          
    </div> 
    </form>
  );
}

export default Filter;
