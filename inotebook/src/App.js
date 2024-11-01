import './App.css';
import Navbar from './components/Navbar';
import Home from './components/home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <NoteState>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
    
    </Routes>
    </Router>
    </NoteState>
    </>
  );
}

export default App;


