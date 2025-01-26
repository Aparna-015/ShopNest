import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productdetails from './Pages/Productdetails';
// import Header from './Components/Header';
import Cart from './Pages/Cart';
import Footersection from './Components/Footer';
import Example from './Components/Header';
// import { Context } from './Context/Context';

function App() {
  return (
    <div className="App">

{/* <Context> */}
      <Example/>
     <Router>
      
      <Routes>
   
       <Route path="/" element={<Home />} />

       
    <Route path="/product/:id" element={<Productdetails/>} /> 
    <Route path="/cart/:id" element={<Cart/>} /> 
      </Routes>
    </Router>
  <Footersection/>
  {/* </Context> */}
    </div>
  );
}

export default App;
