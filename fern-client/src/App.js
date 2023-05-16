import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout.js"
import Home from "./Components/HomePage.js"
import About from "./Components/AboutPage.js"
import Menu from "./Components/MenuPage.js"
import Contact from "./Components/ContactPage.js"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="menu" element={<Menu />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
