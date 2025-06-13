import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Categories from './components/Categories';
import Offers from './components/Offers';
import About from './components/About';

const App = () => {
  return(
    <div>
      <Header />
      <Hero/>
      <Products/>
      <Categories/>
      <Offers/>
      <About />
    </div>
  )
}

export default App