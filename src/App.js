import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Community from './Components/Community';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={ <Navigate to="/home" />}/>
          <Route path='/home' element={ <Home/> } />
          <Route path='/community' element={ <Community/> } />
          <Route path='/blog' element={ <Blog/> } />
          <Route path='/contact' element={ <Contact/> } />
          <Route path='/cart' element={ <Cart/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
