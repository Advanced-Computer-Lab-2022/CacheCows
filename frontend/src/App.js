import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages and components


//import Home from './pages/Home'
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Instructor from "./pages/Instructor";

import CorpTrainee from "./pages/CorpTrainee";
import IndTrainee from "./pages/IndTrainee";
import ErrorPage from "./pages/ErrorPage";
import NavigationBar from './components/NavigationBar';
<<<<<<< HEAD
import Admin from './pages/Admin';
import Instructor from './pages/Instructor'
import InstructorcourseByprice from './pages/InstrutorcourseByprice'
=======
>>>>>>> ff464903f10f171ed24842db3b68fde55235713c


function App() {
  return (
<<<<<<< HEAD
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
        </Routes>
        
      </div>

      
      </BrowserRouter>
    </div>
=======
    <Router>
          <NavigationBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/Admin/" element={<Admin />} />
        <Route path="/CorpTrainee/" element={<CorpTrainee />} />
        <Route path="/IndTrainee/" element={<IndTrainee />} />
        <Route path="/Instructor/" element={<Instructor />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div> Foooter </div>
    </Router>
>>>>>>> ff464903f10f171ed24842db3b68fde55235713c
  );
}

export default App;
