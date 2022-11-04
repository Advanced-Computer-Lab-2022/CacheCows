const AdminDetails = ({ admin }) => {

    return (
      <div className="admin-details">
        <p><strong>admin Name: </strong>{admin.admin_name}</p>
        <p><strong>Admin ID: </strong>{admin.admin_id}</p>
        <p><strong>admin Email: </strong>{admin.admin_email}</p>
        <p><strong>Country: </strong>{admin.country}</p>
        <p><strong>Admin Birthday: </strong>{admin.admin_bd}</p>

        <p>{admin.createdAt}</p>
      </div>
    )
  }
  
  export default AdminDetails



