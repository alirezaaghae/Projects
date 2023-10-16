import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Footer from "./Footer";
import $ from 'jquery';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Contact = (props) => {
    const [emailValid, setEmailValid] = useState(false);
    const [nameValid, setNameValid] = useState(false);
    const [phoneValid, setPhoneValid] = useState(false);
    const [websiteValid, setWebsiteValid] = useState(false);

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))

        switch (name) {
            case 'name': 
              if (value == '' || value.length < 2) {
                setNameValid(false)
              } else {
                setNameValid(true)
              }
            break
            case 'email': 
            if (value == '') {
                setEmailValid(false)
              } else {
                setEmailValid(true)
              }
            break
            case 'phone': 
            if (value == '' || value.length < 2 || value.length > 15) {
                setPhoneValid(false)
              } else {
                setPhoneValid(true)
              }
            break
            case 'website': 
            if (value == '' || value.length < 2) {
                setWebsiteValid(false)
              } else {
                setWebsiteValid(true)
              }
            break
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(emailValid && nameValid && phoneValid && websiteValid){
            props.mainFormData(inputs)
            formReset()
            document.getElementById('contactUsForm').classList.add('success')
        } else {
            console.log(emailValid , nameValid , phoneValid , websiteValid)
        }
    }   

    const formReset = () => {
        setInputs({})
    }
    const FocusInput = event => {
        event.preventDefault()
        event.currentTarget.classList.add('active')
        event.currentTarget.getElementsByTagName("input")[0].focus();
    }

    useEffect(() => {
        $('html').addClass(props.page);
        $('body').attr('id', props.page);
        document.title = props.title;
        return () => {
          $('html').removeClass(props.page);
          $('body').attr('id', '');
        }
      }, []);

    return (
    <HelmetProvider>
    <Helmet>
        <meta itemprop="description" content={props.description} />
        <meta name="theme-color" content={props.colorTheme} />
        <meta name="apple-mobile-web-app-title" content={props.title} />
        <meta name="description" content={props.description} />
        <meta property="og:description" content={props.description} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:title" content={props.title} />
        <meta itemprop="name" content={props.title} />
    </Helmet>
      <div className="wrapper ContactUs-page">
        <div className="container">
            <header id="WhiteMenu">
                <Layout></Layout>
            </header>
            <main id="navbar_padding"> 
                <section id="links">
                    <div className="title">
                        <h1>Lets work together</h1>
                        <p>We’are here to help – from advertising support to your request</p>
                    </div>
                    <div className="locationInfo">
                        <div className="map"><a href="https://www.google.com/partners/agency?id=6288273986" target="_blank"><img src="assets/images/contactUsMap.jpg" alt="admoon-location" title="admoon-location"/></a></div>
                        <div className="textBox">
                            <ul>
                                <li>
                                    <img src="assets/images/locationIcon2.svg" alt="location-icon" title="location-icon"/>
                                    <a href="https://www.google.com/partners/agency?id=6288273986" target="_blank"><p>501, Baniyas CenterAl Maktoum sr., DeiraDubai, UAE</p></a>
                                </li>
                                <li>
                                    <img src="assets/images/timeIcon2.svg" alt="time-icon" title="time-icon"/>
                                    <p>You can reach us in 9:00 am to 20:00 pm</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="socialsNetwork">
                        <ul className="items">
                            <li className="item">
                                <a href="#" target="_blank">
                                    <img src="assets/images/callIcon3.svg" alt="call-icon"/>
                                    <span>+968 - 548 3422</span>
                                    <span>+968 - 469 2578</span>
                                </a>
                            </li>
                            <li className="item">
                                <a href="#" target="_blank">
                                    <img src="assets/images/mailIcon3.svg" alt="mail-icon"/>
                                    <span>Admoon@gmail.com</span>
                                </a>
                            </li>
                            <li className="item">
                                <a href="#" target="_blank">
                                    <img src="assets/images/telegramIcon3.svg" alt="telegram-icon"/>
                                    <span>Telegram</span>
                                </a>
                            </li>
                            <li className="item">
                                <a href="#" target="_blank">
                                    <img src="assets/images/whatsappIcon3.svg" alt="whatsapp-icon"/>
                                    <span>WhatsApp</span>
                                </a>
                            </li>
                            <li className="item">
                                <a href="#" target="_blank">
                                    <img src="assets/images/meetIcon3.svg" alt="Google-meet-icon"/>
                                    <span>Google meet</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section id="mainForm">
                    <div className="title">
                        <h2>Do you need our help</h2>
                        <p>We’ll do our best to get back to you as soon as possible.</p>
                    </div>
                    <div className="form contactUs" id="contactUsForm">
                        <form className="form customForm">
                            <span>We can help you with</span>
                            <div className="custom-select package">
                                <select>
                                  <option value="Audit">Audit</option>
                                  <option value="TuneUp">Tune up</option>
                                  <option value="AdsManagement">Ads Management</option>
                                  <option value="AccountSuspension">Account Suspension</option>
                                </select>
                            </div>
                            <div className="FullName" onClick={FocusInput}>
                                <label>Full Name
                                    <input type="text" name="name" min="2" max="20" value={inputs.name || ""} onChange={handleChange} required/>
                                </label>
                                <div className="bottom-line"><div className="fill-line"></div></div>
                            </div>
                            <div className="MailAddress" onClick={FocusInput}>
                                <label>Email
                                    <input type="email" name="email" value={inputs.email || ""} onChange={handleChange}/>
                                </label>
                                <div className="bottom-line"><div className="fill-line"></div></div>
                            </div>
                            <div className="WebsiteAddress" onClick={FocusInput}>
                                <label>Website URL
                                    <input type="url" name="website" value={inputs.website || ""} onChange={handleChange}/>
                                </label>
                                <div className="bottom-line"><div className="fill-line"></div></div>
                            </div>
                            <div className="PhoneNumber" onClick={FocusInput}>
                                <label>Phone Number
                                    <input type="tel" name="phone" maxLength="15" value={inputs.phone || ""} onChange={handleChange} required/>
                                </label>
                                <div className="bottom-line"><div className="fill-line"></div></div>
                            </div>
                            <div className="button">
                                <button className="send_button" onClick={handleSubmit}>Submit</button>
                            </div>
                        </form>
                        <div className="successQS">
                            <p>Thank you for ordering us! We will call you back</p>
                        </div>  
                    </div>
                    <div className="bottomText">
                        <strong>Connect with us elsewhere</strong>
                        <ul className="items">
                            <li className="item"><a href="#" className="linkedin" target="_blank"><img src="assets/images/linkedin0.svg" alt="linkedin-icon"/></a></li>
                            <li className="item"><a href="#" className="instagram" target="_blank"><img src="assets/images/instagramIcon0.svg" alt="instagram-icon"/></a></li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    </div>
    <Footer 
        FPS={props.title} 
        formData={(data) => props.mainFormData(data)}
    />
    </HelmetProvider>
    );
  };
  
  export default Contact;