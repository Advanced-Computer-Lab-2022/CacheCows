import { useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext'


const IReviewForm = () => {
    const { user } = useAuthContext()

    const [instructor_id, setID] = useState('')
    const [user_id, setUID] = useState('')
    const [review, setReview] = useState('')
    const[error , setError] = useState(null)

    const handleSubmit = async(e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in')
            return
          }

        const course = {
            instructor_id,
            user_id,
            review,
            
        }

        const response = await fetch('/api/reviews/addIReview', {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.token}`
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

        <label>Instructor ID: </label>
        <input
            type = "text"
            onChange={(e) => setID(e.target.value)}
            value={instructor_id}
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

export default IReviewForm