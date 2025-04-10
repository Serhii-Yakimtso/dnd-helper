import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import NotFound from '../../pages/NotFound/NotFound';

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
