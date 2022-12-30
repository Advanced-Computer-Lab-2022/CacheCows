import React from "react";
import { useNavigate } from "react-router-dom";


function About() {
  const navigate=useNavigate();

  return (
  <div className="backgroundimage" >
                <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>

<div>
<br/>
<br/>
<br/>
</div>
  <h3>

    Rubix is educational website for adults that offers a personalized learning experience.

  This place has categories like art, literature, mathematics, science, history, and more. Memrise can be accessible from iOS and Android devices.

  The website includes challenges that increase your learning experience. You can easily signup into this site in order to access the course and materials.




</h3>
<br/>
<br/><br/>
<br/><br/>
<br/><br/>
<br/>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>


</div>
)
}

export default About;