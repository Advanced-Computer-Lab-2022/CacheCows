
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseForm from "../components/CourseForm"
import { useAuthContext } from "../hooks/useAuthContext"



const AddCoursePage=  ()=>{
    const  {user}  = useAuthContext()
    const [error , setError] = useState(null);
    //console.log(user)
  


    return(
    <div className="pagesplain">
        <br></br>
    <div className="filtercolour">
        <br></br>
    <CourseForm user={user} />
    {error && <div className="error">{error}</div>}
    </div>
    </div>

 )

}
export default AddCoursePage