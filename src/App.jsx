import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Categories from './components/Categories';
import Offers from './components/Offers';

const App = () => {
  return(
    <div>
      <Header />
      <Hero/>
      <Products/>
      <Categories/>
      <Offers/>
    </div>
  )
}

export default App