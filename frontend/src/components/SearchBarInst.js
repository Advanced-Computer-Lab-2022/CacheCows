import { useState } from "react";
import { json } from "react-router-dom";
import CourseDetails from "./CourseDetails";
import { useAuthContext } from '../hooks/useAuthContext'
import CourseCard from "./CourseCard";



const SearchBarInst = () => {
    const { user } = useAuthContext()

    const [text, setSearch] = useState('')
    const [courses, setCourses] = useState('') 
    const[error , setError] = useState(null)

   
    const handleSubmit = async(e) => {
        e.preventDefault()
        if (!user) {
            setError('You must be logged in')
            return
          }

        const value = {
            instructor_id : user._id,
            text
        }

        const response = await fetch('/api/courses/SearchCourseByOptInst', {
            method: 'POST',
            body: JSON.stringify(value),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.token}`
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
        <div className="dashboardpage">
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

        <div className="dashboardpage"> 
        {courses && courses.map((course) =>(
        <CourseCard course={course} key={course._id} />))}          
        </div>
       </form>
       </div>
    )
}   

export default SearchBarInst;