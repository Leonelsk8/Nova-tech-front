import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Register from './pages/Register';
import AppNavbar from './components/AppNavbar/AppNavbar';
// // import en from './English.json';
// // import es from './Spanish.json';
// // ---------
// // function App() {

// //   const {idiom, setIdiom} = useState(es);

// //   const idiomChange = (value)=>{
// //     value === 'es' ? setIdiom(en) : setIdiom(es);
// //   }

// //   return (
// //     <>

// //     </>
// //   )
// // }
// // ------------

function App() {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
