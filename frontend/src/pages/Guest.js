import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import CustomSelect from "../components/CustomSelect"

const languages = [
  {
    id: 0,
    label: 'Egypt',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png'
  },
  {
    id: 1,
    label: 'Germany',
    logo: 'https://www.php.net//images/logos/new-php-logo.svg'
  },
  {
    id: 2,
    label: 'Greece',
    logo: 'https://logodownload.org/wp-content/uploads/2019/10/python-logo-2.png'
  },
  {
    id: 3,
    label: 'Italy',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png'
  },
  {
    id: 4,
    label: 'Austria',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/C_Sharp_logo.svg'
  }
]

function Guest() {
    const navigate=useNavigate();
    const [selectedLanguages, setSelectedLanguages] = useState([])

  return (
  <div>
    <div>
      <CustomSelect title="Select your skills:" value={selectedLanguages} onChange={(v) => setSelectedLanguages(v)} options={languages}/>
    <strong></strong>
    </div>
    <div>
    <button
        onClick={() => {
          navigate("/Courses");
        }}
      >
        {" "}
        Courses
      </button>
    
      <strong>I am a Guest
</strong>

    </div>
   </div> 
  )

}

export default Guest;