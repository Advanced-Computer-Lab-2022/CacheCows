import "./App.css";
import { BrowserRouter , Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



//pages and components


//import Home from './pages/Home'
import CourseInfo from "./components/CourseInfo";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Admin from "./pages/Admin";
import CorpTrainee from "./pages/CorpTrainee";
import IndTrainee from "./pages/IndTrainee";
import ErrorPage from "./pages/ErrorPage";
import NavigationBar from './components/NavigationBar';
import Instructor from './pages/Instructor'
import InstructorcourseByprice from './pages/InstrutorcourseByprice'
import Dashboard from "./pages/Dashboard"
import Guest from "./pages/Guest";
import Courses from "./pages/Courses";
import Previewinstructorcourse from "./pages/previewinstructorcourse"
import IReviews from "./pages/IReviews";
import CReviews from "./pages/CReviews";
import InstEditEmail from "./pages/InstEditEmail";
import InstSetCourseDiscount from "./pages/InstSetCourseDiscount";
import Indvregistered from "./pages/Indvregistered"
import AccessDenied from "./pages/AccessDenied"





import Login from './pages/Login'
import Signup from './pages/Signup'

import IndTraineeSignup from './pages/IndTraineeSignup'
import InstSignup from './pages/InstSignup'

import InstLogin from './pages/InstLogin'
import IndTraineeLogin from './pages/IndTraineeLogin'
import CorpTraineeLogin from './pages/CorpTraineeLogin'
import AdminLogin from './pages/AdminLogin'

import Instforgetpassword from './pages/instforgetPassword'

import Indvforgetpassword from "./pages/indvforgetpassword";
import Cropforgetpassword from "./pages/cropforgetpassword";
import Instchangepasssword from "./pages/instchangepass";
import Indvchangepasssword from "./pages/Indvchangepassword";
import Cropchangepasssword from "./pages/Cropchangepassword";
import CoursePage from "./pages/CoursePage";
import Indvregisteredcourses from "./pages/Indvregisteredcourses";



function App() {

  const { user } = useAuthContext()


  const usertype = localStorage.getItem('type')

  return (

    
    <div className="App">
      <BrowserRouter>

      <NavigationBar/>
       <div className="pages">
        <Routes>
        <Route 
          path = "/"
          element = { <Dashboard /> }
          />
          <Route
          path = "/home"
          element={user ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route 
          path = "/admin"
          element = { (usertype === 'admin') ?<Admin /> :  <AccessDenied to="/" />}

         //element = { <Admin /> }
          />
            <Route 
          path = "/instructor"
          element = { (usertype == 'instructor') ?<Instructor /> :  <AccessDenied to="/" />}
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
          <Route 
          path="/previewinstructorcourse" 
          element={<Previewinstructorcourse/>} 
          />
           <Route 
           path="/about" 
           element={<About />} 
           />
          <Route 
          path="/CorpTrainee/" 
          //element={<CorpTrainee />} 
          element = { (usertype === 'corptrainee') ?<CorpTrainee /> :  <AccessDenied to="/" />}

          />
          <Route 
          path="/IndTrainee/" 
         // element={<IndTrainee />} 
          element = { (usertype === 'indvtrainee') ?<CorpTrainee /> :  <AccessDenied to="/" />}

          />
          <Route 
          path="*" 
          element={<ErrorPage />} 
          />
          <Route 
          path = "/ireviews"
          element = { <IReviews /> }
          />
          <Route 
          path = "/creviews"
          element = { <CReviews /> }
          />
          
          
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
            <Route 
              path="/instsignup" 
              element={<InstSignup />} 
            />
            <Route 
              path="/indtraineesignup" 
              element={<IndTraineeSignup />} 
            />
            
            <Route 
              path="/login" 
              
              element={!user ? <Login /> : <Navigate to="/" />}

             
            />
            <Route 
              path="/InstLogin" 
              element={<InstLogin />} 
              
            />
            <Route 
              path="/IndTraineeLogin" 
              element={<IndTraineeLogin />} 
            />
            <Route 
              path="/CorpTraineeLogin" 
              element={<CorpTraineeLogin />} 
            />
            <Route 
              path="/AdminLogin" 
              element={<AdminLogin />} 
            />
            <Route 
            path="/instforgetpassword"
            element={<Instforgetpassword/>}
            />
        <Route 
            path="/indvforgetpassword"
            element={<Indvforgetpassword/>}
            />
            <Route 
            path="/cropforgetpassword"
            element={<Cropforgetpassword/>}
            />
            <Route 
            path="/instchangepassword"
            element={<Instchangepasssword/>}
            />
            <Route 
            path="/indvchangepassword"
            element={<Indvchangepasssword/>}
            />
            <Route 
            path="/cropchangepassword"
            element={<Cropchangepasssword/>}
            />
            <Route 
            path="/CoursePage"
            element={<CoursePage/>}
            />
            <Route 
            path="/InstEditEmail"
            element={<InstEditEmail/>}
            />
            <Route 
            path="/InstSetCourseDiscount"
            element={<InstSetCourseDiscount/>}
            />
           <Route 
            path="/Indvregistercourses"
            element={<Indvregisteredcourses/>}
            />
<Route 
            path="/Indvregistered"
            element={<Indvregistered/>}
            />
       


        </Routes>
       
      </div>
      </BrowserRouter>
      <ToastContainer />
      </div>
  );
      
   
  
}

export default App;
