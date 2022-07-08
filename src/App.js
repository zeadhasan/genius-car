import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <section>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>

      <Footer></Footer>
    </section>
  );
}

export default App;
