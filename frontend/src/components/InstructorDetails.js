const InstructorDetails = ({ instructor }) => {

    return (
      <div className="admin-details">
        <h4>{instructor.instrucor_name}</h4>
        <p><strong>Instructor Name: </strong>{instructor.instructor_name}</p>
        <p><strong> Username: </strong>{instructor.instructor_user}</p>

        <p><strong>Email: </strong>{instructor.instructor_email}</p>
        <p><strong>Country: </strong>{instructor.country}</p>
        <p><strong> Birthday: </strong>{instructor.instructor_bd}</p>

        <p>{instructor.createdAt}</p>
      </div>
    )
  }

  
  export default InstructorDetails


     






