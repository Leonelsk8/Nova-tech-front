import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import en from './English.json';
import es from './Spanish.json';
import Store from './components/store/Store';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Routes, Route} from 'react-router-dom';
import Panel from './components/admin/Panel'
import Register from './pages/Register';
import AboutUS from './components/aboutUS/AboutUS';
import Contact from './components/contact/Contact';
import Login from './components/page/Login';

const App = () => {
  const [lang, setLang] = useState(es);
  const [bgMode, setbgMode] = useState('light');
  const [textMode, settextMode] = useState('dark');

  const bgChange = () => {
    bgMode === 'light' ? setbgMode('dark') : setbgMode('light');
    textMode === 'dark' ? settextMode('white') : settextMode('dark');
  };

  const langChange = (value) => {
    value === 'es' ? setLang(es) : setLang(en);
  };

  const isLog = true;
  return (
    <>
      <Navbar modeDLchange={bgChange} modeDL={bgMode} lang={lang} langChange={langChange}/>
      <Routes>
        <Route path='*' element={<Store modeDL={bgMode} textDL={textMode} lang={lang} />}/>
        <Route path='/home' element={<Store modeDL={bgMode} textDL={textMode} lang={lang} />} />
        <Route path='/prod/:id' element={isLog ? <h1>hola</h1> : <h1>chau</h1>}/>
        <Route path='/register'  element={<Register modeDL={bgMode} textDL={textMode} lang={lang} />}/>
        <Route path='/panel-admin' element={<Panel modeDL={bgMode} textDL={textMode} lang={lang}/>}/>
        <Route path='/aboutUs' element={<AboutUS/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login modeDL={bgMode} textDL={textMode} lang={lang}/>}/>
      </Routes>
      <Footer modeDL={bgMode} textDL={textMode} lang={lang} />
    </>
  );
};

export default App;
