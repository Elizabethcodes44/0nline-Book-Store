import './App.css';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header/header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/footer';
import BooksList from './Components/Home/books';

import Trending from './Components/Home/trending';
import Deals from './Components/Home/Deals/deals';
import Thriller from './Components/Home/Deals/thriller';
import SciFi from './Components/Home/Deals/scifi';
import Romance from './Components/Home/Deals/romance';
import NonFiction from './Components/Home/Deals/nonfiction';
import Categories from './Components/Home/Categories/CATEGORIES';
import ThrillerCat from './Components/Home/Categories/THRILLER';
import RomanceCat from './Components/Home/Categories/ROMANTIC';
import NonFictionCat from './Components/Home/Categories/NONFICTION';

import PhotographyCat from './Components/Home/Categories/PHOTOGRAPHY';
import SciFiCat from './Components/Home/Categories/SCIFI';
import TechnologyCat from './Components/Home/Categories/techbooks';
import WishList from './Components/Home/wishlist';
import Cart from './Components/Home/cart';
import AppProvider from './AppContext';
import SearchResults from './Components/Home/searchresult';
export default function App() {
 return(
  <AppProvider>
  <Router>
  <div className='appContainer' style={{ fontFamily: 'Poppins, sans-serif' }}>
   
   <Header></Header>
    
   
    <Routes>
      <Route path="/" element= {<Home/>}></Route>
      
      <Route path="/trending" element={<Trending/>}></Route>
      <Route path="/deals"  element={<Deals/>}></Route>
      <Route path="/categories" element= {<Categories/>}></Route>
      <Route path="/books" element = {<BooksList/>}></Route>
      <Route path="/romance" element = {<Romance/>}></Route>
      <Route path="/nonfiction" element = {<NonFiction/>}></Route>
      <Route path="/scifi" element = {<SciFi/>}></Route>
      <Route path="/thrillercat" element = {<ThrillerCat/>}></Route>
      <Route path="/romancecat" element = {<RomanceCat/>}></Route>
      <Route path="/nonfictioncat" element = {<NonFictionCat/>}></Route>
      <Route path="/technologycat" element = {<TechnologyCat/>}></Route> 
      <Route path="/photographycat" element = {<PhotographyCat/>}></Route>
      <Route path="/scificat" element = {<SciFiCat/>}></Route>
      <Route path="/thriller" element = {<Thriller/>}></Route>
      <Route path="/cart" element = {<Cart/>}></Route>
      <Route path="/wishlist" element = {<WishList/>}></Route>
      <Route path="/search-results" element={<SearchResults />} />

    </Routes>
   
   
    <Footer >
     
    </Footer>
  </div>
  </Router>
  </AppProvider>
 )
}



