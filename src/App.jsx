import { useState } from 'react';
import './App.css';
import en from './English.json';
import es from './Spanish.json';

function App() {

  const {idiom, setIdiom} = useState(es);

  const idiomChange = (value)=>{
    value === 'es' ? setIdiom(en) : setIdiom(es);
  }

  return (
    <>
      
    </>
  )
}

export default App
