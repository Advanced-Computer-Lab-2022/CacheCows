const InstructorDetails = ({ instructor }) => {

    return (
      <div className="inst-details">
        <h4>{instructor.instrucor_name}</h4>
        <p><strong>ID: </strong>{instructor.instructor_id}</p>
        <p><strong>Instructor Username: </strong>{instructor.instructor_user}</p>
        <p><strong>Instructor Password: </strong>{instructor.instructor_pass}</p>
        <p><strong>Email: </strong>{instructor.instructor_email}</p>
        <p><strong>Country: </strong>{instructor.country}</p>
        <p><strong>Instructor Birthday: </strong>{instructor.instructor_bd}</p>

        <p>{instructor.createdAt}</p>
      </div>
    )
  }

  
  export default InstructorDetails


     






