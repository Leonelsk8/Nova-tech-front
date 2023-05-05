import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import en from './English.json';
import es from './Spanish.json';
import Store from './components/store/Store';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Routes, Route} from 'react-router-dom';
import Login from './components/page/Login';


function App() {
  const [lang, setLang] = useState(es);
  const [bgMode, setbgMode] = useState('light');
  const [textMode, settextMode] = useState('dark');
  
  const bgChange = ()=>{
    bgMode === 'light' ? setbgMode('dark') : setbgMode('light');
    textMode === 'dark' ? settextMode('white') : settextMode('dark');
  }

  const langChange = (value)=>{
    value === 'es' ? setLang(es) : setLang(en);
  }

  const isLog=true;
  return (
    <>
      <Navbar modeDLchange={bgChange} modeDL={bgMode} lang={lang} langChange={langChange}/>
      <Routes>
        <Route path='*' element={<Store modeDL={bgMode} textDL={textMode} lang={lang}/>}/>
        <Route path='/home' element={<Store modeDL={bgMode} textDL={textMode} lang={lang}/>}/>
        <Route path='/prod/:id' element={isLog ? <h1>hola</h1>: <h1>chau</h1>}/>
        <Route path='/aboutus' element={<h1>aca va el about us</h1>}/>
        <Route path='/contact' element={<h1>aca va el contacto</h1>}/>
        <Route path='/login' element={<Login modeDL={bgMode} textDL={textMode} lang={lang}/>}/>
        <Route path='/register' element={<h1>aca va el register</h1>}/>
      </Routes>
      <Footer modeDL={bgMode} textDL={textMode} lang={lang}/>
    </>
  );
}

export default App;
