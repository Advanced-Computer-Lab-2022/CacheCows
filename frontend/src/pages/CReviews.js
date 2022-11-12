import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// components
import CReviewDetails from "../components/CReviewDetails";
import CReviewForm from "../components/CReviewForm";

const CReviews = () => {
  const [reviews, setReview] = useState(null)

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch('/api/reviews/getCReviews')
      const json = await response.json()

      if (response.ok) {
        setReview(json)
      }
    }

    fetchReviews()
  }, [])

  return (
    <div className="course">
      <div classname="courses"> 
      <h3>Your Reviews!</h3>
      {reviews && reviews.map((review) =>(
      <CReviewDetails review={review} key={review._id} />))} 
      <br />
      <CReviewForm/>         
      </div>
    </div>
  )
}



export default CReviews