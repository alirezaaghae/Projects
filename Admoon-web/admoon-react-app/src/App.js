import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
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

// const [nameValid , setNameValid] = useState(false);
// const [phoneValid , setPhoneValid] = useState(false);
// const [emailValid , setEmailValid] = useState(false);
// const [websiteValid , setWebsiteValid] = useState(false);

// const [nameInput , setNameInput] = useState('');
// const [phoneInput , setPhoneInput] = useState('');
// const [emailInput , setEmailInput] = useState('');
// const [websiteInput , setWebsiteInput] = useState('');

// const [page , setPage] = useState('');
// const [totalFeeSum , setTotalFeeSum] = useState('');
// const [wageFeeSum , setWageFeeSum] = useState('');
// const [pricePerDot , setPricePerDot] = useState('');

const App = () => {

  const [isloading, setIsloading] = useState(true);

  // This will run one time after the component mounts
  
  // useEffect(() => {
  //   const onPageLoad = () => {
  //     setIsloading(false)
  //     let x = document.getElementsByClassName("loading")[0]
  //     x.style.top = '-100%'
  //     setTimeout(function(){
  //       x.style.display = 'none'
  //     },1000)
  //   };

  //   setTimeout(function(){
  //     if (document.readyState === 'complete') {
  //       onPageLoad();
  //     } else {
  //       window.addEventListener('load', onPageLoad);
  //       return () => window.removeEventListener('load', onPageLoad);
  //     }
  //   },200)
  // }, []);

  const Loading = () => {
    return(
      <div className="loading">
        <div className="loading-text">
            <span className="loading-text-words">A</span>
            <span className="loading-text-words">D</span>
            <span className="loading-text-words">M</span>
            <span className="loading-text-words">O</span>
            <span className="loading-text-words">O</span>
            <span className="loading-text-words">N</span>
            <br/>
            <span className="loading-text-words sec">A</span>
            <span className="loading-text-words sec">G</span>
            <span className="loading-text-words sec">E</span>
            <span className="loading-text-words sec">N</span>
            <span className="loading-text-words sec">C</span>
            <span className="loading-text-words sec">Y</span>
        </div>
    </div>
    );
  }

  return (
    <>
      {/* <Loading/> */}
      <BrowserRouter>
        <Routes>
            <Route path="/" index element={<Home title="ADMOON" page="homePage" description="Admoon Description" colorTheme="#041541" />} />
            <Route path="contactUs" element={<Contact title="Contact US" page="ContactUs" description="Contact us Description" colorTheme="#252E60" />} />
            <Route path="aboutUs" element={<About title="About us" page="AboutUs" description="About us Description" colorTheme="#252E60"  />} />
            <Route path="audit" element={<Audit title="Audit" page="Audit" description="Audit Description" colorTheme="#a96e16" />} />
            <Route path="tuneUp" element={<TuneUp title="Tune up" page="TuneUp" description="Tune up Description" colorTheme="#045349" />} />
            <Route path="adsManagement" element={<Ads title="Ads Management" page="AdsManage" description="Ads Management Description" colorTheme="#232d61" />} />
            <Route path="caseStudy" element={<CaseStudy title="Case Studies" page="CaseStudy" description="Case Studies Description" colorTheme="#252E60" />} />
            <Route path="caseStudy/single" exact element={<Single title="Zarif Bar" page="Single" description="Zarif Bar Description" colorTheme="#252E60" />} />
            <Route path="*" element={<NoPage title="" page="" description="" colorTheme=""  />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
