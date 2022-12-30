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
import InstEditBiography from "./pages/InstEditBiography";

import InstSetCourseDiscount from "./pages/InstSetCourseDiscount";

import AccessDenied from "./pages/AccessDenied"
import InstructorAcceptTerms from "./pages/termsandconditions";

import ResponsiveAppBar from "./components/NavBarBS";
import Corpratecourse from "./pages/Corpratecourse"
import Corpreviewinst from "./pages/Corpreviewinst"
import Paycourse from"./pages/Paycourse"


import Login from './pages/Login'
import Signup from './pages/IndTraineeSignup'

import IndTraineeSignup from './pages/IndTraineeSignup'
import InstSignup from './pages/InstSignup'
import IndTraineeNew from './pages/IndTraineeNew'



import InstLogin from './pages/InstLogin'
import IndTraineeLogin from './pages/IndTraineeLogin'
import CorpTraineeLogin from './pages/CorpTraineeLogin'
import AdminLogin from './pages/AdminLogin'

import Instforgetpassword from './pages/instforgetPassword'

import Indvforgetpassword from "./pages/indvforgetpassword";
import Corpforgetpassword from "./pages/corpforgetpassword";
import Instchangepasssword from "./pages/instchangepass";
import Indvchangepasssword from "./pages/Indvchangepassword";
import Corpchangepasssword from "./pages/Corpchangepassword";
import CoursePage from "./pages/CoursePage";
import Indvregisteredcourses from "./pages/IndvViewregisteredcourses";
import Indvview from "./pages/IndvtraineeviewAllcourses"
import AddCoursePage from "./pages/AddCoursePage";
import Indvrateinst from"./pages/Indvrateinst"
import Indvratecourse from "./pages/Indvratecourse"
import Corpregister from "./pages/Corpregistercourse"
import Corpviewregcourses from"./pages/CorpViewregisteredcourses"
import Indvreviewinst from "./pages/Indvreviewinst"
import Corpview from "./pages/CorpviewAllcourses.js"
import Corprateinst from "./pages/Corprateinst"
import CoursePagePreview from "./pages/CoursePagePreview";
import IndTraineetermsandconditions from "./pages/IndTraineetermsandconditions";
import TraineeResults from "./pages/TraineeResults";


import ReportsPage from "./pages/ReportPage";
import AddReportPage from "./pages/AddReportPage";
import AdminReportsPage from "./pages/AdminReportPage";
import ReportFUPage from "./pages/ReportFUPage";
import Viewcourserequests from "./pages/Courserequests"
import NewCourses from "./pages/NewCourses";
import AdminPromo from "./pages/AdminPromo";
import AcceptRequests from "./pages/Acceptreq";
import Paymentsuccess from "./pages/Paymentsuccess";

import SearchResults from "./pages/SearchResults";

function App() {

  const { user } = useAuthContext()


  const usertype = localStorage.getItem('type')
  const acceptTerms = localStorage.getItem('acceptTerms')

  return (

    
    <div className="App">
      <BrowserRouter>
      <div> 
      <ResponsiveAppBar/>
      </div>
       <div className="pages">
        <Routes>
        <Route 
          path = "/"
          element = { <Dashboard /> }
          />
          <Route
          path = "/home"
          element = { (usertype === 'admin') ?<Admin /> : ((usertype === 'instructor')?( (acceptTerms === 'true')? <Instructor /> : <InstructorAcceptTerms /> ): ((usertype === 'corptrainee')? <CorpTrainee /> : (usertype === 'indvtrainee')? <IndTrainee /> : <AccessDenied to="/" />)) }
         // element={!user ? (  (usertype === 'admin') ?<Admin /> : ((usertype === 'instructor')?( (acceptTerms === 'true')? <Instructor /> : <Termsandconditions /> ): ((usertype === 'corptrainee')? <corpTrainee /> : (usertype === 'indvtrainee')? <IndTrainee /> : <AccessDenied to="/" />))   ) : <Navigate to="/" />} 


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
          element = { (usertype === 'indvtrainee') ?<IndTrainee /> :  <AccessDenied to="/" />}

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
              element={!user ? <IndTraineeSignup /> : <Navigate to="/" />} 
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
            path="/corpforgetpassword"
            element={<Corpforgetpassword/>}
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
            path="/corpchangepassword"
            element={<Corpchangepasssword/>}
            />
            <Route 
            path="/CoursePage"
            element={<CoursePage/>}
            />
            <Route 
            path="/CoursePagePreview"
            element={<CoursePagePreview/>}
            />
            <Route 
            path="/InstEditEmail"
            element={<InstEditEmail/>}
            />
            <Route 
            path="/InstEditBiography"
            element={<InstEditBiography/>}
            />
            
            <Route 
            path="/IndTraineeNew"
            element={<IndTraineeNew/>}
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
            path="/Termsandconditions"
            element={<InstructorAcceptTerms/>}
            />



            <Route 
            path="/AddCourse"
            element={<AddCoursePage/>}
            />
             <Route 
            path="/Indvview"
            element={<Indvview/>}
            />
            <Route 
            path="/Indvrateinst"
            element={<Indvrateinst/>}
            />
            <Route 
            path="/Indvratecourse"
            element={<Indvratecourse/>}
            />
            <Route 
            path="/Indvreviewinst"
            element={<Indvreviewinst/>}
            />
            <Route 
            path="/Corpview"
            element={<Corpview/>}
            />
             <Route 
            path="/Corpregister"
            element={<Corpregister/>}
            />
             <Route 
            path="/Corpregisteredcourses"
            element={<Corpviewregcourses/>}
            />
           <Route 
            path="/Corpratecourse"
            element={<Corpratecourse/>}
            />
            <Route 
            path="/Corprateinst"
            element={<Corprateinst/>}
            />
            <Route 
            path="/Corpreviewinst"
            element={<Corpreviewinst/>}
            />
            <Route 
            path="/IndTraineetermsandconditions"
            element={<IndTraineetermsandconditions/>}
            />
            <Route 
            path="/TraineeResults"
            element={<TraineeResults/>}
            />


 
           <Route 
            path="/ReportsPage"
            element={<ReportsPage/>}
            />

           <Route 
            path="/AddReportPage"
            element={<AddReportPage/>}
            />

            <Route 
            path="/AdminReportPage"
            element={<AdminReportsPage/>}
            />

            <Route 
            path="/ReportFUPage"
            element={<ReportFUPage/>}
            />
            <Route 
            path="/viewcourserequests"
            element={<Viewcourserequests/>}
            />
            <Route 
            path="/AcceptRequests"
            element={<AcceptRequests/>}
            />
            <Route 
            path="/Paycourse"
            element={<Paycourse/>}
            />
           

            <Route 
            path="/NewCourses"
            element={<NewCourses/>}
            />

            <Route 
            path="/AdminPromo"
            element={<AdminPromo/>}
            />

            <Route 
            path="/NewCourses"
            element={<NewCourses/>}
            />

            <Route 
            path="/AdminPromo"
            element={<AdminPromo/>}
            />

          <Route 
            path="/Paymentsuccess"
            element={<Paymentsuccess/>}
            />

            <Route 
            path="/SearchResults"
            element={<SearchResults/>}
            />


        </Routes>
       
      </div>
      </BrowserRouter>
      <ToastContainer />
      </div>
  );
      
   
  
}

export default App;
