import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"
import rubixgif from '../assets/Rubix.gif';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";




const InstSetCourseDiscount=()=>{
    const {user} = useAuthContext()

    const[course_id,setCourseID]=useState('');
    const[course_discount_time,setDiscountTime]=useState('');
    const[course_discount_start,setDiscountTimeStart]=useState('');

    const[course_discount,setDiscount]=useState('');

    const[error , setError] = useState(null);
    

    const handleSubmit = async(e) => {
        e.preventDefault()

        const params = new URLSearchParams(window.location.search);
    const course_id = params.get('course_id');
    const course = {course_id : course_id,
        course_discount_time : course_discount_time,
        course_discount_start : course_discount_start,
        course_discount : course_discount}


        


        const response = await fetch('/api/instructors/InstructorSetDiscount', {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
if(!response.ok) {
    console.log(json)
    setError(json.error)
}
if(response.ok) {
    setDiscountTime('');
    setDiscountTimeStart('');
    setDiscount('');
    console.log(json)
    setError(null)


}

}
const navigate=useNavigate();


return(
<div className="pagesplain">

<button className="back" onClick={() => navigate(-1)}> ❮ Back </button>


    <form className="filter" onSubmit={handleSubmit}>
    <label>Course Discount % </label>
        <input
            type = "text"
            onChange={(e) => setDiscount(e.target.value)}
            value={course_discount}
        />

    <label>Start Date  </label>
    <input
        type = "Date"
        onChange={(e) => setDiscountTimeStart(e.target.value)}
        value={course_discount_start}
    />
    <label>End Date</label>
    <input
        type = "Date"
        onChange={(e) => setDiscountTime(e.target.value)}
        value={course_discount_time}
    />
         <button>Set Discount</button>
        {error && <div className="error">{error}</div>}
    </form>


<div>
            
            <Box
    component="img"
    sx={{ height: 438, width: 825 , padding : 0, margins: 0}}
    alt="Logo"
    src={rubixgif}
    />
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
</div>

)
}
export default InstSetCourseDiscount
    
