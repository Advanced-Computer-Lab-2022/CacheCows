const CrpTraineeDetails = ({ CrpTrainee }) => {

    return (
      <div className="admin-details">
        <p><strong>Name: </strong>{CrpTrainee.corp_name}</p>
        <p><strong> Username: </strong>{CrpTrainee.corp_user}</p>
        <p><strong>Email: </strong>{CrpTrainee.corp_email}</p>
        <p><strong>Country: </strong>{CrpTrainee.country}</p>
        <p><strong>Birthday: </strong>{CrpTrainee.corp_bd}</p>

        <p>{CrpTrainee.createdAt}</p>
      </div>
    )
  }
  
  export default CrpTraineeDetails






