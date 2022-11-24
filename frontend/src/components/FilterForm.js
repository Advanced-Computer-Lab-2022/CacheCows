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
  const [courses, setCourses] = useState();
  const [flag, setFlag] = useState(false);
  const[error , setError] = useState(null);

  const handleSubmit = async(e) => {
    e.preventDefault()


    const subj = {
        checkboxValue
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
    }
    if(response.ok) {
     setValue('');
     setFlag(true)
     setCourses(json)
     setError(null)
        
    console.log('New Corporate Trainee Added', json)
    }
}



  return (
    <div>
    <Fragment>
      <div className="defalut" onSubmit={handleSubmit}>
        <CheckboxDropdownComponent onSubmit={handleSubmit}
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
          }}
          value={checkboxValue}
          displayTags
          isStrict={false}
        />
      </div>
    </Fragment>
    {courses && courses.map((course) =>(
    <CourseDetails course={course} key={course._id} />))} 
    </div>
  );
}

export default Filter;
