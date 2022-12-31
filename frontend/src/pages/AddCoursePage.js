
import { Box, Container } from "@mui/material";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseForm from "../components/CourseForm"
import { useAuthContext } from "../hooks/useAuthContext"



const AddCoursePage=  ()=>{
    const  {user}  = useAuthContext()
    const [error , setError] = useState(null);
    //console.log(user)
  

    const navigate=useNavigate();

    return(
    <div className="pagesplain">
            <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>

        <br></br>
        <Box>
    <Container className="" sx={{border : 2, opacity:0.97}}>
        <br></br>
    <CourseForm sx={{ opacity:0.97}} user={user} />
    {error && <div className="error">{error}</div>}
    </Container>
    </Box>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
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
export default AddCoursePage