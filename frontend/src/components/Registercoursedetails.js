const Registerdetails =({course})=>{
    return (
        <div className="admin-details">
          <p><strong>course name: </strong>{course.course_name}</p>
          <p><strong>instructor name: </strong>{course.instructor_name}</p>
          <p><strong>course rating: </strong>{course.course_rating}</p>
          <p><strong>course discount: </strong>{course.course_discount}</p>
          <p><strong>course price: </strong>{course.course_price}</p>
          <button>rate instructor</button>
          <p>  <button>rate course</button> </p>
         <p><button>review course</button></p>
         <p><button>review instructor</button></p>
         

          <p>{course.createdAt}</p>
        </div>
      )
}
export default Registerdetails