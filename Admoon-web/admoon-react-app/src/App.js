import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Audit from "./pages/Audit";
import TuneUp from "./pages/TuneUp";
import Ads from "./pages/Ads";
import CaseStudy from "./pages/CaseStudy";
import Single from "./pages/Single";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage.jsx";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" index element={<Home title="ADMOON" page="homePage" description="Admoon Description" colorTheme="#041541" />} />
          <Route path="contactUs" element={<Contact title="Contact US" page="ContactUs" description="Contact us Description" colorTheme="#252E60" />} />
          <Route path="aboutUs" element={<About title="" page="" description="" colorTheme=""  />} />
          <Route path="audit" element={<Audit title="" page="Audit" description="Audit Description" colorTheme="#a96e16" />} />
          <Route path="tuneUp" element={<TuneUp title="Tune up" page="TuneUp" description="Tune up Description" colorTheme="#045349" />} />
          <Route path="adsManagement" element={<Ads title="Ads Management" page="AdsManage" description="Ads Management Description" colorTheme="#232d61" />} />
          <Route path="caseStudy" element={<CaseStudy title="Case Studies" page="CaseStudy" description="Case Studies Description" colorTheme="#252E60" />} />
          <Route path="caseStudy/single" exact element={<Single title="Zarif Bar" page="Single" description="Zarif Bar Description" colorTheme="#252E60" />} />
          <Route path="*" element={<NoPage title="" page="" description="" colorTheme=""  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
