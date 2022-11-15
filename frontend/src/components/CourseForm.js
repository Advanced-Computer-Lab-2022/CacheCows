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
    const [course_preview1, setPrev1] = useState('')
    const [course_preview2, setPrev2] = useState('')
    const [course_preview3, setPrev3] = useState('')
    const [course_subtitles1, setSubt1] = useState('')
    const [course_subtitles2, setSubt2] = useState('')
    const [course_subtitles3, setSubt3] = useState('')
    const [course_discription1, setDisc1] = useState('')
    const [course_discription2, setDisc2] = useState('')
    const [course_discription3, setDisc3] = useState('')
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
            course_preview1,
            course_preview2,
            course_preview3,
            course_subtitles1,
            course_subtitles2,
            course_subtitles3,
            course_discription1,
            course_discription2,
            course_discription3
            
        }

        const response = await fetch('/api/courses', {
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
        setName('')
        setInstName('')
        setInstID('')
        setRating('')
        setPrice('')
        setSumm('')
        setTot ('')
        setSubj('') 
        setEx ('')
        setOutline('')
        setVideo('')
        setPrev1('')
        setPrev2('')
        setPrev3('')
        setSubt1('')
        setSubt2('')
        setSubt3('')
        setDisc1('')
        setDisc2('')
        setDisc3('')
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


        <label>Course Preview 1: </label>
        <input
            type = "text"
            onChange={(e) => setPrev1(e.target.value)}
            value={course_preview1}
        />


        <label>Course Subtitle 1: </label>
        <input
            type = "text"
            onChange={(e) => setSubt1(e.target.value)}
            value={course_subtitles1}
        />

        <label>Course Description 1: </label>
        <input
            type = "text"
            onChange={(e) => setDisc1(e.target.value)}
            value={course_discription1}
        />

        <label>Course Preview 2: </label>
        <input
            type = "text"
            onChange={(e) => setPrev2(e.target.value)}
            value={course_preview2}
        />


        <label>Course Subtitle 2: </label>
        <input
            type = "text"
            onChange={(e) => setSubt2(e.target.value)}
            value={course_subtitles2}
 
 />

        <label>Course Description 2: </label>
        <input
            type = "text"
            onChange={(e) => setDisc2(e.target.value)}
            value={course_discription2}
        />

        <label>Course Preview 3: </label>
        <input
            type = "text"
            onChange={(e) => setPrev3(e.target.value)}
            value={course_preview3}
        />


        <label>Course Subtitle 3: </label>
        <input
            type = "text"
            onChange={(e) => setSubt3(e.target.value)}
            value={course_subtitles3}
        />

        <label>Course Description 3: </label>
        <input
            type = "text"
            onChange={(e) => setDisc3(e.target.value)}
            value={course_discription3}
        />

        <button>Add Course</button>
        {error && <div className="error">{error}</div>}
       </form>
    )
}   

export default CourseForm