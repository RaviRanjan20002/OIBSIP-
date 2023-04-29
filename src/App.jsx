import Header from "./components/Header";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"; 
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import "./Styles/header.css";
import "./Styles/home.css";
import "./Styles/about.css";
import "./Styles/contact.css";
function App() {
  return (
    <>

    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </Router>
  
    </>
  );
}

export default App;
