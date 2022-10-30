import { useEffect,useState } from "react";
import CoursepriceDetails from "../components/coursepricedetails"

const InstructorcourseByprice=()=>{
    const [courses,setCourses]=useState()
    useEffect(()=>{
        const fetchCourses=async ()=>{
            const response= await fetch('/api/courses/getCourses')
            const json= await response.json()
    
            if(response.ok){
            setCourses(json)
            }
        }
    
        fetchCourses()
    },[])


    return(
        <div classname="InstructorcourseByprice">
            <div classname="courses"> 
            {courses && courses.map((course) =>(
                          <CoursepriceDetails course={course} key={course._id} />
        
                          ))}
                          
            </div>
           
          
        </div>
        
        
        
        
        
        
            )
        
        }
        export default InstructorcourseByprice