import { useAuthContext } from '../hooks/useAuthContext'
import { useEffect,useState } from "react";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { Container } from 'react-bootstrap';
import { Flag } from '@material-ui/icons';
import { Box, Card } from '@mui/material';
import { Form } from 'react-router-dom';

 const ExamQs=({exam})=> {
  const params = new URLSearchParams(window.location.search);
  const course_id = params.get('course_id');

  const {user} = useAuthContext()


  const [error1, setError1] = React.useState(false);
  const [error2, setError2] = React.useState(false);
  const [error3, setError3] = React.useState(false);
  const [error4, setError4] = React.useState(false);

  const [help1, setH1] = React.useState('Choose wisely'); 
  const [help2, setH2] = React.useState('Choose wisely'); 
  const [help3, setH3] = React.useState('Choose wisely'); 
  const [help4, setH4] = React.useState('Choose wisely'); 

  const [ans1, setAns1] = React.useState('');
  const [ans2, setAns2] = React.useState('');
  const [ans3, setAns3] = React.useState('');
  const [ans4, setAns4] = React.useState('');

  const [done, setD] = React.useState(false);

  const [cheater, setC] = React.useState(false);

  const [g1, setG1] = React.useState('');
  const [g2, setG2] = React.useState('');
  const [g3, setG3] = React.useState('');
  const [g4, setG4] = React.useState('');

  const exm = {exam_id : exam._id, user_id : user._id}


  useEffect(()=>{ 

    const fetchGrade=async ()=>{

        const response= await fetch('/api/exams/getAnswer',{
          method: 'POST',
          body: JSON.stringify(exm),
          headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${user.token}`},
        })
        const json= await response.json()
        const x = JSON.stringify(json)

        const l1 = await json[0].exam_q1_grade
        const l2 = await json[0].exam_q2_grade
        const l3 = await json[0].exam_q3_grade
        const l4 = await json[0].exam_q4_grade

        setG1(l1);
        setG2(l2);
        setG3(l3);
        setG4(l4);

        if(x === ""){
        setC(false)
        }
        if(x !== ""){
          setC(true)
          console.log("answers",json)
          }
    }
    if (user) {
      fetchGrade()
        }
      },[])

  

  const answer = {
    exam_id : exam._id,
    user_id : user._id,
    course_id : course_id,

    exam_q1_answer : ans1,
    exam_q2_answer : ans2,
    exam_q3_answer : ans3, 
    exam_q4_answer : ans4
  }

  const handleRadioChange1 = (event) => {
    setAns1(event.target.value);
    setH1(' ');
    setError1(false);
  };

  const handleRadioChange2 = (event) => {
    setAns2(event.target.value);
    setH2(' ');
    setError2(false);
  };

  const handleRadioChange3 = (event) => {
    setAns3(event.target.value);
    setH3(' ');
    setError3(false);
  };

  const handleRadioChange4 = (event) => {
    setAns4(event.target.value);
    setH4(' ');
    setError4(false);
  };


  const setGrade = async(e) => {
    e.preventDefault()

    const response = await fetch('/api/exams/setGrade', {
      method: 'POST',
      body: JSON.stringify(answer),
      headers: {
          'Content-Type' : 'application/json',
          'Authorization': `Bearer ${user.token}`
      }
  }
  )
  const json = await response.json()

  console.log("answer : ",response)
  console.log("json : ",json)

  if (ans1 === exam.exam_q1_right_answer) {
    setH1('You got it!');
    setError1(false);
  }else{
    setH1('Wrong answer :(');
    setError1(true);
  } 

  if (ans2 === exam.exam_q2_right_answer) {
    setH2('You got it!');
    setError2(false);
  } else{
    setH2('Wrong answer :(');
    setError2(true);
  }  

  if (ans3 === exam.exam_q3_right_answer) {
    setH3('You got it!');
    setError3(false);
  } else{
    setH3('Wrong answer :(!');
    setError3(true);
  }
  
  if (ans4 === exam.exam_q4_right_answer) {
    setH4('You got it!');
    setError4(false);
  } else{
    setH4('Wrong Answer');
    setError4(true);
  }

  setD(true)
  };  

  return (
    <div className="exams">
    {!cheater && (
    <Container >
      <FormControl sx={{ m: 3 }} error={error1} variant="standard" disabled={done}>
        <FormLabel sx={{color:'#111111', marginLeft: -40, background: '#c7739554', fontSize: 20}} id="demo-error-radios"> 1- {exam.exam_q1}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz1"
          value={ans1}
          onChange={handleRadioChange1}
        >
          <FormControlLabel sx={{ marginLeft: -40}} onClick={(e)=> setAns1(e.target.value)} value={exam.exam_q1_answer1} control={<Radio />} label={exam.exam_q1_answer1} />
          <FormControlLabel sx={{ marginLeft: -40}} onClick={(e)=> setAns1(e.target.value)} value={exam.exam_q1_answer2} control={<Radio />} label={exam.exam_q1_answer2} />
          <FormControlLabel sx={{ marginLeft: -40}} onClick={(e)=> setAns1(e.target.value)} value={exam.exam_q1_answer3} control={<Radio />} label={exam.exam_q1_answer3} />
          <FormControlLabel sx={{ marginLeft: -40}} onClick={(e)=> setAns1(e.target.value)} value={exam.exam_q1_answer4} control={<Radio />} label={exam.exam_q1_answer4} />
        </RadioGroup>
        <h1> ________________________ </h1>
        <br/>

        <FormHelperText>{help1}</FormHelperText>

        </FormControl>
        <br/>

        <FormControl error={error2} variant="standard" disabled={done}>
        <FormLabel sx={{color:'#111111', marginLeft: -40, background: '#c7739554', fontSize: 20}} id="demo-error-radios">2- {exam.exam_q2}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz2"
          value={ans2}
          onChange={handleRadioChange2}
        >
          <FormControlLabel sx={{ marginLeft: -40}} onClick={(e)=> setAns2(e.target.value)} value={exam.exam_q2_answer1} control={<Radio />} label={exam.exam_q2_answer1} />
          <FormControlLabel sx={{ marginLeft: -40}} onClick={(e)=> setAns2(e.target.value)} value={exam.exam_q2_answer2} control={<Radio />} label={exam.exam_q2_answer2} />
          <FormControlLabel sx={{ marginLeft: -40}} onClick={(e)=> setAns2(e.target.value)} value={exam.exam_q2_answer3} control={<Radio />} label={exam.exam_q2_answer3} />
          <FormControlLabel sx={{ marginLeft: -40}} onClick={(e)=> setAns2(e.target.value)} value={exam.exam_q2_answer4} control={<Radio />} label={exam.exam_q2_answer4} />
        </RadioGroup>
        <FormHelperText>{help2}</FormHelperText>

        </FormControl>

        <br/>

        <FormControl sx={{ m: 3 }} error={error3} variant="standard" disabled={done}>

        <FormLabel sx={{color:'#111111', marginLeft: -40, background: '#c7739554', fontSize: 20}} id="demo-error-radios">3- {exam.exam_q3}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz3"
          value={ans3}
          onChange={handleRadioChange3}
        >
          <FormControlLabel sx={{ marginLeft: -40}} onClick={(e)=> setAns3(e.target.value)} value={exam.exam_q3_answer1} control={<Radio />} label={exam.exam_q3_answer1} />
          <FormControlLabel sx={{ marginLeft: -40}} onClick={(e)=> setAns3(e.target.value)} value={exam.exam_q3_answer2} control={<Radio />} label={exam.exam_q3_answer2} />
          <FormControlLabel sx={{ marginLeft: -40}} onClick={(e)=> setAns3(e.target.value)} value={exam.exam_q3_answer3} control={<Radio />} label={exam.exam_q3_answer3} />
          <FormControlLabel sx={{ marginLeft: -40}} onClick={(e)=> setAns3(e.target.value)} value={exam.exam_q3_answer4} control={<Radio />} label={exam.exam_q3_answer4} />
        </RadioGroup>

        <h1> ________________________ </h1>
        <br/>
        <FormHelperText>{help3}</FormHelperText>

        </FormControl>

        <br/>

        <FormControl sx={{ m: 3 }} error={error4} variant="standard" disabled={done}>

        <FormLabel sx={{color:'#111111', marginLeft: -40, background: '#c7739554', fontSize: 20}} id="demo-error-radios">4- {exam.exam_q4}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz4"
          value={ans4}
          onChange={handleRadioChange4}
        >
          <FormControlLabel sx={{ marginLeft: -40}} onClick={(e)=> setAns4(e.target.value)} value={exam.exam_q4_answer1} control={<Radio />} label={exam.exam_q4_answer1} />
          <FormControlLabel sx={{ marginLeft: -40}} onClick={(e)=> setAns4(e.target.value)} value={exam.exam_q4_answer2} control={<Radio />} label={exam.exam_q4_answer2} />
          <FormControlLabel sx={{ marginLeft: -40}} onClick={(e)=> setAns4(e.target.value)} value={exam.exam_q4_answer3} control={<Radio />} label={exam.exam_q4_answer3} />
          <FormControlLabel sx={{ marginLeft: -40}} onClick={(e)=> setAns4(e.target.value)} value={exam.exam_q4_answer4} control={<Radio />} label={exam.exam_q4_answer4} />
        </RadioGroup>

        
        <h1> ________________________ </h1>
        <br/>
        <FormHelperText>{help4}</FormHelperText>
        </FormControl>

        <br/>

        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined" onClick={setGrade} disabled={done}>
         Submit Quiz
        </Button>
    </Container>
    )}

    {cheater && (
      <div>
        <h3>Q1 Grade : {g1}</h3>
        <h3>Q2 Grade : {g2}</h3>
        <h3>Q3 Grade : {g3}</h3>
        <h3>Q4 Grade : {g4}</h3>
      </div>
    )}


    </div>
  );
}

export default ExamQs