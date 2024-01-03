import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import './App.css';
import Layout from './components/Layout';
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Form from "./components/Email Form"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="form" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
