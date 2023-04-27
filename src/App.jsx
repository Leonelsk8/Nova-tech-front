import { } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className='app'>
      <Header />
      <Contact />
    </div>
  )
}

export default App;
