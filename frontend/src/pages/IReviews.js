import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

// components
import IReviewDetails from "../components/IReviewDetails";
import IRate from "../components/IRate";

const IReviews = () => {
  const {user} = useAuthContext()
  const [reviews, setReview] = useState()
  const [error, setError] = useState()


  const params = new URLSearchParams(window.location.search);
  const instructor_id = params.get('user_id');
  const inst = {instructor_id : instructor_id}

  useEffect(() => {
    const fetchReviews = async () => {
      
      const response = await fetch('/api/reviews/getIReview',{
        method: 'POST',
        body: JSON.stringify(inst),
        headers: {
          'Content-Type' : 'application/json',
          //'Authorization': `Bearer ${user.token}`
        },
      })

      const json = await response.json()

      if (response.ok) {
        setReview(json)
      }
      if(!response.ok){
        setReview()
        setError(json.error)
        console.log('No Reviews',json)
      }

    }

    fetchReviews()
  }, [])

  return (
    <div className="course">
      <br/>
      <div classname="courses"> 
      <div className="filter">
        <IRate></IRate>
      </div>
      <div className="filter">
      <h4>Your Reviews!</h4>
      <div className="instrates"> 
        {reviews && reviews.map((review) =>(
        <IReviewDetails review={review} key={review._id} />))}          
      </div>
      <br />
      {error && <div className="error">{error}</div>}
      </div>
      <br/>      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>


      </div>
    </div>
  )
}



export default IReviews