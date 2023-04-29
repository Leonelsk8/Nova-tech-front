import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/page/AboutUs';
import Contact from './components/contact/Contact';
import Products from './components/page/Products';
import Home from './components/page/Home';
import NotFound from './components/page/NotFound';




function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={< Home/>} />
        <Route path='contact' element={<Contact />} />
        <Route path='aboutUS' element={<AboutUs />} />
        <Route path='contact' element={<Contact />} />
        <Route path='products' element={<Products />} />
        <Route path='*' element={< NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
