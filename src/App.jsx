import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import AppNavbar from './components/AppNavbar/AppNavbar';
import AppFooter from './components/AppFooter/AppFooter';

function App() {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path='/' element={<Register />} />
      </Routes>
      <AppFooter />
    </>
  );
}

export default App;
