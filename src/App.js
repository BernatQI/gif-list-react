import React, { useState } from 'react';
import './App.css';
import GifsList from './components/GifsList';
import { Link, Route } from 'wouter';

function App() {

  return (
    <div className="App">
      <section className='main-content'>
        <h1><a href='http://localhost:3000'>Gifs List App</a></h1>
        <Link to='/gif/seo'>SEO Gifs</Link>
        <Link to='/gif/dev'>Dev Gifs</Link>
        <Link to='/gif/javascript'>JavaScript Gifs</Link>
        <Route
          component={GifsList}
          path='/gif/:keyword' />
      </section>
    </div>
  );
}

export default App;
