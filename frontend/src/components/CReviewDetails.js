const CReviewDetails = ({ review }) => {

    return (
      <div className="course-details">
        <p><strong>Course ID: </strong>{review.course_id}</p>
        <p><strong>User Name: </strong>{review.user_name}</p>
        <p><strong>Review: </strong>{review.review}</p>
 

        <p>{review.createdAt}</p>
      </div>
    )
  }
  
  export default CReviewDetails



