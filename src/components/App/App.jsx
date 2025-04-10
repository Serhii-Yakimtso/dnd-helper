import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from '../Layout/Layout';

const Home = lazy(() => import('../../pages/Home/Home'));
const About = lazy(() => import('../../pages/About/About'));
const NotFound = lazy(() =>
  import('../../pages/NotFound/NotFound')
);

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
