import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import en from './English.json';
import es from './Spanish.json';
import Store from './components/store/Store';
import { Routes, Route, Router } from 'react-router-dom';

function App() {

  const [idiom, setIdiom] = useState(es);
  const idiomChange = (value)=>{
    value === 'es' ? setIdiom(en) : setIdiom(es);
  }

  const isLog=true;
  return (
    <>
      <Routes>
        <Route path='*' element={<Store lang={idiom}/>}/>
        <Route path='/home' element={<Store lang={idiom}/>}/>
        <Route path='/prod/:id' element={isLog ? <h1>hola</h1>: <h1>chau</h1>}/>
      </Routes>
    </>
  )
}

export default App
