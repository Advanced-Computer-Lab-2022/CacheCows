import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate, useParams } from "react-router-dom"

const Indvreview=()=>{
    const {user} = useAuthContext()
    
    const [review,setReview]=useState('')
    const  [show,setShow]=useState(false)
    const[error , setError] = useState(null);
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    const navigate=useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault()
       

        const indv={review}

        const response=await fetch(`/api/corpTrainee/reviewinst?userId=${userId}`,{
            method: 'POST',
            body:JSON.stringify(indv),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.token}`
                
            }
        })

        const json = await response.json()
        if(!response.ok) {
            
            setError(json.error)
        }
        if(response.ok) {
            setReview('');
            setShow(true)
            setError(null);
            console.log(json)
        
        }
    }






return(
    <div className="pagesplain">
            <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>

   <form className="create" onSubmit={handleSubmit}>
    <label>Add your review: </label>
        <input
            type = "text"
            onChange={(e) => setReview(e.target.value)}
            value={review}
        />
         <button>Add review</button>
         <div>{show &&<p> your review was added successfully</p>}</div>
         <p></p>
            <button onClick={()=>navigate("/Corpregisteredcourses")}>return to your courses</button>
        {error && <div className="error">{error}</div>}
        </form>
        </div>
)
}
export default Indvreview