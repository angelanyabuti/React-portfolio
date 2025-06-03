import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Categories from './components/Categories';

const App = () => {
  return(
    <div>
      <Header />
      <Hero/>
      <Products/>
      <Categories/>
    </div>
  )
}

export default App