import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// components
import ReviewDetails from "../components/ReviewDetails";

const Reviews = () => {
  const [reviews, setReview] = useState(null)

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch('/api/reviews/getIReviews')
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
    <ReviewDetails review={review} key={review._id} />))}          
    </div>
    </div>
  )
}



export default Reviews