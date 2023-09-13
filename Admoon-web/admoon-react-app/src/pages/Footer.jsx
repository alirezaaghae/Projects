import { event } from "jquery";
import { Link } from "react-router-dom";
import $ from 'jquery';

const Footer = (props) => {
    const FocusInput = event => {
        event.currentTarget.classList.add('active');
        // monde
    }
    return (
        <footer className="site-footer footer-index" role="contentinfo">
        <div className="footerContact">
        <div className="container">
            <div className="location">
                <a className="map" href="https://goo.gl/maps/AGM85TRxLHGSoKiS6" target="_blank">
                    <img src={window.location.origin + "/assets/images/footerMapCover.png"} alt="location" title="location"/>
                </a>
                <div className="text">
                    <ul>
                        <li>
                            <img src={window.location.origin + "/assets/images/locationIcon.svg"} alt="location-icon" title="location-icon"/>
                            <a href="https://goo.gl/maps/AGM85TRxLHGSoKiS6">501, Baniyas CenterAl Maktoum sr., DeiraDubai, UAE</a>
                        </li>
                        <li>
                            <img src={window.location.origin + "/assets/images/phoneIcon.svg"} alt="phone-icon" title="phone-icon"/>
                            <a href="tel:+9685483422">+968 - 548 3422</a>
                            <a href="tel:+9684692578">+968 - 469 2578</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="footerform">
                <form className="form customForm">
                    <span>We can help you with</span>
                    <div className="custom-select footer-select">
                        <select id="FPS" page={props.FPS}>
                          <option value="Audit">Audit</option>
                          <option value="TuneUp">Tune up</option>
                          <option value="AdsManagement">Ads Management</option>
                          <option value="AccountSuspension">Account Suspension</option>
                        </select>
                    </div>
                    <div className="FullName footer-input" onClick={FocusInput}>
                        <label>Full Name
                            <input type="text" name="name" min="2" max="20" required/>
                        </label>
                        <div className="bottom-line"><div className="fill-line"></div></div>
                    </div>
                    <div className="MailAddress footer-input">
                        <label>Email
                            <input type="email" name="email"/>
                        </label>
                        <div className="bottom-line"><div className="fill-line"></div></div>
                    </div>
                    <div className="WebsiteAddress footer-input">
                        <label>Website URL
                        <input type="text" name="website"/></label>
                        <div className="bottom-line"><div className="fill-line"></div></div>
                    </div>
                    <div className="PhoneNumber footer-input">
                        <label>Phone Number
                            <input type="tel" name="phone" maxLength="15" required/>
                        </label>
                        <div className="bottom-line"><div className="fill-line"></div></div>
                    </div>
                    <div className="button footer-button">
                        <button className="send_button">Submit</button>
                    </div>
                </form>
                <div className="successQS">
                    <p>Thank you for ordering us! We will call you back</p>
                </div>
            </div>
        </div>
        </div>
        <div className="footerNav desktop">
            <div className="logo">
                <img src={window.location.origin + "/assets/images/admoonLogoWhite.svg"} alt="admoon-logo" title="admoon-logo"/>
            </div>
            <div className="footerNavBar">
                <ul className="navv">
                    <li>
                        <strong>Services</strong>
                        <ul>
                            <li><Link to="/audit">Audit</Link></li>
                            <li><Link to="/adsManagement">Ads Management</Link></li>
                            <li><Link to="/tuneUp">Tune Up</Link></li>
                            <li><Link to="/accountSuspension">Account Suspension</Link></li>
                        </ul>
                    </li>
                    <div className="vl"></div>
                    <li>
                        <strong>Solution for industry</strong>
                        <ul>
                            <li><Link to="/">E-commerce</Link></li>
                            <li><Link to="/">Travel and Tourism</Link></li>
                            <li><Link to="/">Real Estate</Link></li>
                        </ul>
                    </li>
                    <div className="vl"></div>
                    <li>
                        <strong>Learn about</strong>
                        <ul>
                            <li><Link to="/">Search Campaign</Link></li>
                            <li><Link to="/">Display Campaign</Link></li>
                            <li><Link to="/">Youtube Campaign</Link></li>
                            <li><Link to="/">Download Campaign</Link></li>
                            <li><Link to="/">Application Campaign</Link></li>
                        </ul>
                    </li>
                    <div className="vl"></div>
                    <li>
                        <strong>Resources</strong>
                        <ul>
                            <li><Link to="/caseStudy">Case Study</Link></li>
                            <li><Link to="/aboutUs">About Us</Link></li>
                            <li><Link to="/contactUs">Contact Us</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="trustUs">
                <div className="GPartner">
                    <a target="_blank" href="https://www.google.com/partners/agency?id=6288273986" className="footerbottomgpartner"><img src={window.location.origin + "/assets/images/GPartner.png"}/></a>
                </div>
                <div className="Social">
                    <ul>
                        <li><a className="linkedin" target="_blank" href="#"><img src={window.location.origin + "/assets/images/LinkdinIcon.svg"} alt="Linkdin-Icon" title="Linkdin-Icon"/></a></li>
                        <li><a className="telegram" target="_blank" href="#"><img src={window.location.origin + "/assets/images/telegramIcon.svg"} alt="telegram-Icon" title="telegram-Icon"/></a></li>
                        <li><a className="whatsapp" target="_blank" href="#"><img src={window.location.origin + "/assets/images/whatsappIcon.svg"} alt="whatsapp-Icon" title="whatsapp-Icon"/></a></li>
                        <li><a className="instagram" target="_blank" href="#"><img src={window.location.origin + "/assets/images/instagramIcon.svg"} alt="instagram-Icon" title="instagram-Icon"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footerNav mobile">
            <div className="footerNavBar">
                <ul className="navv">
                 <div className="panel-group">
                    <div className="panel">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                            <a data-toggle="collapse" href="#collapse101">Services <img src={window.location.origin + "/assets/images/downArrow.svg"}/></a>
                            </h4>
                        </div>
                        <div id="collapse101" className="panel-collapse collapse">
                            <ul className="list-group">
                            <li className="list-group-item"><Link to="/audit">Audit</Link></li>
                            <li className="list-group-item"><Link to="/adsManagement">Ads Management</Link></li>
                            <li className="list-group-item"><Link to="/tuneUp">Tune Up</Link></li>
                            <li className="list-group-item"><Link to="/accountSuspension">Account Suspension</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                            <Link to="/caseStudy">Case Study</Link>
                            </h4>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                            <a data-toggle="collapse" href="#collapse102">Solution for industry <img src={window.location.origin + "/assets/images/downArrow.svg"}/></a>
                            </h4>
                        </div>
                        <div id="collapse102" className="panel-collapse collapse">
                            <ul className="list-group">
                            <li className="list-group-item"><Link to="/">E-commerce</Link></li>
                            <li className="list-group-item"><Link to="/">Travel and Tourism</Link></li>
                            <li className="list-group-item"><Link to="/">Real Estate</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                            <a data-toggle="collapse" href="#collapse103">Learn about <img src={window.location.origin + "/assets/images/downArrow.svg"}/></a>
                            </h4>
                        </div>
                        <div id="collapse103" className="panel-collapse collapse">
                            <ul className="list-group">
                            <li className="list-group-item"><Link to="/">Search Campaign</Link></li>
                            <li className="list-group-item"><Link to="/">Display Campaign</Link></li>
                            <li className="list-group-item"><Link to="/">Youtube Campaign</Link></li>
                            <li className="list-group-item"><Link to="/">Download Campaign</Link></li>
                            <li className="list-group-item"><Link to="/">Application Campaign</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <Link to="/aboutUs">About Us</Link>
                            </h4>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                            <Link to="/contactUs">Contact Us</Link>
                            </h4>
                        </div>
                    </div>
                  </div> 
                </ul>
            </div>
            <div className="trustUs">
                <div className="GPartner">
                    <a target="_blank" href="https://www.google.com/partners/agency?id=6288273986" className="footerbottomgpartner"><img src={window.location.origin + "/assets/images/GPartner.png"}/></a>
                </div>
                <div className="Social">
                    <ul>
                        <li><a className="linkedin" target="_blank" href="#"><img src={window.location.origin + "/assets/images/LinkdinIcon.svg"} alt="Linkdin-Icon" title="Linkdin-Icon"/></a></li>
                        <li><a className="telegram" target="_blank" href="#"><img src={window.location.origin + "/assets/images/telegramIcon.svg"} alt="telegram-Icon" title="telegram-Icon"/></a></li>
                        <li><a className="whatsapp" target="_blank" href="#"><img src={window.location.origin + "/assets/images/whatsappIcon.svg"} alt="whatsapp-Icon" title="whatsapp-Icon"/></a></li>
                        <li><a className="instagram" target="_blank" href="#"><img src={window.location.origin + "/assets/images/instagramIcon.svg"} alt="instagram-Icon" title="instagram-Icon"/></a></li>
                    </ul>
                </div>
            </div>
            <div className="logo">
                <Link to="/"><img src={window.location.origin + "/assets/images/admoonLogoWhite.svg"} alt="admoon-logo" title="admoon-logo"/></Link>
            </div>
        </div>
    </footer>
    );
  };
  
export default Footer;