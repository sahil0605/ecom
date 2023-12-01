
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
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