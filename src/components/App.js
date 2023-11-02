import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from './header/Header';
// import Footer from './footer/Footer';
import Home from './home/Home.js';
import MovieDetails from './moviedetails/MovieDetails';
import PageNotFound from './pagenotfound/PageNotFound';

function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path="*" element={<PageNotFound />} />
          {/* <Route path="/" element={<Footer />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;