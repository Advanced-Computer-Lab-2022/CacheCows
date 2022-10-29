const InstructorDetails = ({ instructor }) => {

    return (
      <div className="Instructor Details">
        <h4>{instructor.title}</h4>
        <p><strong>Name: </strong>{instructor.Name}</p>
        <p><strong>Instructor Username: </strong>{instructor.corp_user}</p>
        <p><strong>Instructor Password: </strong>{instructor.corp_pass}</p>
        <p><strong>Email: </strong>{instructor.corp_email}</p>
        <p><strong>Country: </strong>{instructor.country}</p>
        <p><strong>Instructor Birthday: </strong>{instructor.corp_bd}</p>

        <p>{instructor.createdAt}</p>
      </div>
    )
  }
  
  export default InstructorDetails






