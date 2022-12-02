import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"


const Indvreview=()=>{
    const {user} = useAuthContext()
    
    const [review,setReview]=useState('')
    const[error , setError] = useState(null);
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
   

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
            setError(null);
            console.log(json)
        
        }
    }






return(
   <form className="create" onSubmit={handleSubmit}>
    <label>Add your review: </label>
        <input
            type = "text"
            onChange={(e) => setReview(e.target.value)}
            value={review}
        />
         <button>Add review</button>
        {error && <div className="error">{error}</div>}
        </form>
)
}
export default Indvreview