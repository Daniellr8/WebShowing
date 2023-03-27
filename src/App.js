import React from 'react';
import './app.css'

import { Footer, Blog, Possibility, Features, WhatShowing, Header} from './containers';
import { Article, Brand, Cta, Feature, Navbar, ScrollButton} from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <ScrollButton/>
      <WhatShowing/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App