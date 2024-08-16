import './App.css';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header/header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/footer';

import Trending from './Components/Home/trending';
import Deals from './Components/Home/deals';
import Categories from './Components/Home/categories';
export default function App() {
 return(
  <Router>
  <div className='appContainer' style={{ fontFamily: 'Poppins, sans-serif' }}>
   
   <Header></Header>
    
   
    <Routes>
      <Route path="/" element= {<Home/>}></Route>
      
      <Route path="/trending" element={<Trending/>}></Route>
      <Route path="/deals"  element={<Deals/>}></Route>
      <Route path="/categories" element= {<Categories/>}></Route>

    </Routes>
   
   
    <Footer >
     
    </Footer>
  </div>
  </Router>
 
 )
}



