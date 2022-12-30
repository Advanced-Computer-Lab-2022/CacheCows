import React from "react";
import { useNavigate } from "react-router-dom";


function ErrorPage() {
  const navigate=useNavigate();

  
  return (
<div className="pagesplain">
            <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>

  <div>ERROR! PAGE NOT FOUND</div>
  </div>
  )
}

export default ErrorPage;