import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import en from './English.json';
import es from './Spanish.json';
import Store from './components/store/Store';
import Navbar from './components/navbar/Navbar';
import { Routes, Route, Router } from 'react-router-dom';

function App() {

  const [idiom, setIdiom] = useState(es);
  const [bgMode, setbgMode] = useState('light');
  const [textMode, settextMode] = useState('dark');
  
  const bgChange = ()=>{
    bgMode === 'light' ? setbgMode('dark') : setbgMode('light');
    textMode === 'dark' ? settextMode('white') : settextMode('dark');
  }

  const idiomChange = (value)=>{
    value === 'es' ? setIdiom(en) : setIdiom(es);
  }

  const isLog=true;
  return (
    <>
      <Navbar modeDLchange={bgChange} modeDL={bgMode}/>
      <Routes>
        <Route path='*' element={<Store modeDL={bgMode} textDL={textMode} lang={idiom}/>}/>
        <Route path='/home' element={<Store modeDL={bgMode} textDL={textMode} lang={idiom}/>}/>
        <Route path='/prod/:id' element={isLog ? <h1>hola</h1>: <h1>chau</h1>}/>
        <Route path='/aboutus' element={<h1>aca va el about us</h1>}/>
        <Route path='/contact' element={<h1>aca va el contacto</h1>}/>
        <Route path='/login' element={<h1>aca va el login</h1>}/>
        <Route path='/register' element={<h1>aca va el register</h1>}/>
      </Routes>

    </>
  )
}

export default App
