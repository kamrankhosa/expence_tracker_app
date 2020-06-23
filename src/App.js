import React from 'react';
import './App.css';
import Child from './child';
import Header from './header';
import Footer from './footer';

import {TransactionProvider} from './transContext';

function App() {
  return (
    <TransactionProvider>
      <Header />
      <Child />
      <Footer />
      
    </TransactionProvider>
  );
}

export default App;
