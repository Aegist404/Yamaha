import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Service from './page/Service'
import Booking from "./page/Booking";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' title='Home' element={<Home />}/>
        <Route path='/service' element={<Service />}/>
        <Route path='/booking' element={<Booking />}/>
      </Routes>
    </Router>
 
  );
}

export default App;
