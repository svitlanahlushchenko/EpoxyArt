import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home/Home';
import Learn from './pages/Learn/Learn';
import GalleryPage from './pages/Gallery/Gallery';
import Lesson1 from './pages/Learn/Lesson1';
import Lesson2 from './pages/Learn/Lesson2';
import Lesson3 from './pages/Learn/Lesson3';
import Lesson4 from './pages/Learn/Lesson4';
import Lesson5 from './pages/Learn/Lesson5';
import Lesson6 from './pages/Learn/Lesson6';
import Lesson7 from './pages/Learn/Lesson7';
import Lesson8 from './pages/Learn/Lesson8';
import Lesson9 from './pages/Learn/Lesson9';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/learn' element={<Learn />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/learn/1' element={<Lesson1 />} />
          <Route path='/learn/2' element={<Lesson2 />} />
          <Route path='/learn/3' element={<Lesson3 />} />
          <Route path='/learn/4' element={<Lesson4 />} />
          <Route path='/learn/5' element={<Lesson5 />} />
          <Route path='/learn/6' element={<Lesson6 />} />
          <Route path='/learn/7' element={<Lesson7 />} />
          <Route path='/learn/8' element={<Lesson8 />} />
          <Route path='/learn/9' element={<Lesson9 />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
