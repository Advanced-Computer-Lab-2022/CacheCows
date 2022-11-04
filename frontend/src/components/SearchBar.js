import { useState } from "react";
import { json } from "react-router-dom";
import CourseDetails from "./CourseDetails";


const SearchBar = () => {
    const [text, setSearch] = useState('')
    const [courses, setCourses] = useState('') 
    const[error , setError] = useState(null)

   
    const handleSubmit = async(e) => {
        e.preventDefault()

        const value = {
            text
        }

        const response = await fetch('/api/courses/SearchCourseByOpt', {
            method: 'POST',
            body: JSON.stringify(value),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            setCourses('')  
        }
        if(response.ok) {  
        setCourses(json)  
        setError(null)
            
        console.log('Search Done!', json)
        }
    }

    return (
       <form className="create" onSubmit={handleSubmit}>

        <input
          className="search"
          placeholder="Search..."
          type = "text"
          onChange={(e) => setSearch(e.target.value)}
          value={text}
        />
  
        <button>Search</button>
        {error && <div className="error">{error}</div>}

        <div classname="courses"> 
        {courses && courses.map((course) =>(
        <CourseDetails course={course} key={course._id} />))}          
        </div>
       </form>
    )
}   

export default SearchBar;