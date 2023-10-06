import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import BestSeller from './components/BestSeller/BestSeller';
import Footer from './components/Footer/Footer';
import Sale from './components/Sale/Sale'

function App() {
  return (
    <Router>
        <Header/>
        <Main/>
        <BestSeller/>
        <Sale/>
        <Footer/>
    </Router>
  );
}

export default App;
