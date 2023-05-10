import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import en from './English.json';
import es from './Spanish.json';
import Store from './components/store/Store';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Routes, Route, Navigate} from 'react-router-dom';
import Panel from './components/admin/Panel'
import Register from './pages/Register';
import AboutUS from './components/aboutUS/AboutUS';
import Contact from './components/contact/Contact';
import UserProfilePage from './pages/UserProfilePage'
import Login from './pages/Login';
import {adminValidate} from './assets/utils/validations';
import ProductPage from './pages/ProductPage';

const App = () => {
  const [lang, setLang] = useState(es);
  const [bgMode, setbgMode] = useState('light');
  const [textMode, settextMode] = useState('dark');
  const [token, setToken] = useState(null);

  useEffect(()=>{
    getToken();
  },[])

  const bgChange = () => {
    bgMode === 'light' ? setbgMode('dark') : setbgMode('light');
    textMode === 'dark' ? settextMode('white') : settextMode('dark');
  };

  const langChange = (value) => {
    value === 'es' ? setLang(es) : setLang(en);
  };

  const getToken =()=>{
    setToken(localStorage.getItem('tokenUser-novatech'));
    console.log(token)
  }

  const closeSesion =()=>{
    localStorage.removeItem('tokenUser-novatech');
    setToken(null);
  }

  return (
    <>
      <Navbar modeDLchange={bgChange} modeDL={bgMode} token={token} lang={lang} langChange={langChange} closeSesion={closeSesion}/>
      <Routes>
        <Route path='*' element={<Store modeDL={bgMode} textDL={textMode} lang={lang} />}/>
        <Route path='/home' element={<Store modeDL={bgMode} textDL={textMode} lang={lang} />} />
        <Route path='/prod/:id' element={token===null ?<Navigate to='/home'/>:<ProductPage modeDL={bgMode} textDL={textMode} lang={lang}/>}/>
        <Route path='/register'  element={token===null ? <Register modeDL={bgMode} textDL={textMode} lang={lang}/> : <Navigate to='/home'/>}/>
        <Route path='/panel-admin' element={adminValidate(token) ? <Panel modeDL={bgMode} textDL={textMode} lang={lang} token={token}/> : <Navigate to='/home'/>}/>
        <Route path='/aboutUs' element={<AboutUS/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<UserProfilePage modeDL={bgMode} textDL={textMode} lang={lang} />} /> {/* Trabajo en proceso */}
        <Route path='/login' element={token===null ? <Login modeDL={bgMode} textDL={textMode} lang={lang} getToken={getToken}/> : <Navigate to='/home'/>}/>
      </Routes>
      <Footer modeDL={bgMode} textDL={textMode} lang={lang} />
    </>
  );
};

export default App;
