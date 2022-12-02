const IReviewDetails = ({ review }) => {

    return (
      <div className="course-details">
        <p><strong>User Name: </strong>{review.user_id}</p>
        <p><strong>Review: </strong>{review.review}</p>
 

        <p>{review.createdAt}</p>
      </div>
    )
  }
  
  export default IReviewDetails



