import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import Content from './components/content/Content';
import NotFound from './components/noEvents/NotFound';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Routes>
        <Route path="/" element={<Content />}>
          <Route path="notfound" element={<NotFound />} /> 
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
