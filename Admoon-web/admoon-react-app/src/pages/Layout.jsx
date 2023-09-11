import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div id="MainNavBar" className="desktop">
        <div id="navbar">
            <div className="logo">
                <Link to="/"><img src={window.location.origin + "/assets/images/admoonLogoBlue.svg"} alt="admoon-logo" title="admoon-logo"/></Link>
            </div>
            <nav>
                <ul>
                    <li className="navIcon" id="Services">
                        <span>Services</span>
                        <Link to="/">Services</Link>
                    </li>
                    <li>
                        <span>Case Study</span>
                        <Link to="/caseStudy">Case Study</Link>
                    </li>
                    <li>
                        <span>Solution for industry</span>
                        <Link to="/industry">Solution for industry</Link>
                    </li>
                    <li className="navIcon" id="LearnAbout">
                        <span>Learn about</span>
                        <Link to="/">Learn about</Link>
                    </li>
                    <li>
                        <span id="AboutUs">About Us</span>
                        <Link to="/aboutUs">About Us</Link>
                    </li>
                    <li>
                        <span id="ContactUs">Contact Us</span>
                        <Link to="/contactUs">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </div>

        <div className="selectBox ServicesNav">
            <ul>
                <li>
                    <Link to="/audit">Audit</Link>
                </li>
                <li>
                    <Link to="/tuneUp">Tune Up</Link>
                </li>
                <li>
                    <Link to="/adsManagement">Ads Management</Link>
                </li>
                <li>
                    <Link to="/accountSuspension">Account Suspension</Link>
                </li>
            </ul>
        </div>

        <div className="selectBox LearnAbout">
            <ul>
                <li>
                    <Link to="/">Search campaign</Link>
                </li>
                <li>
                    <Link to="/">Display campaign</Link>
                </li>
                <li>
                    <Link to="/">Youtube campaign</Link>
                </li>
                <li>
                    <Link to="/">Download campaign</Link>
                </li>
                <li>
                    <Link to="/">Application campaign</Link>
                </li>
            </ul>
        </div>
        </div>

        {/* mobile */}
        <div id="MainNavBar" className="mobile">
        <div id="navbar">
            <div className="logo">
                <Link to="/"><img src="assets/images/admoonLogoBlue.svg" alt="admoon-logo" title="admoon-logo"/></Link>
            </div>
            <div className="hamburgerMenu">
                <svg className="ham hamRotate ham4" viewBox="0 0 100 100" onClick={() => this.classNameList.toggle('active')}>
                    <path className="line top" d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
                    <path className="line middle" d="m 70,50 h -40" />
                    <path className="line bottom" d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
                </svg>
            </div>
        </div>
        <div className="headerNavBar">
                    <ul className="navv">
                    <div className="panel-group">
                        <div className="panel">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                <a data-toggle="collapse" href="#collapse201">Services <img src="assets/images/downArrow.svg"/></a>
                                </h4>
                            </div>
                            <div id="collapse201" className="panel-collapse collapse">
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
                                <a data-toggle="collapse" href="#collapse202">Solution for industry <img src="assets/images/downArrow.svg"/></a>
                                </h4>
                            </div>
                            <div id="collapse202" className="panel-collapse collapse">
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
                                <a data-toggle="collapse" href="#collapse203">Learn about <img src="assets/images/downArrow.svg"/></a>
                                </h4>
                            </div>
                            <div id="collapse203" className="panel-collapse collapse">
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
                    <div className="socials">
                        <div className="number">
                            <ul>
                                <li> <a href="tel:+9685483422">+968 - 548 3422</a></li>
                                <li><a href="tel:+9684692578">+968 - 469 2578</a></li>
                            </ul>
                        </div>
                        <div className="Social icons">
                            <ul>
                                <li><a className="linkedin" target="_blank" href="#"><img src="assets/images/LinkdinIcon.svg" alt="Linkdin-Icon" title="Linkdin-Icon"/></a></li>
                                <li><a className="telegram" target="_blank" href="#"><img src="assets/images/telegramIcon.svg" alt="telegram-Icon" title="telegram-Icon"/></a></li>
                                <li><a className="whatsapp" target="_blank" href="#"><img src="assets/images/whatsappIcon.svg" alt="whatsapp-Icon" title="whatsapp-Icon"/></a></li>
                                <li><a className="instagram" target="_blank" href="#"><img src="assets/images/instagramIcon.svg" alt="instagram-Icon" title="instagram-Icon"/></a></li>
                            </ul>
                    </div>
                    </div>
                </div>
        </div>

      <Outlet />
    </>
  )
};

export default Layout;