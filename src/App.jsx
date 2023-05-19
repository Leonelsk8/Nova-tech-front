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
import NotFound from './pages/NotFound';
import ProductPage from './pages/ProductPage';

const App = () => {
  const [lang, setLang] = useState(es);
  const [bgMode, setbgMode] = useState('light');
  const [textMode, settextMode] = useState('dark');
  const [token, setToken] = useState(localStorage.getItem('tokenUser-novatech'));
  
  useEffect(()=>{
    const modebg = localStorage.getItem('modeDL');
    const modetext = localStorage.getItem('textMode');
    const language = localStorage.getItem('language');

    if(modebg !== null){
      setbgMode(modebg)
    }
    if(modetext !== null){
      settextMode(modetext)
    }
    if (language !== null) {
      language === 'es' ? setLang(es) : setLang(en);
    }
  }, [bgMode, textMode])

  // useEffect(()=>{
  //   const language = localStorage.getItem('language');

  //   if (language !== null) {
  //     language === 'es' ? setLang(es) : setLang(en);
  //   }
  // }, [lang])

  const bgChange = () => {
    if(bgMode === 'light'){
      setbgMode('dark'); 
      localStorage.setItem('modeDL', 'dark');
    }else{
      setbgMode('light');
      localStorage.setItem('modeDL', 'light');
    }
    if(textMode === 'dark'){
      settextMode('white');
      localStorage.setItem('textMode', 'white');
    }else{
      settextMode('dark');
      localStorage.setItem('textMode', 'dark');
    } 
  };

  const langChange = (value) => {
    value === 'es' ? setLang(es) : setLang(en);
  };

  const getToken =()=>{
    setToken(localStorage.getItem('tokenUser-novatech'));
  }

  const closeSesion =()=>{
    localStorage.removeItem('tokenUser-novatech');
    localStorage.removeItem('idUser-novatech');
    setToken(null);
  }

  return (
    <>
      <Navbar modeDLchange={bgChange} modeDL={bgMode} token={token} lang={lang} langChange={langChange} textDL={textMode} closeSesion={closeSesion}/>
      <Routes>
        <Route path='*' element={<Store modeDL={bgMode} textDL={textMode} lang={lang} token={token}/>}/>
        <Route path='/home' element={<Store modeDL={bgMode} textDL={textMode} lang={lang} token={token}/>} />
        <Route path='/prod/:id' element={token===null ?<Navigate to='/home'/>:<ProductPage modeDL={bgMode} textDL={textMode} lang={lang} token={token}/>}/>
        <Route path='/register'  element={token===null ? <Register modeDL={bgMode} textDL={textMode} lang={lang}/> : <Navigate to='/home'/>}/>
        <Route path='/panel-admin' element={adminValidate(token) ? <Panel modeDL={bgMode} textDL={textMode} lang={lang} token={token}/> : <Navigate to='/home'/>}/>
        <Route path='/profile/:id' element={<UserProfilePage modeDL={bgMode} textDL={textMode} lang={lang} token={token} langChange={langChange} />} /> 
        <Route path='/aboutUs' element={<AboutUS modeDL={bgMode} textDL={textMode} lang={lang}/>} />
        <Route path='/contact' element={<Contact modeDL={bgMode} textDL={textMode} lang={lang} />} />
        <Route path='/login' element={token===null ? <Login modeDL={bgMode} textDL={textMode} lang={lang} getToken={getToken}/> : <Navigate to='/home'/>}/>
        <Route path='/not-found' element={<NotFound modeDL={bgMode} textDL={textMode} lang={lang}/>}/>
      </Routes>
      <Footer modeDL={bgMode} textDL={textMode} lang={lang} />
    </>
  );
};

export default App;
