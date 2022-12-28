const AdminDetails = ({ admin }) => {

    return (
      <div className="admin-details">
        <p><strong>Admin Name: </strong>{admin.admin_name}</p>
        <p><strong> Email: </strong>{admin.admin_email}</p>
        <p><strong>Country: </strong>{admin.country}</p>
        <p><strong> Birthday: </strong>{admin.admin_bd}</p>

        <p>{admin.createdAt}</p>
      </div>
    )
  }
  
  export default AdminDetails



