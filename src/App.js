import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import BestSeller from './components/BestSeller/BestSeller';
import Footer from './components/Footer/Footer';
import Sale from './components/Sale/Sale'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/main" element={<Main/>} />
          <Route path="/bestseller" element={<BestSeller/>} />
          <Route path="/sale" element={<Sale/>} />
          <Route path="/contact" element={<Footer/>}/>
        </Routes>
        <Header/>
        <Main/>
        <BestSeller/>
        <Sale/>
        <Footer/>
    </Router>
  );
}

export default App;
