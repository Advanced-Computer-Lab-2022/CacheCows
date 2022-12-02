import { useState } from "react";
import { json } from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext'
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';
import { Subject } from "@material-ui/icons";


const CourseForm = ({user}) => {

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
    const [course_preview4, setPrev4] = useState('')
    const [course_preview5, setPrev5] = useState('')
    const [course_preview6, setPrev6] = useState('')

    const [course_subtitles1, setSubt1] = useState('')
    const [course_subtitles2, setSubt2] = useState('')
    const [course_subtitles3, setSubt3] = useState('')

    const [course_discription1, setDisc1] = useState('')
    const [course_discription2, setDisc2] = useState('')
    const [course_discription3, setDisc3] = useState('')
    const [course_discription4, setDisc4] = useState('')
    const [course_discription5, setDisc5] = useState('')
    const [course_discription6, setDisc6] = useState('')

    const [course_subtopic1, settop1] = useState('')
    const [course_subtopic2, settop2] = useState('')
    const [course_subtopic3, settop3] = useState('')
    const [course_subtopic4, settop4] = useState('')
    const [course_subtopic5, settop5] = useState('')
    const [course_subtopic6, settop6] = useState('')
    const[error , setError] = useState(null)

    console.log(user)

    //  console.log(user._id,user.name)

    function setter() {
        setInstID(user._id);
        setInstName(user.name);
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        setInstID(user._id)
        setInstName(user.name)
        

        if (!user) {
            setError('You must be logged in')
            return
          }
         

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
            course_preview4,
            course_preview5,
            course_preview6,
            course_subtitles1,
            course_subtitles2,
            course_subtitles3,
            course_discription1,
            course_discription2,
            course_discription3,
            course_discription4,
            course_discription5,
            course_discription6,
            course_subtopic1,
            course_subtopic2,
            course_subtopic3,
            course_subtopic4,
            course_subtopic5,
            course_subtopic6
            
        }

        const response = await fetch('/api/courses', {
            method: 'POST',
            body: JSON.stringify(course),
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
        setID('')
        setName('')
        setRating('')
        setPrice('')
        setSumm('')
        setTot ('')
        setSubj('') 
        setEx ('')
        setDiscount('')
        setOutline('')
        setVideo('')
        setPrev1('')
        setPrev2('')
        setPrev3('')
        setPrev4('')
        setPrev5('')
        setPrev6('')
        setSubt1('')
        setSubt2('')
        setSubt3('')
        setDisc1('')
        setDisc2('')
        setDisc3('')
        setDisc4('')
        setDisc5('')
        setDisc6('')
        settop1('')
        settop2('')
        settop3('')
        settop4('')
        settop5('')
        settop6('')
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


        <label>Course Preview Link: </label>
        <input
            type = "text"
            onChange={(e) => setVideo(e.target.value)}
            value={course_video}
        />

        <label>Course SubTopic 1: </label>
        <input
            type = "text"
            onChange={(e) => settop1(e.target.value)}
            value={course_subtopic1}
        />


        <label>Course Preview 1: </label>
        <input
            type = "text"
            onChange={(e) => setPrev1(e.target.value)}
            value={course_preview1}
        />

        <label>Course Description 1: </label>
        <input
            type = "text"
            onChange={(e) => setDisc1(e.target.value)}
            value={course_discription1}
        />

        <label>Course SubTopic 2: </label>
        <input
            type = "text"
            onChange={(e) => settop2(e.target.value)}
            value={course_subtopic2}
        />

        <label>Course Preview 2: </label>
        <input
            type = "text"
            onChange={(e) => setPrev2(e.target.value)}
            value={course_preview2}
        />

        <label>Course Description 2: </label>
        <input
            type = "text"
            onChange={(e) => setDisc2(e.target.value)}
            value={course_discription2}
        />

        <label>Course SubTopic 3: </label>
        <input
            type = "text"
            onChange={(e) => settop3(e.target.value)}
            value={course_subtopic3}
        />

        <label>Course Preview 3: </label>
        <input
            type = "text"
            onChange={(e) => setPrev3(e.target.value)}
            value={course_preview3}
        />


        <label>Course Description 3: </label>
        <input
            type = "text"
            onChange={(e) => setDisc3(e.target.value)}
            value={course_discription3}
        />

        

        <label>Course SubTopic 4: </label>
        <input
            type = "text"
            onChange={(e) => settop4(e.target.value)}
            value={course_subtopic4}
        />

        <label>Course Preview 4: </label>
        <input
            type = "text"
            onChange={(e) => setPrev4(e.target.value)}
            value={course_preview4}
        />


        <label>Course Description 4: </label>
        <input
            type = "text"
            onChange={(e) => setDisc4(e.target.value)}
            value={course_discription4}
        />

        <label>Course SubTopic 5: </label>
        <input
            type = "text"
            onChange={(e) => settop5(e.target.value)}
            value={course_subtopic5}
        />

        <label>Course Preview 5: </label>
        <input
            type = "text"
            onChange={(e) => setPrev5(e.target.value)}
            value={course_preview5}
        />


        <label>Course Description 5: </label>
        <input
            type = "text"
            onChange={(e) => setDisc5(e.target.value)}
            value={course_discription5}
        />

        <label>Course SubTopic 6: </label>
        <input
            type = "text"
            onChange={(e) => settop6(e.target.value)}
            value={course_subtopic6}
        />

        <label>Course Preview 6: </label>
        <input
            type = "text"
            onChange={(e) => setPrev6(e.target.value)}
            value={course_preview6}
        />


        <label>Course Description 6: </label>
        <input
            type = "text"
            onChange={(e) => setDisc6(e.target.value)}
            value={course_discription6}
        />

        <label>Course Subtitle 1: </label>
        <input
            type = "text"
            onChange={(e) => setSubt1(e.target.value)}
            value={course_subtitles1}
        />

        <label>Course Subtitle 2: </label>
        <input
            type = "text"
            onChange={(e) => setSubt2(e.target.value)}
            value={course_subtitles2}
        />

        <label>Course Subtitle 3: </label>
        <input
            type = "text"
            onChange={(e) => setSubt3(e.target.value)}
            value={course_subtitles3}
        />
        <br/>

     <label>Selected Subject: {course_subject}</label>
     <br/>
     <br/>
     
    <Dropdown color="primary" label="Choose Course Subject:" className='course_details' 
      onSelect={(v) => setSubj(v)}
      >
        <DropdownItem value="Hardware">Hardware</DropdownItem>
        <DropdownItem value="IT and Software">IT and Software</DropdownItem>
        <DropdownItem value="Biology">Biology</DropdownItem>
        <DropdownItem value="Music">Music</DropdownItem>
      </Dropdown>
      <br/>

        <button onClick={() => setter()}>Add Course</button>
        {error && <div className="error">{error}</div>}
       </form>
    )
}   

export default CourseForm