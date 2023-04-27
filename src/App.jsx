import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import en from './English.json';
import es from './Spanish.json';
import Store from './components/store/Store';
import Landing from './components/landing/Landing';

function App() {

  const [idiom, setIdiom] = useState(es);
  const idiomChange = (value)=>{
    value === 'es' ? setIdiom(en) : setIdiom(es);
  }

  return (
    <>
      <Landing/>
      <section className='bg-Light'>
        <Store lang={idiom} />
      </section>
    </>
  )
}

export default App
