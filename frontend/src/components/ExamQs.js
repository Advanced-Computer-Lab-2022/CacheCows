import { useEffect,useState } from "react";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

 const ExamQs=({exam})=> {
  const params = new URLSearchParams(window.location.search);
  const course_id = params.get('course_id');

  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely'); 

  const [ans1, setAns1] = React.useState('');
  const [ans2, setAns2] = React.useState('');
  const [ans3, setAns3] = React.useState('');
  const [ans4, setAns4] = React.useState('');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'best') {
      setHelperText('You got it!');
      setError(false);
    } else if (value === 'worst') {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };  

  console.log("exam",exam)

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="demo-error-radios">{exam.exam_q1}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value={exam.exam_q1_answer1} control={<Radio />} label={exam.exam_q1_answer1} />
          <FormControlLabel value={exam.exam_q1_answer2} control={<Radio />} label={exam.exam_q1_answer2} />
          <FormControlLabel value={exam.exam_q1_answer3} control={<Radio />} label={exam.exam_q1_answer3} />
          <FormControlLabel value={exam.exam_q1_answer4} control={<Radio />} label={exam.exam_q1_answer4} />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <br/>

        <FormLabel id="demo-error-radios">{exam.exam_q2}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value={exam.exam_q2_answer1} control={<Radio />} label={exam.exam_q2_answer1} />
          <FormControlLabel value={exam.exam_q2_answer2} control={<Radio />} label={exam.exam_q2_answer2} />
          <FormControlLabel value={exam.exam_q2_answer3} control={<Radio />} label={exam.exam_q2_answer3} />
          <FormControlLabel value={exam.exam_q2_answer4} control={<Radio />} label={exam.exam_q2_answer4} />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>

        <br/>

        <FormLabel id="demo-error-radios">{exam.exam_q3}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value={exam.exam_q3_answer1} control={<Radio />} label={exam.exam_q3_answer1} />
          <FormControlLabel value={exam.exam_q3_answer2} control={<Radio />} label={exam.exam_q3_answer2} />
          <FormControlLabel value={exam.exam_q3_answer3} control={<Radio />} label={exam.exam_q3_answer3} />
          <FormControlLabel value={exam.exam_q3_answer4} control={<Radio />} label={exam.exam_q3_answer4} />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>

        <br/>

        <FormLabel id="demo-error-radios">{exam.exam_q4}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value={exam.exam_q4_answer1} control={<Radio />} label={exam.exam_q4_answer1} />
          <FormControlLabel value={exam.exam_q4_answer2} control={<Radio />} label={exam.exam_q4_answer2} />
          <FormControlLabel value={exam.exam_q4_answer3} control={<Radio />} label={exam.exam_q4_answer3} />
          <FormControlLabel value={exam.exam_q4_answer4} control={<Radio />} label={exam.exam_q4_answer4} />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>

        <br/>
        
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>
    </form>
  );
}

export default ExamQs