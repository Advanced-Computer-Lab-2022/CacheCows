import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"


const InstEditBiography=()=>{
    const {user} = useAuthContext()

    const[instructor_biography,setBio]=useState('');
   // const[inst_id,setID]=useState('');
    const[error , setError] = useState(null);
    const paramss = new URLSearchParams(window.location.search);

    const userId = paramss.get('userId');

    

    const handleSubmit = async(e) => {
        e.preventDefault()

     //   setID(JSON.stringify(user._id))

        const inst = {
            instructor_biography
        }


        const response = await fetch(`/api/instructors/InstructorEditBiography?userId=${userId}`, {
            method: 'POST',
            body: JSON.stringify(inst),
            headers: {
                'Content-Type' : 'application/json',
              //  'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
if(!response.ok) {
    console.log(inst)
    setError(json.error)
}
if(response.ok) {
    setBio('');
    setError(null);
    console.log(json)

}

}


return(

    <form className="create" onSubmit={handleSubmit}>
    <label>New Biography: </label>
        <input
            type = "text"
            onChange={(e) => setBio(e.target.value)}
            value={instructor_biography}
        />
         <button>Change my Biography</button>
        {error && <div className="error">{error}</div>}
        </form>
)
}
export default InstEditBiography
    
