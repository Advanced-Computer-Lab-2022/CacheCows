import "./App.css";
import { BrowserRouter , Routes, Route } from "react-router-dom";


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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar />
       <div className="pages">
        <Routes>
          <Route
          path = "/"
          element = { <Home /> }
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
          path = "/instructorcourseByprice"
          element = { <InstructorcourseByprice /> }

          />
           <Route path="/about" element={<About />} />
        <Route path="/CorpTrainee/" element={<CorpTrainee />} />
        <Route path="/IndTrainee/" element={<IndTrainee />} />
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="*" element={<ErrorPage />} />
        </Routes>
       
      </div>
      </BrowserRouter>
      </div>
  );
      
   
  
}

export default App;
