import { useNavigate } from "react-router-dom";
import Forgetpass from "../components/Corpforgetpasswordform"

const Cropforgetpassword=()=>{
    const navigate=useNavigate();

return(
    <div className="pagesplain">
            <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>

    <div className="filter">
                    <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>

        <Forgetpass/>
        </div>
        </div>
)
}
export default Cropforgetpassword