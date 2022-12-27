const IReviewDetails = ({ review }) => {

    return (
      <div className="griddetails">
        <p><strong>User Name: </strong>{review.user_name}</p>
        <p><strong>Review: </strong>{review.review}</p>
 

        <p>Date : {review.createdAt}</p>
      </div>
    )
  }
  
  export default IReviewDetails



