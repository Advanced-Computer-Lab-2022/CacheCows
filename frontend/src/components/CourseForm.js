import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import { json } from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext'
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepButton from '@mui/material/StepButton';
import { Container } from "@mui/system";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';

const steps = ['Create Course Info', 'Add Material', 'Create Exams'];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  length : 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color : '#a6607c'
};
//import { Subject } from "@material-ui/icons";


const CourseForm = ({user}) => {
    const [SubNo, setSN] = useState(1) 
    const [exNo, setEN] = useState(1) 
    
    const [exam_q1, setQ1] = useState('')
    const [exam_q1_answer1, setQ1A1] = useState('')
    const [exam_q1_answer2, setQ1A2] = useState('')
    const [exam_q1_answer3, setQ1A3] = useState('')
    const [exam_q1_answer4, setQ1A4] = useState('')
    const [exam_q1_right_answer, setQ1R] = useState('')

    const [exam_q2, setQ2] = useState('')
    const [exam_q2_answer1, setQ2A1] = useState('')
    const [exam_q2_answer2, setQ2A2] = useState('')
    const [exam_q2_answer3, setQ2A3] = useState('')
    const [exam_q2_answer4, setQ2A4] = useState('')
    const [exam_q2_right_answer, setQ2R] = useState('')

    const [exam_q3, setQ3] = useState('')
    const [exam_q3_answer1, setQ3A1] = useState('')
    const [exam_q3_answer2, setQ3A2] = useState('')
    const [exam_q3_answer3, setQ3A3] = useState('')
    const [exam_q3_answer4, setQ3A4] = useState('')
    const [exam_q3_right_answer, setQ3R] = useState('')

    const [exam_q4, setQ4] = useState('')
    const [exam_q4_answer1, setQ4A1] = useState('')
    const [exam_q4_answer2, setQ4A2] = useState('')
    const [exam_q4_answer3, setQ4A3] = useState('')
    const [exam_q4_answer4, setQ4A4] = useState('')
    const [exam_q4_right_answer, setQ4R] = useState('')

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [course_id, setID] = useState('')
    const [course_name, setName] = useState('')
    const [instructor_name, setInstName] = useState('')
    const [instructor_id, setInstID] = useState('')
    const [course_rating, setRating] = useState('')
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

    const [course_description1, setDisc1] = useState('')
    const [course_description2, setDisc2] = useState('')
    const [course_description3, setDisc3] = useState('')
    const [course_description4, setDisc4] = useState('')
    const [course_description5, setDisc5] = useState('')
    const [course_description6, setDisc6] = useState('')

    const [course_subtopic1, settop1] = useState('')
    const [course_subtopic2, settop2] = useState('')
    const [course_subtopic3, settop3] = useState('')
    const [course_subtopic4, settop4] = useState('')
    const [course_subtopic5, settop5] = useState('')
    const [course_subtopic6, settop6] = useState('')
    const[error , setError] = useState(null)

    console.log(user)

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const extraex = () => {
    if(SubNo <= 4){
      const x = exNo + 1;
      setEN(x);
    }else{
      setEN(4);
    }
  };



  
  const extrasub = () => {
    if(SubNo <= 6){
      const x = SubNo + 1;
      setSN(x);
    }else{
      setSN(6);
    }
  };

  const lesssub = () => {
    if(SubNo === 6){
      setDisc6('')
      setPrev6('')
      settop6('')
      setSN(5);
    }
    if(SubNo === 5){
      setDisc5('')
      setPrev5('')
      settop5('')
      setSN(4);
    }
    if(SubNo === 4){
      setDisc4('')
      setPrev4('')
      settop4('')
      setSN(3);
    }
    if(SubNo === 3){
      setDisc3('')
      setPrev3('')
      settop3('')
      setSN(2);
    }
    if(SubNo === 2){
      setDisc2('')
      setPrev2('')
      settop2('')
      setSN(1);
    }
    if(SubNo === 1){
      setSN(1);
    }
  };
  
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  

    //  console.log(user._id,user.name)

    function setter() {
        setInstID(user._id);
        setInstName(user.name);
    }

    const addExam = async(e) => {
      e.preventDefault();

      const exam = {
        course_id,
        exam_q1,
        exam_q1_answer1,
        exam_q1_answer2,
        exam_q1_answer3,
        exam_q1_answer4,
        exam_q1_right_answer,

        exam_q2,
        exam_q2_answer1,
        exam_q2_answer2,
        exam_q2_answer3,
        exam_q2_answer4,
        exam_q2_right_answer,

        exam_q3,
        exam_q3_answer1,
        exam_q3_answer2,
        exam_q3_answer3,
        exam_q3_answer4,
        exam_q3_right_answer,
   
        exam_q4,
        exam_q4_answer1,
        exam_q4_answer2,
        exam_q4_answer3,
        exam_q4_answer4,
        exam_q4_right_answer,
        }

      const response1 = await fetch('/api/exams/setExam', {
        method: 'POST',
        body: JSON.stringify(exam),
        headers: {
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${user.token}`
        }
    })
    const json1 = await response1.json()

    if(!response1.ok) {
        setError(json.error)
        
    }
    if(response1.ok){
        setQ1('')
        setQ1A1('')
        setQ1A2('')
        setQ1A3('')
        setQ1A4('')
        setQ1R('')

        setQ2('')
        setQ2A1('')
        setQ2A2('')
        setQ2A3('')
        setQ2A4('')
        setQ2R('')

        setQ3('')
        setQ3A1('')
        setQ3A2('')
        setQ3A3('')
        setQ3A4('')
        setQ3R('')

        setQ4('')
        setQ4A1('')
        setQ4A2('')
        setQ4A3('')
        setQ4A4('')
        setQ4R('')

        console.log("Exam: ",json1)
    }
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
            course_description1,
            course_description2,
            course_description3,
            course_description4,
            course_description5,
            course_description6,
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
      <div className='pagesplain'>
        <br></br>
        <Box sx={{ width: '100%', color : '#1111', background : '#FFFFFF', opacity: 0.87 }}>
      <Stepper nonLinear activeStep={activeStep} sx={{marginBottom : 8}}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="#a6607c" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>

       <form className="" onSubmit={handleSubmit}>
        <h6>Add a New Course!</h6>
        <br></br>
        {activeStep === 0 ? (
            <div>
        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c', color: '#a6607c'}}
            type = "text"
            onChange={(e) => setID(e.target.value)}
            value={course_id}
            label="Course ID:"
        />
         <br></br>
         <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setName(e.target.value)}
            value={course_name}
            label="Course Name:"
        />
        <br></br>
        <br></br>


        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setPrice(e.target.value)}
            value={course_price}
            label="Course Price:"
        />
        <br></br>
        <br></br>


        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setSumm(e.target.value)}
            value={course_summary}
            label="Course Summary:"
        />
        <br></br>
        <br></br>


        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setTot(e.target.value)}
            value={course_total_hours}
            label="Course Total Hours:"
        />
        <br></br>
        <br></br>

        </div>
        ): activeStep === 1 ? (
        <div>
        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setEx(e.target.value)}
            value={course_exercise}
            label="Course Exercises:"
        />
                 <br></br>

        <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setOutline(e.target.value)}
            value={course_outline}
            label="Course Outline:"
        />
        <br></br>
        <br></br>


        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setVideo(e.target.value)}
            value={course_video}
            label="Course Preview Link:"
        />
        <br></br>
        <br></br>

      {SubNo === 1 ?(
        <Box>
        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => settop1(e.target.value)}
            value={course_subtopic1}
            label="Course SubTopic 1:"
        />
        <br></br>
        <br></br>


        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setPrev1(e.target.value)}
            value={course_preview1}
            label="Course Preview 1:"
        />
        <br></br>
        <br></br>


        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setDisc1(e.target.value)}
            value={course_description1}
            label="Course Description 1:"
        />
        <br></br>
        <br></br>

        </Box>
        ) : SubNo === 2?(
          <Box>
          <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
              type = "text"
              onChange={(e) => settop1(e.target.value)}
              value={course_subtopic1}
              label="Course SubTopic 1:"
          />
          <br></br>
          <br></br>

  
          <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
              type = "text"
              onChange={(e) => setPrev1(e.target.value)}
              value={course_preview1}
              label="Course Preview 1:"
          />
          <br></br>
          <br></br>

  
          <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
              type = "text"
              onChange={(e) => setDisc1(e.target.value)}
              value={course_description1}
              label="Course Description 1:"
          />
          <br></br>
          <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => settop2(e.target.value)}
            value={course_subtopic2}
            label="Course SubTopic 2: "
        />
        <br></br>
        <br></br>


        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setPrev2(e.target.value)}
            value={course_preview2}
            label="Course Preview 2:"
        />
        <br></br>
        <br></br>


        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setDisc2(e.target.value)}
            value={course_description2}
            label="Course Description 2:"
        />
        <br></br>
        <br></br>


          </Box>
        ) : SubNo === 3 ? (
          <Box>
          <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
              type = "text"
              onChange={(e) => settop1(e.target.value)}
              value={course_subtopic1}
              label="Course SubTopic 1:"
          />
          <br></br>
          <br></br>

  
          <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
              type = "text"
              onChange={(e) => setPrev1(e.target.value)}
              value={course_preview1}
              label="Course Preview 1:"
          />
          <br></br>
          <br></br>

  
          <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
              type = "text"
              onChange={(e) => setDisc1(e.target.value)}
              value={course_description1}
              label="Course Description 1:"
          />
          <br></br> 
          <br></br>

       <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => settop2(e.target.value)}
            value={course_subtopic2}
            label="Course SubTopic 2: "
        />
        <br></br>
        <br></br>


        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setPrev2(e.target.value)}
            value={course_preview2}
            label="Course Preview 2:"
        />
        <br></br>
        <br></br>


        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setDisc2(e.target.value)}
            value={course_description2}
            label="Course Description 2:"
        />
        <br></br>
        <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => settop3(e.target.value)}
            value={course_subtopic3}
            label="Course SubTopic 3:"
        />
        <br></br>
        <br></br>


        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setPrev3(e.target.value)}
            value={course_preview3}
            label="Course Preview 3:"
        />
        <br></br>
        <br></br>


        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setDisc3(e.target.value)}
            value={course_description3}
            label="Course Description 3:"
        />
        <br></br>
        <br></br>


        </Box>
        ):SubNo===4?(
          <Box>
          <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
              type = "text"
              onChange={(e) => settop1(e.target.value)}
              value={course_subtopic1}
              label="Course SubTopic 1:"
          />
          <br></br>
          <br></br>

  
          <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
              type = "text"
              onChange={(e) => setPrev1(e.target.value)}
              value={course_preview1}
              label="Course Preview 1:"
          />
          <br></br>
          <br></br>

  
          <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
              type = "text"
              onChange={(e) => setDisc1(e.target.value)}
              value={course_description1}
              label="Course Description 1:"
          />
          <br></br> 
          <br></br>
     
            <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => settop2(e.target.value)}
            value={course_subtopic2}
            label="Course SubTopic 2: "
        />
        <br></br>
        <br></br>


        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setPrev2(e.target.value)}
            value={course_preview2}
            label="Course Preview 2:"
        />
        <br></br>
        <br></br>



        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setDisc2(e.target.value)}
            value={course_description2}
            label="Course Description 2:"
        />
        <br></br>
        <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => settop3(e.target.value)}
            value={course_subtopic3}
            label="Course SubTopic 3:"
        />
        <br></br> <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setPrev3(e.target.value)}
            value={course_preview3}
            label="Course Preview 3:"
        />
        <br></br> <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setDisc3(e.target.value)}
            value={course_description3}
            label="Course Description 3:"
        />
        <br></br> <br></br>
        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => settop4(e.target.value)}
            value={course_subtopic4}
            label="Course SubTopic 4:"
        />
        <br></br> <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setPrev4(e.target.value)}
            value={course_preview4}
            label="Course Preview 4:"
        />
        <br></br> <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setDisc4(e.target.value)}
            value={course_description4}
            label="Course Description 4:"
        />
        <br></br> <br></br>

          </Box>
        ):SubNo === 5?(          
        <Box>
          <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
              type = "text"
              onChange={(e) => settop1(e.target.value)}
              value={course_subtopic1}
              label="Course SubTopic 1:"
          />
          <br></br> <br></br>
  
          <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
              type = "text"
              onChange={(e) => setPrev1(e.target.value)}
              value={course_preview1}
              label="Course Preview 1:"
          />
          <br></br> <br></br>
  
          <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
              type = "text"
              onChange={(e) => setDisc1(e.target.value)}
              value={course_description1}
              label="Course Description 1:"
          />
          <br></br> <br></br>        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => settop2(e.target.value)}
            value={course_subtopic2}
            label="Course SubTopic 2: "
        />
        <br></br> <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setPrev2(e.target.value)}
            value={course_preview2}
            label="Course Preview 2:"
        />
        <br></br> <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setDisc2(e.target.value)}
            value={course_description2}
            label="Course Description 2:"
        />
        <br></br> <br></br>
        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => settop3(e.target.value)}
            value={course_subtopic3}
            label="Course SubTopic 3:"
        />
        <br></br> <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setPrev3(e.target.value)}
            value={course_preview3}
            label="Course Preview 3:"
        />
        <br></br> <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setDisc3(e.target.value)}
            value={course_description3}
            label="Course Description 3:"
        />
        <br></br> <br></br>
        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => settop4(e.target.value)}
            value={course_subtopic4}
            label="Course SubTopic 4:"
        />
        <br></br> <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setPrev4(e.target.value)}
            value={course_preview4}
            label="Course Preview 4:"
        />
        <br></br> <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setDisc4(e.target.value)}
            value={course_description4}
            label="Course Description 4:"
        />
        <br></br> <br></br>
        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => settop5(e.target.value)}
            value={course_subtopic5}
            label="Course SubTopic 5:"
        />
        <br></br> <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setPrev5(e.target.value)}
            value={course_preview5}
            label="Course Preview 5:"
        />
        <br></br> <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}} 
            type = "text"
            onChange={(e) => setDisc5(e.target.value)}
            value={course_description5}
            label="Course Description 5:"
        />
        <br></br> <br></br>
          </Box>

        ): SubNo === 6?(
          <Box>
          <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
              type = "text"
              onChange={(e) => settop1(e.target.value)}
              value={course_subtopic1}
              label="Course SubTopic 1:"
          />
          <br></br> <br></br>
  
          <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
              type = "text"
              onChange={(e) => setPrev1(e.target.value)}
              value={course_preview1}
              label="Course Preview 1:"
          />
          <br></br> <br></br>
  
          <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
              type = "text"
              onChange={(e) => setDisc1(e.target.value)}
              value={course_description1}
              label="Course Description 1:"
          />
          <br></br> <br></br>        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => settop2(e.target.value)}
            value={course_subtopic2}
            label="Course SubTopic 2: "
        />
        <br></br> <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setPrev2(e.target.value)}
            value={course_preview2}
            label="Course Preview 2:"
        />
        <br></br> <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setDisc2(e.target.value)}
            value={course_description2}
            label="Course Description 2:"
        />
        <br></br> <br></br>
        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => settop3(e.target.value)}
            value={course_subtopic3}
            label="Course SubTopic 3:"
        />
        <br></br> <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setPrev3(e.target.value)}
            value={course_preview3}
            label="Course Preview 3:"
        />
        <br></br> <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setDisc3(e.target.value)}
            value={course_description3}
            label="Course Description 3:"
        />
        <br></br> <br></br>
        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => settop4(e.target.value)}
            value={course_subtopic4}
            label="Course SubTopic 4:"
        />
        <br></br> <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setPrev4(e.target.value)}
            value={course_preview4}
            label="Course Preview 4:"
        />
        <br></br> <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setDisc4(e.target.value)}
            value={course_description4}
            label="Course Description 4:"
        />
        <br></br> <br></br>
        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => settop5(e.target.value)}
            value={course_subtopic5}
            label="Course SubTopic 5:"
        />
        <br></br> <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setPrev5(e.target.value)}
            value={course_preview5}
            label="Course Preview 5:"
        />
        <br></br> <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setDisc5(e.target.value)}
            value={course_description5}
            label="Course Description 5:"
        />
        <br></br> <br></br>
                <br></br> <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => settop6(e.target.value)}
            value={course_subtopic6}
            label="Course SubTopic 6:"
        />
        <br></br> <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setPrev6(e.target.value)}
            value={course_preview6}
            label="Course Preview 6:"
        />
        <br></br> <br></br>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c'}}
            type = "text"
            onChange={(e) => setDisc6(e.target.value)}
            value={course_description6}
            label="Course Description 6:"
        />
          </Box>):(<div></div>)}
        <br></br> <br></br>
        <Fab sx={{ marginRight: 5 , color : '#d9d9d9', backgroundColor : '#a6607c'}}
          aria-label="add" onClick={lesssub}>
        <RemoveCircleOutlineRoundedIcon background-color ="#a6607c" />
        </Fab>


        <Fab  sx={{ marginLeft: 5 , color : '#d9d9d9', backgroundColor : '#a6607c'}}
        color="#a6607c" aria-label="add" onClick={extrasub}>
        <AddCircleOutlineRoundedIcon />
        </Fab>
        <br></br> <br></br>
        <br/>

     <label>Select Subject: {course_subject}</label>
     <br/>
     <br/>

      <FormControl sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="demo-simple-select-helper-label">Course Subject</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={course_subject}
          label="Age"
          onChange={(e) => setSubj(e.target.value)}
        >
        <MenuItem value="Hardware">Hardware</MenuItem>
        <MenuItem value="IT and Software">IT and Software</MenuItem>
        <MenuItem value="Biology">Biology</MenuItem>
        <MenuItem value="Music">Music</MenuItem>
        <MenuItem value="Music" onClick={(v) => setSubj(v)}>Other</MenuItem>
        </Select>
      </FormControl>

      <br/>
      </div>
      ):activeStep === 2 ? (
      <div className="reports">
      <Button sx={{ color: '#a6607c' }} 
      onClick={handleOpen}>Add Exam</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box sx={style} >
        <Box>
        <h3>First Question!</h3>
        <TextField sx={{ width: '30%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 , marginRight: 1}}
           type = "text"
          onChange={(e) => setQ1(e.target.value)}
          value={exam_q1}
          label="Exam Question :"
        />
         <br/>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 }}
           type = "text"
          onChange={(e) => setQ1A1(e.target.value)}
          value={exam_q1_answer1}
          label="First Choice:"
        />
         <br/>
        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 }}
           type = "text"
          onChange={(e) => setQ1A2(e.target.value)}
          value={exam_q1_answer2}
          label="Second Choice:"
        />
         <br/>
        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 }}
           type = "text"
          onChange={(e) => setQ1A3(e.target.value)}
          value={exam_q1_answer3}
          label="Third Choice:"
        />
         <br/>
        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 }}
           type = "text"
          onChange={(e) => setQ1A4(e.target.value)}
          value={exam_q1_answer4}
          label="Fourth Choice:"
        />
        <br/>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 }}
           type = "text"
          onChange={(e) => setQ1R(e.target.value)}
          value={exam_q1_right_answer}
          label="Right Choice:"
        />
        </Box>


        <Box sx={{marginLeft : 32.5, marginTop : -53}}>
        <h3>Second Question!</h3>
        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 }}
           type = "text"
          onChange={(e) => setQ2(e.target.value)}
          value={exam_q2}
          label="Exam Question :"
        />
         <br/>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 }}
           type = "text"
          onChange={(e) => setQ2A1(e.target.value)}
          value={exam_q2_answer1}
          label="First Choice:"
        />
         <br/>
        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 }}
           type = "text"
          onChange={(e) => setQ2A2(e.target.value)}
          value={exam_q2_answer2}
          label="Second Choice:"
        />
         <br/>
        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 }}
           type = "text"
          onChange={(e) => setQ2A3(e.target.value)}
          value={exam_q2_answer3}
          label="Third Choice:"
        />
         <br/>
        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 }}
           type = "text"
          onChange={(e) => setQ2A4(e.target.value)}
          value={exam_q2_answer4}
          label="Fourth Choice:"
        />
        <br/>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 }}
           type = "text"
          onChange={(e) => setQ2R(e.target.value)}
          value={exam_q2_right_answer}
          label="Right Choice:"
        />
        </Box>

        <Box sx={{marginLeft : 65, marginTop : -53}}>
        <h3>Third Question!</h3>
        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 }}
           type = "text"
          onChange={(e) => setQ3(e.target.value)}
          value={exam_q3}
          label="Exam Question :"
        />
         <br/>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 }}
           type = "text"
          onChange={(e) => setQ3A1(e.target.value)}
          value={exam_q3_answer1}
          label="First Choice:"
        />
         <br/>
        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 }}
           type = "text"
          onChange={(e) => setQ3A2(e.target.value)}
          value={exam_q3_answer2}
          label="Second Choice:"
        />
         <br/>
        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 }}
           type = "text"
          onChange={(e) => setQ3A3(e.target.value)}
          value={exam_q3_answer3}
          label="Third Choice:"
        />
         <br/>
        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 }}
           type = "text"
          onChange={(e) => setQ3A4(e.target.value)}
          value={exam_q3_answer4}
          label="Fourth Choice:"
        />
        <br/>

        <TextField sx={{ width: '50%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 }}
           type = "text"
          onChange={(e) => setQ3R(e.target.value)}
          value={exam_q3_right_answer}
          label="Right Choice:"
        />
        </Box>

        <Box sx={{marginLeft : 97.5, marginTop : -53}}>
        <h3>Fourth Question!</h3>
        <TextField sx={{ width: '100%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 }}
           type = "text"
          onChange={(e) => setQ4(e.target.value)}
          value={exam_q4}
          label="Exam Question :"
        />
         <br/>

        <TextField sx={{ width: '100%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 }}
           type = "text"
          onChange={(e) => setQ4A1(e.target.value)}
          value={exam_q4_answer1}
          label="First Choice:"
        />
         <br/>
        <TextField sx={{ width: '100%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 }}
           type = "text"
          onChange={(e) => setQ4A2(e.target.value)}
          value={exam_q4_answer2}
          label="Second Choice:"
        />
         <br/>
        <TextField sx={{ width: '100%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 }}
           type = "text"
          onChange={(e) => setQ4A3(e.target.value)}
          value={exam_q4_answer3}
          label="Third Choice:"
        />
         <br/>
        <TextField sx={{ width: '100%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 }}
           type = "text"
          onChange={(e) => setQ4A4(e.target.value)}
          value={exam_q4_answer4}
          label="Fourth Choice:"
        />
        <br/>

        <TextField sx={{ width: '100%', background : '#FFFFFF', borderBlockColor: '#a6607c', marginBottom : 1 }}
          type = "text"
          onChange={(e) => setQ4R(e.target.value)}
          value={exam_q4_right_answer}
          label="Right Choice:"
        />
        </Box>

        <Button onClick={addExam} 
        sx={{marginLeft : 110, marginBottom : -5, marginRight : 0}}
        size='small'>
          <h3>Add Exam</h3>
          </Button>


        </Box>
      </Modal>
      <br/>
      <br/>
      <br/>
        <Button sx={{ color: '#a6607c' }}className="filterbutton" onClick={handleSubmit}>Add Course</Button>
        {error && <div className="error">{error}</div>}
      <br/>
      </div>
        ):(<div></div>)}
       </form>
       <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 , color: '#111111'}}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' , color: '#a6607c' }} />
              <Button sx={{ color: '#a6607c' }} onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 , color: '#111111'}}>
              Step {activeStep + 1}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1, color: '#a6607c' }}
              >
                Previous
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 , color: '#111111'}}>
                Next
              </Button>
           
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' , color: '#111111' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button sx={{color: '#a6607c'}} onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
          
        )
        }
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
    </Box>
    </div>
    )
}   

export default CourseForm