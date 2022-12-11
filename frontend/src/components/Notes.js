import { useState } from "react"
import { useLogin } from "../hooks/AdminLogin"
import { renderMatches, useNavigate } from "react-router-dom";
//import Admin from "./pages/Admin";
import { Link } from 'react-router-dom'
import jsPDF from 'jspdf';




const Notes = () => {



  const [notes, setNotes] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()

    const paramss = new URLSearchParams(window.location.search);
    const courseid = paramss.get('course_id');

    var m_names = new Array("January", "February", "March", 
    "April", "May", "June", "July",
    "August", "September", 
    "October", "November", "December");

var today = new Date();
var curr_date = today.getDate();
var curr_month = today.getMonth();
var curr_year = today.getFullYear();

today = m_names[curr_month] + " " + curr_date + ", " + curr_year;
var newdat = today;


var doc = new jsPDF('p', 'pt');

//date
doc.setFont("italic");
doc.setFontSize(10);
doc.setTextColor(0,0,0)
doc.text(470, 74, newdat);

//title 
doc.addFont('Helvertica', 'bold')
       doc.setFontSize(20);
       doc.text(190, 120,'Notes for Course ' + JSON.stringify(courseid))

//text      
doc.addFont('Helvertica', 'normal')
doc.setFontSize(13);
doc.setTextColor(0,0,0)

doc.text(35, 200, JSON.stringify(notes))

 

doc.save('notes.pdf')


  }
  

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Notes</h3>
      
      <label>Notes</label>
      <input 
        type="text" 
        onChange={(e) => setNotes(e.target.value)} 
        value={notes} 
      />

      
      
        <div style ={{textAlign : 'center'}}><br/>
        <button>Download PDF</button>
            </div>
       
         </form>
  )


}

export default Notes