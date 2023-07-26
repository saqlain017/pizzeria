import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import Contact from './pages/Contact';
import { Menu } from './pages/Menu';
import Error from './pages/Error404';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router>        
          <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>          
          <Footer />
      </Router>
    </div>
  );
}

export default App;
