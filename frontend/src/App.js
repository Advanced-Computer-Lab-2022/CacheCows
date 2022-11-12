import "./App.css";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



//pages and components


//import Home from './pages/Home'
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Admin from "./pages/Admin";
import CorpTrainee from "./pages/CorpTrainee";
import IndTrainee from "./pages/IndTrainee";
import ErrorPage from "./pages/ErrorPage";
import NavigationBar from './components/NavigationBar';
import Instructor from './pages/Instructor'
import InstructorcourseByprice from './pages/InstrutorcourseByprice'
import Home from "./pages/Home"
import Guest from "./pages/Guest";
import Courses from "./pages/Courses";
import Previewinstructorcourse from "./pages/previewinstructorcourse"

import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import LoginInstructor from './pages/LoginInstructor'
import RegisterInstructor from './pages/RegisterInstructor'



function App() {
  return (

    
    <div className="App">

<BrowserRouter>

<div >
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/LoginInstructor' element={<LoginInstructor />} />
            <Route path='/RegisterInstructor' element={<RegisterInstructor />} />
          </Routes>
        </div>
        </BrowserRouter>


      <BrowserRouter>

      <NavigationBar/>
       <div className="pages">
        <Routes>
          <Route
          path = "/"
          element = { <HomePage /> }
          />
          <Route 
          path = "/admin"
          element = { <Admin /> }
          />
            <Route 
          path = "/instructor"
          element = { <Instructor /> }
          />
            <Route 
          path = "/guest"
          element = { <Guest /> }
          />
            <Route 
          path = "/courses"
          element = { <Courses /> }
          />
           <Route 
          path = "/instructorcourseByprice"
          element = { <InstructorcourseByprice /> }
          />
          <Route path="/previewinstructorcourse" element={<Previewinstructorcourse/>} />

          
           <Route path="/about" element={<About />} />
        <Route path="/CorpTrainee/" element={<CorpTrainee />} />
        <Route path="/IndTrainee/" element={<IndTrainee />} />
        <Route path="*" element={<ErrorPage />} />
        
        </Routes>
       
      </div>
      </BrowserRouter>
      <ToastContainer />
      </div>
  );
      
   
  
}

export default App;
