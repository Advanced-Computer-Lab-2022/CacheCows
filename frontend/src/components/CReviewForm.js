import { useState } from "react";
import { json } from "react-router-dom";

const CReviewForm = () => {
    const [course_id, setID] = useState('')
    const [user_id, setUID] = useState('')
    const [review, setReview] = useState('')
    const[error , setError] = useState(null)

    const handleSubmit = async(e) => {
        e.preventDefault()

        const course = {
            course_id,
            user_id,
            review,
            
        }

        const response = await fetch('/api/reviews/addCReview', {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const json = await response.json()

        if(!response) {
            setError(json.error)
        }
        if(response.ok) {
        setID('')
        setUID('')
        setReview('')

        setError(null)
            
        console.log('New Review Added', json)
        }
    }

    return (
       <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Review!</h3>

        <label>Course ID: </label>
        <input
            type = "text"
            onChange={(e) => setID(e.target.value)}
            value={course_id}
        />

        <label>User ID: </label>
        <input
            type = "text"
            onChange={(e) => setUID(e.target.value)}
            value={user_id}
        />

        <label>Review: </label>
        <input
            type = "text"
            onChange={(e) => setReview(e.target.value)}
            value={review}
        />

        <button>Add Review</button>
        {error && <div className="error">{error}</div>}
       </form>
    )
}   

export default CReviewForm