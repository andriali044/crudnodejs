import './App.css';
import Sign_in from './components/signup_sign/Sign_in';
import SIgnUp from './components/signup_sign/SIgnUp';
import Vieww from './components/signup_sign/Vieww';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/tampilanutama/Navbar';
import { NavLink } from "react-router-dom";

function App() {
  return (
    
    <>
      <NavLink to="/create"><button className="signcreate_btn">Create</button></NavLink>
      <NavLink to="/edit"><button className="signedit_btn">Edit</button></NavLink>
      <NavLink to="/view"><button className="signview_btn">view</button></NavLink>
      <Routes>
        {/* <Route path='/' element={<Maincomp />} /> */}
        <Route path='/create' element={<Sign_in />} />
        <Route path='/edit' element={<SIgnUp />} />
        <Route path='/view' element={<Vieww />} />
        {/* <Route path='/getproductsone/:id' element={<Cart />} />
        <Route path='/buynow' element={<Buynow />} /> */}
      </Routes>
    </>
  );
}

export default App;
