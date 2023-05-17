import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout.js"
import Home from "./Pages/HomePage.js"
import About from "./Pages/AboutPage.js"
import Menu from "./Pages/MenuPage.js"
import Contact from "./Pages/ContactPage.js"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="About" element={<About />}></Route>
          <Route path="Menu" element={<Menu />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
