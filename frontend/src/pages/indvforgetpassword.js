import Forgetpass from "../components/Indvforgetpasswordform"
import { useNavigate } from "react-router-dom";

const Indvtforgetpassword=()=>{
  const navigate=useNavigate();

return(
    <div className="filter">
      <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>
         <br>
        </br>
        <br></br>
        <br></br>
        <br></br>
        <div>
       
        <br></br>
        <Forgetpass/>
        <br></br>
       
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
      <br></br>        <br></br>
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
export default Indvtforgetpassword