import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage.jsx";
import logo from './logo.svg';
import './App.css';
import {Helmet} from "react-helmet";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" index element={<Home title="ADMOON" page="homePage" description="Admoon Description" colorTheme="#041541" />} />
          <Route path="contactUs" element={<Contact title="Contact US" page="ContactUs" description="Contact us Description" colorTheme="#252E60" />} />
          <Route path="*" element={<NoPage title="" page="" description="" colorTheme=""  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
