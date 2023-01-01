
import { useState } from "react"
import { useSignup } from "../hooks/IndTraineeSignup"
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from "react-router-dom"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




const Signup = () => {
  const [indv_email, setEmail] = useState('')
  const [indv_pass, setPassword] = useState('')
  const [Name, setName] = useState('')
  const [last_name, setLastName] = useState('')

  const [indv_user, setUser] = useState('')
  const [Country, setCountry] = useState('')
  const [indv_bd, setBirthday] = useState('')
  const {signup, error, isLoading} = useSignup()

  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
   
  }


  const handleSubmit = async (e) => {
    e.preventDefault()


    await signup(indv_email, indv_pass, Name, indv_user, Country, indv_bd, last_name)
  }

    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    

  const navigate=useNavigate();

  return (
  
    <div className="signuppages">
                  <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>

        <br></br>
    <form className="signup" onSubmit={handleSubmit}>

      <label className="title">Sign Up </label>
      <br></br>
      <h1>And join our Community of Learners</h1>

      <br></br>
    
      
      <label>Email address:</label>
      <input 
        type="indv_email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={indv_email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={indv_pass} 
      />
      <label>Name:</label>
      <input 
        type="Name" 
        onChange={(e) => setName(e.target.value)} 
        value={Name} 
      />
     

      <label>Last Name:</label>
      <input 
        type="Last Name" 
        onChange={(e) => setLastName(e.target.value)} 
        value={last_name} 
      />

      <label>Username:</label>
      <input 
        type="indv_user" 
        onChange={(e) => setUser(e.target.value)} 
        value={indv_user} 
      />
      <label>Country : </label>
      <input 
        type="country" 
        onChange={(e) => setCountry(e.target.value)} 
        value={Country} 
      />
      <label>Birthday:</label>
      <input 
        type="date" 
        onChange={(e) => setBirthday(e.target.value)} 
        value={indv_bd} 
      />
      
      <div>
        <br></br>
      <label>  You can not Sign up without accepting our </label> 
      
      <Button sx={{ color :'#a6607c'  }} onClick={handleClickOpen}>
        Terms & Conditions
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        <h3>Our Payment and Refund Policy</h3>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">


          <label>
        Except as provided by law, all purchases are final and non-refundable. Taxes are non-refundable. If you believe that RUBIX has charged you in error, you must contact RUBIX within 30 days of such charge. No refunds will be given for any transaction which is more than 30 days old. When you purchase any digital content or services from RUBIX, any right you may have to withdraw from or cancel the purchase will be terminated once the digital content is delivered to you upon your request, and you will not be entitled to claim any refund, except where you believe RUBIX has charged you in error. If you use third party services to purchase any of our Services, such purchase is subject to the refund terms of the applicable third party (including with respect to payment terms, refunds, etc.).
    </label>

<br></br>
<label> 
    As a trainee, you can only request a refund only if less than 50% of the course has been attended
</label>
<br></br>

<label> 
       RUBIX reserves the right to refuse a refund request if it reasonably believes or suspects (i) that you are trying to unfairly exploit this refund policy, for example, by making repetitive refund requests in respect of the same product or feature, or by trying to receive a refund for a non-refundable credit (such as a reward); (ii) that you are in breach of the terms of  Policy, RUBIX Terms of Service, the MessageWhiz General Terms & Conditions or the Privacy Policy; (iii) that you are using any of our products fraudulently or that your user account is being used by a third party fraudulently; or (iv) that you purchased your credit through a third party service and the terms of such third party do not allow such refund. This refund policy does not affect any of your statutory rights to pursue a claim.
 </label>
 <br></br>

<label> 
For all refunds due to an error in your payment amount please email Rubix1@gmail.com.com quoting your company address, full name, contact number, and reason for requesting a refund. The accounts department will deal with your query at the earliest possible opportunity and may ask for some additional details to process your refund.
</label>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>



          <input type="checkbox" id="agree" onChange={checkboxHandler} />
        </div>

        <button disabled={!agree} className="btn" onClick={handleSubmit}>
          Sign Up
        </button>

        <div>
      
    </div>

       {error && <div className="error">{error}</div>}
    </form>
    <div>
      <br>
      </br>
      <br></br>
    </div>
    </div>
    
  )
}

export default Signup