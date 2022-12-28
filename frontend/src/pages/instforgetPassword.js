import Forgetpass from "../components/InstforgetpasswordForm"
import rubixgif from '../assets/Rubix.gif';
import Box from '@mui/material/Box';

const Instforgetpassword=()=>{
return(
    <div className="pagesplain">
        <br></br>
        <br></br>
    <div className="filter">
        <Forgetpass/>
    </div>

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
export default Instforgetpassword
