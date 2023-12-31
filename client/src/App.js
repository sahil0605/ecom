
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Signin from './components/signin/Signin';
import Sell from './components/sell/Sell';

import Item from './components/item/Item';
import Cart from './components/cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/sell' element={<Sell/>}/>
        <Route path='/item' element={<Item/>}/>
        <Route path='/cart' element={<Cart/>}/>
          {/* <Route path="/createPost" element={<CreatePost/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/> */}
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
