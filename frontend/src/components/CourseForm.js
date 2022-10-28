import { useState } from "react";
import { json } from "react-router-dom";

const CourseForm = () => {
    const [course_id, setID] = useState('')
    const [course_name, setName] = useState('')
    const [instructor_name, setInstName] = useState('')
    const [instructor_id, setInstID] = useState('')
    const [course_rating, setRating] = useState('')
    const [course_discount, setDiscount] = useState('')
    const [course_price, setPrice] = useState('')
    const [course_summary, setSumm] = useState('')
    const [course_total_hours, setTot] = useState('')
    const [course_subject, setSubj] = useState('')
    const [course_exercise, setEx] = useState('')
    const [course_outline, setOutline] = useState('')
    const [course_video, setVideo] = useState('')
    const [course_preview, setPrev] = useState('')
    const [course_subtitles, setSubt] = useState('')
    const[error , setError] = useState(null)

    const handleSubmit = async(e) => {
        e.preventDefault()

        const course = {
            course_id,
            course_name,
            instructor_name,
            instructor_id,
            course_rating,
            course_discount,
            course_price,  
            course_summary,
            course_total_hours,  
            course_subject,
            course_exercise,
            course_outline,
            course_video,
            course_preview,
            course_subtitles    
        }

        const response = await fetch('/api/courses', {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
        setID('')
        setName('')
        setInstName('')
        setInstID('')
        setRating('')
        setDiscount('')
        setPrice('')
        setSumm('')
        setTot ('')
        setSubj('') 
        setEx ('')
        setOutline('')
        setVideo('')
        setPrev('')
        setSubt('')
        setError(null)
            
        console.log('New Course Added', json)
        }
    }

    return (
       <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Course!</h3>

        <label>Course ID: </label>
        <input
            type = "text"
            onChange={(e) => setID(e.target.value)}
            value={course_id}
        />

        <label>Course Name: </label>
        <input
            type = "text"
            onChange={(e) => setName(e.target.value)}
            value={course_name}
        />

        <label>Instructor Name: </label>
        <input
            type = "text"
            onChange={(e) => setInstName(e.target.value)}
            value={instructor_name}
        />
        
        <label>Instructor ID: </label>
        <input
            type = "text"
            onChange={(e) => setInstID(e.target.value)}
            value={instructor_id}
        />


        <label>Course Rating: </label>
        <input
            type = "text"
            onChange={(e) => setRating(e.target.value)}
            value={course_rating}
        />


        <label>Course Discount: </label>
        <input
            type = "text"
            onChange={(e) => setDiscount(e.target.value)}
            value={course_discount}
        />


        <label>Course Price</label>
        <input
            type = "text"
            onChange={(e) => setPrice(e.target.value)}
            value={course_price}
        />


        <label>Course Summary: </label>
        <input
            type = "text"
            onChange={(e) => setSumm(e.target.value)}
            value={course_summary}
        />


        <label>Course Total Hours: </label>
        <input
            type = "text"
            onChange={(e) => setTot(e.target.value)}
            value={course_total_hours}
        />


        <label>Course Subject: </label>
        <input
            type = "text"
            onChange={(e) => setSubj(e.target.value)}
            value={course_subject}
        />


        <label>Course Exercises: </label>
        <input
            type = "text"
            onChange={(e) => setEx(e.target.value)}
            value={course_exercise}
        />


        <label>Course Outline: </label>
        <input
            type = "text"
            onChange={(e) => setOutline(e.target.value)}
            value={course_outline}
        />


        <label>Course Video: </label>
        <input
            type = "text"
            onChange={(e) => setVideo(e.target.value)}
            value={course_video}
        />


        <label>Course Preview: </label>
        <input
            type = "text"
            onChange={(e) => setPrev(e.target.value)}
            value={course_preview}
        />


        <label>Course Subtitles: </label>
        <input
            type = "text"
            onChange={(e) => setSubt(e.target.value)}
            value={course_subtitles}
        />

        <button>Add Course</button>
        {error && <div className="error">{error}</div>}
       </form>
    )
}   

export default CourseForm