import { useEffect, useState } from "react"
import ExamDetails from "../components/ExamDetails"
 
const ExamForTrainee = () => {
  const [exams, setExam] = useState([])

  useEffect(() => {
    const fetchexams = async () => {
      const response = await fetch('/api/exams/getExams')
      const json = await response.json()

      if (response.ok) {
        setExam(json)
        console.log(exams)
      }
      
    }

    fetchexams()
  }, [])

  return (
    <div className="exam">
      <h3>Your Exam</h3>
      {exams && exams.map((exam) =>(
        < ExamDetails exam = {exam} key = {exam._id}/>
      ))}
      </div>
  )
      }


export default ExamForTrainee