import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar
        title="TextMod"
        firstLink="Home"
        secondLink="About"
        btn="Contact Us"
      />
      <Routes>
        <Route exact path="/TextMod" element={<Form />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
