import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './home';
import Header from './header';
import Figures from './figures';
import Units from './units'; 
import Theories from './theories'; 


function App() {
  
  return (<>
  <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/figures" element={<Figures/>}/>
        <Route path="/units" element={<Units/>}/>
        <Route path="/theories" element={<Theories/>}/>
    </Routes>
  </BrowserRouter>
    </>

  )
}

export default App
