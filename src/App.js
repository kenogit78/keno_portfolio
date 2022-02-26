import './App.css';
import Homepage from './components/homepage';
// import Navbar from './components/navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import About from './components/about';
import Footer from './components/footer';
// import Work from './components/work';

function App() {
  return (
    <div className="App">
          {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<About />} />
          {/* <Route path="work" element={<Work />} /> */}
        </Routes>
        
        <Footer />
     
    </div>
  );
}

export default App;
