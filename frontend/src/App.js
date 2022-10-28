import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages and components
import Home from './pages/Home'
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar />
       <div className="pages">
        <Routes>
          <Route
          path = "/"
          element ={<Home />}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;