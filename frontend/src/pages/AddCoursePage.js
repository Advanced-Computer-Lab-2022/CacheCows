
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseForm from "../components/CourseForm"
import { useAuthContext } from "../hooks/useAuthContext"



const AddCoursePage=  ()=>{
    const [error , setError] = useState(null);
  


    return(
    <div className="instructor">
    <CourseForm />
    {error && <div className="error">{error}</div>}
    </div>

 )

}
export default AddCoursePage