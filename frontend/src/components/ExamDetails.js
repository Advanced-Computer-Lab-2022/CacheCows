const ExamDetails = ({  exam }) => {

    return(
    
        <div className=" examDetails" >
             
           
            
            <p><strong>Exam Name:   </strong> {exam.exam_Name} </p>
            <br></br>
            <p><strong>Exam Ques1:   </strong> {exam.exam_Ques1} </p>
            <br></br>
            <p><strong>Exam Ques1Answer1:</strong><input type={"radio"} name = "Ques1" value = {"Ques1Answer1"} ></input>{exam.exam_Ques1Answer1}</p>
            <br></br>
            <p><strong>Exam Ques1Answer2:</strong><input type={"radio"} name = "Ques1" value = {"Ques1Answer2"} ></input>{exam.exam_Ques1Answer2}</p>
            <br></br>
            <p><strong>Exam Ques1Answer3:</strong><input type={"radio"} name = "Ques1" value = {"Ques1Answer3"} ></input>{exam.exam_Ques1Answer3}</p> 
            <br></br>
            <p><strong>Exam Ques1Answer4:</strong><input type={"radio"} name = "Ques1" value = {"Ques1Answer4"} ></input>{exam.exam_Ques1Answer4}</p>
            <br></br>
            <p><strong>Exam Ques2:   </strong> {exam.exam_Ques2} </p>
            <br></br>
            <p><label>Exam Ques2Answer1: </label><input type={"radio"} name = "Ques2" value = {"Ques2Answer1"} ></input>{exam.exam_Ques2Answer1}</p>
            <br></br>
            <p><strong>Exam Ques2Answer2:</strong><input type={"radio"} name = "Ques2" value = {"Ques2Answer2"} ></input>{exam.exam_Ques2Answer2}</p>
            <br></br>
            <p><strong>Exam Ques2Answer3:</strong><input type={"radio"} name = "Ques2" value = {"Ques2Answer3"} ></input>{exam.exam_Ques2Answer3}</p> 
            <br></br>
            <p><strong>Exam Ques2Answer4:</strong><input type={"radio"} name = "Ques2" value = {"Ques2Answer4"} ></input>{exam.exam_Ques2Answer4}</p>
            <br></br>
            <p><strong>Exam Ques3:   </strong> {exam.exam_Ques3} </p>
            <br></br>
            <p><strong>Exam Ques3Answer1:</strong><input type={"radio"} name = "Ques3" value = {"Ques3Answer1"} ></input>{exam.exam_Ques3Answer1}</p>
            <br></br>
            <p><strong>Exam Ques3Answer2:</strong><input type={"radio"} name = "Ques3" value = {"Ques3Answer2"} ></input>{exam.exam_Ques3Answer2}</p>
            <br></br>
            <p><strong>Exam Ques3Answer3:</strong><input type={"radio"} name = "Ques3" value = {"Ques3Answer3"} ></input>{exam.exam_Ques3Answer3}</p> 
            <br></br>
            <p><strong>Exam Ques3Answer4:</strong><input type={"radio"} name = "Ques3" value = {"Ques3Answer4"} ></input>{exam.exam_Ques3Answer4}</p>
            <br></br>
            <p><strong>Exam Ques4:   </strong> {exam.exam_Ques4} </p>
            <br></br>
            <p><strong>Exam Ques4Answer1:</strong><input type={"radio"} name = "Ques4" value = {"Ques4Answer1"} ></input>{exam.exam_Ques4Answer1}</p>
            <br></br>
            <p><strong>Exam Ques4Answer2:</strong><input type={"radio"} name = "Ques4" value = {"Ques4Answer2"} ></input>{exam.exam_Ques4Answer2}</p>
            <br></br>
            <p><strong>Exam Ques4Answer3:</strong><input type={"radio"} name = "Ques4" value = {"Ques4Answer3"} ></input>{exam.exam_Ques4Answer3}</p> 
            <br></br>
            <p><strong>Exam Ques4Answer4:</strong><input type={"radio"} name = "Ques4" value = {"Ques4Answer4"} ></input>{exam.exam_Ques4Answer4}</p>
            <br></br>
            <br></br>
            <input type ={"submit"} name ="Submit"  value="Submit"></input>

 
 
 



           




            <p> {exam.createdAt}</p>
           

            
            

    
        </div>
    
    
    
    )
    
    
    
    
    }
    export default ExamDetails