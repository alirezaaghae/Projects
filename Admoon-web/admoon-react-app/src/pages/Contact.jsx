import { useEffect } from 'react';
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Footer from "./Footer";
import $ from 'jquery';
import {Helmet} from "react-helmet";

const Contact = (props) => {

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
    <>
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
                    <div className="form contactUs">
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
                            <div className="FullName">
                                <label>Full Name
                                    <input type="text" name="name" min="2" max="20" required/>
                                </label>
                                <div className="bottom-line"><div className="fill-line"></div></div>
                            </div>
                            <div className="MailAddress">
                                <label>Email
                                    <input type="email" name="email"/>
                                </label>
                                <div className="bottom-line"><div className="fill-line"></div></div>
                            </div>
                            <div className="WebsiteAddress">
                                <label>Website URL
                                <input type="text" name="website"/></label>
                                <div className="bottom-line"><div className="fill-line"></div></div>
                            </div>
                            <div className="PhoneNumber">
                                <label>Phone Number
                                    <input type="tel" name="phone" maxlength="15" required/>
                                </label>
                                <div className="bottom-line"><div className="fill-line"></div></div>
                            </div>
                            <div className="button">
                                <button className="send_button">Submit</button>
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
      <Footer FPS={props.title}></Footer>
    </>
    );
  };
  
  export default Contact;