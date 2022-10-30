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


function App() {
  return (
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
  );
}

export default App;
