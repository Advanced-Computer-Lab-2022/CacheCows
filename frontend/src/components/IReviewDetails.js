const IReviewDetails = ({ review }) => {

    return (
      <div className="course-details">
        <p><strong>Instructor ID: </strong>{review.instructor_id}</p>
        <p><strong>User ID: </strong>{review.user_id}</p>
        <p><strong>Review: </strong>{review.review}</p>
 

        <p>{review.createdAt}</p>
      </div>
    )
  }
  
  export default IReviewDetails



