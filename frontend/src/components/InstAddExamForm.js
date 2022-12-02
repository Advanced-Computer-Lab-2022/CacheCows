import { useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext';



const InstAddExamForm= () => {
    
    const { user } = useAuthContext()
   
    const [ exam_Name, setName] = useState('')
    const [ exam_Ques1, setQues1] = useState('')
    const [ exam_Ques2, setQues2] = useState('')
    const [ exam_Ques3, setQues3] = useState('')
    const [ exam_Ques4, setQues4] = useState('')
    const [ exam_Ques1Answer1, setQues1Answer1] = useState('')
    const [ exam_Ques1Answer2, setQues1Answer2] = useState('')
    const [ exam_Ques1Answer3, setQues1Answer3 ] = useState('')
    const [ exam_Ques1Answer4, setQues1Answer4 ] = useState('')
    const [ exam_Ques2Answer1, setQues2Answer1] = useState('')
    const [ exam_Ques2Answer2, setQues2Answer2] = useState('')
    const [ exam_Ques2Answer3, setQues2Answer3 ] = useState('')
    const [ exam_Ques2Answer4, setQues2Answer4 ] = useState('')
    const [ exam_Ques3Answer1, setQues3Answer1] = useState('')
    const [ exam_Ques3Answer2, setQues3Answer2] = useState('')
    const [ exam_Ques3Answer3, setQues3Answer3 ] = useState('')
    const [ exam_Ques3Answer4, setQues3Answer4 ] = useState('')
    const [ exam_Ques4Answer1, setQues4Answer1] = useState('')
    const [ exam_Ques4Answer2, setQues4Answer2] = useState('')
    const [ exam_Ques4Answer3, setQues4Answer3 ] = useState('')
    const [ exam_Ques4Answer4, setQues4Answer4 ] = useState('')
    
    const [ exam_Ques1RightAnswer, setQues1RightAnswer] = useState('')
    const [ exam_Ques2RightAnswer, setQues2RightAnswer] = useState('')
    const [ exam_Ques3RightAnswer, setQues3RightAnswer] = useState('')
    const [ exam_Ques4RightAnswer, setQues4RightAnswer] = useState('')
    
  
    const[error , setError] = useState(null)

    
    const handleSubmit = async(e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in')
            return
          }

        const exam = {


            
            
            exam_Name,
            exam_Ques1,
            exam_Ques2,
            exam_Ques3,
            exam_Ques4,
            exam_Ques1Answer1,
            exam_Ques1Answer2,
            exam_Ques1Answer3,
            exam_Ques1Answer4,
            exam_Ques2Answer1,
            exam_Ques2Answer2,
            exam_Ques2Answer3,
            exam_Ques2Answer4,
            exam_Ques3Answer1,
            exam_Ques3Answer2,
            exam_Ques3Answer3,
            exam_Ques3Answer4,
            exam_Ques4Answer1,
            exam_Ques4Answer2,
            exam_Ques4Answer3,
            exam_Ques4Answer4,
            exam_Ques1RightAnswer,
            exam_Ques2RightAnswer,
            exam_Ques3RightAnswer,
            exam_Ques4RightAnswer
        }

        const response = await fetch('/api/instructors/createExam', {
            method: 'POST',
            body: JSON.stringify(exam),
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
        
        
        setName('')
        setQues1('')
        setQues2('')
        setQues3('')
        setQues4('')
        setQues1Answer1('')
        setQues1Answer2('')
        setQues1Answer3('')
        setQues1Answer4('')
        setQues2Answer1('')
        setQues2Answer2('')
        setQues2Answer3('')
        setQues2Answer4('')
        setQues3Answer1('')
        setQues3Answer2('')
        setQues3Answer3('')
        setQues3Answer4('')
        setQues4Answer1('')
        setQues4Answer2('')
        setQues4Answer3('')
        setQues4Answer4('')
        setQues1RightAnswer('')
        setQues2RightAnswer('')
        setQues3RightAnswer('')
        setQues4RightAnswer('')
        
        
        setError(null)
            
        console.log('New exam Added', json)
        }
    }

    return (
       <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Exam</h3>

    
       
         

        <label> Exam Name: </label>
        <input
            type = "text"
            onChange={(e) => setName(e.target.value)}
            value={exam_Name}
        />

        <label> Ques1: </label>
        <input
            type = "text"
            onChange={(e) => setQues1(e.target.value)}
            value={exam_Ques1}

            
        />
        
        <label> Ques1 Answer1: </label>
        <input
            type = "text"
            onChange={(e) => setQues1Answer1(e.target.value)}
            value={exam_Ques1Answer1}
        />
        <label> Ques1 Answer2: </label>
        <input
            type = "text"
            onChange={(e) => setQues1Answer2(e.target.value)}
            value={exam_Ques1Answer2}
        />
        <label> Ques1 Answer3: </label>
        <input
            type = "text"
            onChange={(e) => setQues1Answer3(e.target.value)}
            value={exam_Ques1Answer3}
        />
        <label> Ques1 Answer4: </label>
        <input
            type = "text"
            onChange={(e) => setQues1Answer4(e.target.value)}
            value={exam_Ques1Answer4}
        />



        <label> Ques1  Right Answer: </label>
        <input
            type = "text"
            onChange={(e) => setQues1RightAnswer(e.target.value)}
            value={exam_Ques1RightAnswer}
        />


        <label> Ques2: </label>
        <input
            type = "text"
            onChange={(e) => setQues2(e.target.value)}
            value={exam_Ques2}
        />
        <label> Ques2 Answer1: </label>
        <input
            type = "text"
            onChange={(e) => setQues2Answer1(e.target.value)}
            value={exam_Ques2Answer1}
        />
        <label> Ques2 Answer2: </label>
        <input
            type = "text"
            onChange={(e) => setQues2Answer2(e.target.value)}
            value={exam_Ques2Answer2}
        />
        <label> Ques2 Answer3: </label>
        <input
            type = "text"
            onChange={(e) => setQues2Answer3(e.target.value)}
            value={exam_Ques2Answer3}
        />
        <label> Ques2 Answer4: </label>
        <input
            type = "text"
            onChange={(e) => setQues2Answer4(e.target.value)}
            value={exam_Ques2Answer4}
        />


        <label> Ques2  Right Answer: </label>
        <input
            type = "text"
            onChange={(e) => setQues2RightAnswer(e.target.value)}
            value={exam_Ques2RightAnswer}
        />
        
        <label> Ques3: </label>
        <input
            type = "text"
            onChange={(e) => setQues3(e.target.value)}
            value={exam_Ques3}
        />
         <label> Ques3 Answer1: </label>
        <input
            type = "text"
            onChange={(e) => setQues3Answer1(e.target.value)}
            value={exam_Ques3Answer1}
        />
        <label> Ques3 Answer2: </label>
        <input
            type = "text"
            onChange={(e) => setQues3Answer2(e.target.value)}
            value={exam_Ques3Answer2}
        />
        <label> Ques3 Answer3: </label>
        <input
            type = "text"
            onChange={(e) => setQues3Answer3(e.target.value)}
            value={exam_Ques3Answer3}
        />
        <label> Ques3 Answer4: </label>
        <input
            type = "text"
            onChange={(e) => setQues3Answer4(e.target.value)}
            value={exam_Ques3Answer4}
        />

        

        <label> Ques3  Right Answer: </label>
        <input
            type = "text"
            onChange={(e) => setQues3RightAnswer(e.target.value)}
            value={exam_Ques3RightAnswer}
        />

        

        <label> Ques4: </label>
        <input
            type = "text"
            onChange={(e) => setQues4(e.target.value)}
            value={exam_Ques4}
        />
         <label> Ques4 Answer1: </label>
        <input
            type = "text"
            onChange={(e) => setQues4Answer1(e.target.value)}
            value={exam_Ques4Answer1}
        />
        <label> Ques4 Answer2: </label>
        <input
            type = "text"
            onChange={(e) => setQues4Answer2(e.target.value)}
            value={exam_Ques4Answer2}
        />
        <label> Ques4 Answer3: </label>
        <input
            type = "text"
            onChange={(e) => setQues4Answer3(e.target.value)}
            value={exam_Ques4Answer3}
        />
        <label> Ques4 Answer4: </label>
        <input
            type = "text"
            onChange={(e) => setQues4Answer4(e.target.value)}
            value={exam_Ques4Answer4}
        />
         
         
          
        
        <label> Ques4  Right Answer: </label>
        <input
            type = "text"
            onChange={(e) => setQues4RightAnswer(e.target.value)}
            value={exam_Ques4RightAnswer}
        />
        



      



        
      







   
        <button> Add Exam!</button>
        {error && <div className="error">{error}</div>}
       </form>
    )
}   


export default InstAddExamForm