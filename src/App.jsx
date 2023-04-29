import {Routes,Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from "./components/footer/Footer";
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
    <Navbar/>
    <Footer/>
    </>
  )
}

export default App

