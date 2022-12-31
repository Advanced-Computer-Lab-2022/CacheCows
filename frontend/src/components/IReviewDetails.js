const IReviewDetails = ({ review }) => {

    return (
      <div className="griddetails">
        <h5><strong>User Name: </strong>{review.user_name}</h5>
        <h5><strong>Review: </strong>{review.review}</h5>
 

        <h5>Date : {review.createdAt}</h5>
      </div>
    )
  }
  
  export default IReviewDetails



