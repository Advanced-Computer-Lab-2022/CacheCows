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
  const [filter, setFilter] = useState([]);
  const [courses, setCourses] = useState();
  const [flag, setFlag] = useState(false);
  const[error , setError] = useState(null);

  const handleSubmit = async(e) => {
    e.preventDefault()


    const subj = {
        filter
    }

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
        setValue('');
    }
    if(response.ok) {
     setValue(checkboxValue);
     setFlag(true)
     setCourses(json)
     setError(null)
        
    console.log('Courses Retrieved', json)
    }
}



  return (
    <form onSubmit={handleSubmit}>
    <Fragment >
      <div className="defalut" onSubmit={handleSubmit}>
        <CheckboxDropdownComponent 
          displayText="Filter By Subject"
          options={options}
          onChange={option => {
            if (!checkboxValue.includes(option)) {
              const newValue = [...checkboxValue, option];
              setValue(newValue);
            }
          }}
          onDeselectOption={option => {
            const filteredOptions = checkboxValue.filter(
              item => item.value !== option.value
            );
            setValue(filteredOptions);
            setFilter(filteredOptions);
          }}
          value={checkboxValue}
          displayTags
          isStrict={false}
        />
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
