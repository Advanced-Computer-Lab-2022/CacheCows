const CrpTraineeDetails = ({ CrpTrainee }) => {

    return (
      <div className="Corporate Trainee Details">
        <p><strong>Name: </strong>{CrpTrainee.Name}</p>
        <p><strong>Corporate Trainee Username: </strong>{CrpTrainee.corp_user}</p>
        <p><strong>Corporate Trainee Password: </strong>{CrpTrainee.corp_pass}</p>
        <p><strong>Email: </strong>{CrpTrainee.corp_email}</p>
        <p><strong>Country: </strong>{CrpTrainee.country}</p>
        <p><strong>Corporate Trainee Birthday: </strong>{CrpTrainee.corp_bd}</p>

        <p>{CrpTrainee.createdAt}</p>
      </div>
    )
  }
  
  export default CrpTraineeDetails






