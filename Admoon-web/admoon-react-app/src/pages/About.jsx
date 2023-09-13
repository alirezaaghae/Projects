import { useEffect } from 'react';
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Footer from "./Footer";
import $ from 'jquery';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const About = (props) => {

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

    <div className="wrapper AboutUs-page">
        <div className="container">
            <header id="WhiteMenu">
                <Layout></Layout>
            </header>
            <main id="navbar_padding">
                <section id="AboutUsIntro">
                    <div className="text"><h1>Who are we</h1><p>During the process of creating an audit for your Google Ads campaign, our team follows a meticulous and comprehensive approach to ensure no stone is left unturned. Here's a breakdown of what we do During the process of creating an audit for your Google Ads campaign, our team follows a meticulous and comprehensive approach to ensure no stone is left unturned.</p></div>
                    <div className="img"><img src="assets/images/aboutImage.jpg" alt="Admoon" title="Admoon"/></div>
                    <div className="bottomItems">
                        <ul className="desktop row">
                            <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"><div className="box"><strong>10M</strong><span>Leads Generated in the Last Year</span></div></li>
                            <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"><div className="box"><strong>50</strong><span>Accounts Tuned Up Weekly</span></div></li>
                            <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"><div className="box"><strong>100</strong><span>Accounts Reactivated Monthly</span></div></li>
                            <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"><div className="box"><strong>10</strong><span>Account Managers & 5 Campaign Strategists</span></div></li>
                        </ul>
                        <ul className="mobile">
                            <li>
                                <div className="items">
                                    <div className="item showw"><strong>10M</strong><span>Leads Generated in the Last Year</span></div>
                                    <div className="item"><strong>50</strong><span>Accounts Tuned Up Weekly</span></div>
                                </div>
                            </li>
                            <li>
                                <div className="items">
                                    <div className="item showw"><strong>100</strong><span>Accounts Reactivated Monthly</span></div>
                                    <div className="item"><strong>10</strong><span>Account Managers & 5 Campaign Strategists</span></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section id="OurStory">
                    <h2>What is our Story</h2>
                    <div className="box">
                        <ul className="items">
                            <li className="item">
                                <div className="text"><h3>We started at:</h3><p>During the process of creating an audit for your Google Ads campaign, our team follows a meticulous and comprehensive approach to ensure no stone is left unturned. Here's a breakdown of what we do During the process of creating an audit for your Google Ads campaign.</p></div>
                                <div className="img"><img src="assets/images/ourStory1.jpg" alt="Admoon-Story" title="Admoon-Story"/></div>
                            </li>
                            <li className="item">
                                <div className="text"><h3>What was our duty:</h3><p>During the process of creating an audit for your Google Ads campaign, our team follows a meticulous and comprehensive approach to ensure no stone is left unturned. Here's a breakdown of what we do During the process of creating an audit for your Google Ads campaign.</p></div>
                                <div className="img"><img src="assets/images/ourStory2.jpg" alt="Admoon-Story" title="Admoon-Story"/></div>
                            </li>
                            <li className="item">
                                <div className="text"><h3>What is our missions?</h3><p>During the process of creating an audit for your Google Ads campaign, our team follows a meticulous and comprehensive approach to ensure no stone is left unturned. Here's a breakdown of what we do During the process of creating an audit for your Google Ads campaign.</p></div>
                                <div className="img"><img src="assets/images/ourStory3.jpg" alt="Admoon-Story" title="Admoon-Story"/></div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section id="OurTeam">
                    <h2>Meet our team</h2>
                    <div className="boxs">
                        <ul className="items">
                            <li className="item">
                                <div className="box">
                                    <div className="cover"><img src="assets/images/ourTeam/mobina.png" alt="Alireza-aghaei-profile" title="Alireza-aghaei-profile"/></div>
                                    <div className="name">
                                        <div className="text">
                                            <span>Alireza</span>
                                            <span>Aghaei</span>
                                        </div>
                                        <div className="text second">
                                            <span>Alireza</span>
                                            <span>Aghaei</span>
                                        </div>
                                    </div>
                                    <div className="closeButton"><button>✖</button></div>
                                    <div className="content">
                                        <div className="info">
                                            <span>Specialist at: </span>
                                            <div className="icon">
                                                <ul className="items">
                                                    <li className="item"><img src="assets/images/searchIcon2.svg" alt="search" title="search"/><span>Search Campaign</span></li>
                                                    <li className="item"><img src="assets/images/displayIcon2.svg" alt="Display" title="Display"/><span>Display Campaign</span></li>
                                                    <li className="item"><img src="assets/images/playIcon2.svg" alt="Youtube" title="Youtube"/><span>Youtube Campaign</span></li>
                                                </ul>
                                            </div>
                                            <p>During the process of creating an audit for your Google Ads campaign, our team follows a meticulous and comprehensive approach to ensure no stone is left unturned. Here's a breakdown of what we do During the process of creating an audit for your Google Ads campaign</p>
                                            <span>Google ads certifications:</span>
                                            <ul>
                                                <li><a href="#" target="_blank"><span>Search </span><img src="assets/images/linkArrowIcon.svg"/></a></li>
                                                <li><a href="#" target="_blank"><span>Display </span><img src="assets/images/linkArrowIcon.svg"/></a></li>
                                                <li><a href="#" target="_blank"><span>Youtube </span><img src="assets/images/linkArrowIcon.svg"/></a></li>
                                            </ul>
                                        </div>
                                        <div className="social">
                                            <ul>
                                                <li><a className="linkedin" href="#" target="_blank"><img src="assets/images/LinkdinIcon.svg" alt="Linkdin-icon" title="Linkdin-icon"/></a></li>
                                                <li><a className="whatsapp" href="#" target="_blank"><img src="assets/images/whatsappIcon.svg" alt="whatsapp-icon" title="whatsapp-icon"/></a></li>
                                                <li><a className="phone" href="#" target="_blank"><img src="assets/images/phoneIcon.svg" alt="call-icon" title="call-icon"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="socials">
                                    <div className="content">
                                        <span>Product Designer</span>
                                        <div className="socialsIcon">
                                            <ul>
                                                <li><a className="linkedin" href="#" target="_blank"><img src="assets/images/linkedin0.svg" alt="Linkdin-icon" title="Linkdin-icon"/></a></li>
                                                <li><a className="whatsapp" href="#" target="_blank"><img src="assets/images/whatsapp0.svg" alt="whatsapp-icon" title="whatsapp-icon"/></a></li>
                                                <li><a className="phone" href="#" target="_blank"><img src="assets/images/call0.svg" alt="call-icon" title="call-icon"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="item">
                                <div className="box">
                                    <div className="cover"><img src="assets/images/ourTeam/mobina.png" alt="mobina-profile" title="mobina-profile"/></div>
                                    <div className="name">
                                        <div className="text">
                                            <span>Mobina</span>
                                            <span>Davari</span>
                                        </div>
                                        <div className="text second">
                                            <span>Mobina</span>
                                            <span>Davari</span>
                                        </div>
                                    </div>
                                    <div className="closeButton"><button>✖</button></div>
                                    <div className="content">
                                        <div className="info">
                                            <span>Specialist at: </span>
                                            <div className="icon">
                                                <ul className="items">
                                                    <li className="item"><img src="assets/images/searchIcon2.svg" alt="search" title="search"/><span>Search Campaign</span></li>
                                                    <li className="item"><img src="assets/images/displayIcon2.svg" alt="Display" title="Display"/><span>Display Campaign</span></li>
                                                    <li className="item"><img src="assets/images/playIcon2.svg" alt="Youtube" title="Youtube"/><span>Youtube Campaign</span></li>
                                                </ul>
                                            </div>
                                            <p>During the process of creating an audit for your Google Ads campaign, our team follows a meticulous and comprehensive approach to ensure no stone is left unturned. Here's a breakdown of what we do During the process of creating an audit for your Google Ads campaign</p>
                                            <span>Google ads certifications:</span>
                                            <ul>
                                                <li><a href="#" target="_blank"><span>Search </span><img src="assets/images/linkArrowIcon.svg"/></a></li>
                                                <li><a href="#" target="_blank"><span>Display </span><img src="assets/images/linkArrowIcon.svg"/></a></li>
                                                <li><a href="#" target="_blank"><span>Youtube </span><img src="assets/images/linkArrowIcon.svg"/></a></li>
                                            </ul>
                                        </div>
                                        <div className="social">
                                            <ul>
                                                <li><a className="linkedin" href="#" target="_blank"><img src="assets/images/LinkdinIcon.svg" alt="Linkdin-icon" title="Linkdin-icon"/></a></li>
                                                <li><a className="whatsapp" href="#" target="_blank"><img src="assets/images/whatsappIcon.svg" alt="whatsapp-icon" title="whatsapp-icon"/></a></li>
                                                <li><a className="phone" href="#" target="_blank"><img src="assets/images/phoneIcon.svg" alt="call-icon" title="call-icon"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="socials">
                                    <div className="content">
                                        <span>Product Designer</span>
                                        <div className="socialsIcon">
                                            <ul>
                                                <li><a className="linkedin" href="#" target="_blank"><img src="assets/images/linkedin0.svg" alt="Linkdin-icon" title="Linkdin-icon"/></a></li>
                                                <li><a className="whatsapp" href="#" target="_blank"><img src="assets/images/whatsapp0.svg" alt="whatsapp-icon" title="whatsapp-icon"/></a></li>
                                                <li><a className="phone" href="#" target="_blank"><img src="assets/images/call0.svg" alt="call-icon" title="call-icon"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="item">
                                <div className="box">
                                    <div className="cover"><img src="assets/images/ourTeam/mobina.png" alt="zahra-profile" title="zahra-profile"/></div>
                                    <div className="name">
                                        <div className="text">
                                            <span>Zahra</span>
                                            <span>Molai</span>
                                        </div>
                                        <div className="text second">
                                            <span>Zahra</span>
                                            <span>Molai</span>
                                        </div>
                                    </div>
                                    <div className="closeButton"><button>✖</button></div>
                                    <div className="content">
                                        <div className="info">
                                            <span>Specialist at: </span>
                                            <div className="icon">
                                                <ul className="items">
                                                    <li className="item"><img src="assets/images/searchIcon2.svg" alt="search" title="search"/><span>Search Campaign</span></li>
                                                    <li className="item"><img src="assets/images/displayIcon2.svg" alt="Display" title="Display"/><span>Display Campaign</span></li>
                                                    <li className="item"><img src="assets/images/playIcon2.svg" alt="Youtube" title="Youtube"/><span>Youtube Campaign</span></li>
                                                </ul>
                                            </div>
                                            <p>During the process of creating an audit for your Google Ads campaign, our team follows a meticulous and comprehensive approach to ensure no stone is left unturned. Here's a breakdown of what we do During the process of creating an audit for your Google Ads campaign</p>
                                            <span>Google ads certifications:</span>
                                            <ul>
                                                <li><a href="#" target="_blank"><span>Search </span><img src="assets/images/linkArrowIcon.svg"/></a></li>
                                                <li><a href="#" target="_blank"><span>Display </span><img src="assets/images/linkArrowIcon.svg"/></a></li>
                                                <li><a href="#" target="_blank"><span>Youtube </span><img src="assets/images/linkArrowIcon.svg"/></a></li>
                                            </ul>
                                        </div>
                                        <div className="social">
                                            <ul>
                                                <li><a className="linkedin" href="#" target="_blank"><img src="assets/images/LinkdinIcon.svg" alt="Linkdin-icon" title="Linkdin-icon"/></a></li>
                                                <li><a className="whatsapp" href="#" target="_blank"><img src="assets/images/whatsappIcon.svg" alt="whatsapp-icon" title="whatsapp-icon"/></a></li>
                                                <li><a className="phone" href="#" target="_blank"><img src="assets/images/phoneIcon.svg" alt="call-icon" title="call-icon"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="socials">
                                    <div className="content">
                                        <span>Product Designer</span>
                                        <div className="socialsIcon">
                                            <ul>
                                                <li><a className="linkedin" href="#" target="_blank"><img src="assets/images/linkedin0.svg" alt="Linkdin-icon" title="Linkdin-icon"/></a></li>
                                                <li><a className="whatsapp" href="#" target="_blank"><img src="assets/images/whatsapp0.svg" alt="whatsapp-icon" title="whatsapp-icon"/></a></li>
                                                <li><a className="phone" href="#" target="_blank"><img src="assets/images/call0.svg" alt="call-icon" title="call-icon"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="item">
                                <div className="box">
                                    <div className="cover"><img src="assets/images/ourTeam/mobina.png" alt="Alireza-aghaei-profile" title="Alireza-aghaei-profile"/></div>
                                    <div className="name">
                                        <div className="text">
                                            <span>Alireza</span>
                                            <span>Aghaei</span>
                                        </div>
                                        <div className="text second">
                                            <span>Alireza</span>
                                            <span>Aghaei</span>
                                        </div>
                                    </div>
                                    <div className="closeButton"><button>✖</button></div>
                                    <div className="content">
                                        <div className="info">
                                            <span>Specialist at: </span>
                                            <div className="icon">
                                                <ul className="items">
                                                    <li className="item"><img src="assets/images/searchIcon2.svg" alt="search" title="search"/><span>Search Campaign</span></li>
                                                    <li className="item"><img src="assets/images/displayIcon2.svg" alt="Display" title="Display"/><span>Display Campaign</span></li>
                                                    <li className="item"><img src="assets/images/playIcon2.svg" alt="Youtube" title="Youtube"/><span>Youtube Campaign</span></li>
                                                </ul>
                                            </div>
                                            <p>During the process of creating an audit for your Google Ads campaign, our team follows a meticulous and comprehensive approach to ensure no stone is left unturned. Here's a breakdown of what we do During the process of creating an audit for your Google Ads campaign</p>
                                            <span>Google ads certifications:</span>
                                            <ul>
                                                <li><a href="#" target="_blank"><span>Search </span><img src="assets/images/linkArrowIcon.svg"/></a></li>
                                                <li><a href="#" target="_blank"><span>Display </span><img src="assets/images/linkArrowIcon.svg"/></a></li>
                                                <li><a href="#" target="_blank"><span>Youtube </span><img src="assets/images/linkArrowIcon.svg"/></a></li>
                                            </ul>
                                        </div>
                                        <div className="social">
                                            <ul>
                                                <li><a className="linkedin" href="#" target="_blank"><img src="assets/images/LinkdinIcon.svg" alt="Linkdin-icon" title="Linkdin-icon"/></a></li>
                                                <li><a className="whatsapp" href="#" target="_blank"><img src="assets/images/whatsappIcon.svg" alt="whatsapp-icon" title="whatsapp-icon"/></a></li>
                                                <li><a className="phone" href="#" target="_blank"><img src="assets/images/phoneIcon.svg" alt="call-icon" title="call-icon"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="socials">
                                    <div className="content">
                                        <span>Product Designer</span>
                                        <div className="socialsIcon">
                                            <ul>
                                                <li><a className="linkedin" href="#" target="_blank"><img src="assets/images/linkedin0.svg" alt="Linkdin-icon" title="Linkdin-icon"/></a></li>
                                                <li><a className="whatsapp" href="#" target="_blank"><img src="assets/images/whatsapp0.svg" alt="whatsapp-icon" title="whatsapp-icon"/></a></li>
                                                <li><a className="phone" href="#" target="_blank"><img src="assets/images/call0.svg" alt="call-icon" title="call-icon"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="item">
                                <div className="box">
                                    <div className="cover"><img src="assets/images/ourTeam/mobina.png" alt="mobina-profile" title="mobina-profile"/></div>
                                    <div className="name">
                                        <div className="text">
                                            <span>Mobina</span>
                                            <span>Davari</span>
                                        </div>
                                        <div className="text second">
                                            <span>Mobina</span>
                                            <span>Davari</span>
                                        </div>
                                    </div>
                                    <div className="closeButton"><button>✖</button></div>
                                    <div className="content">
                                        <div className="info">
                                            <span>Specialist at: </span>
                                            <div className="icon">
                                                <ul className="items">
                                                    <li className="item"><img src="assets/images/searchIcon2.svg" alt="search" title="search"/><span>Search Campaign</span></li>
                                                    <li className="item"><img src="assets/images/displayIcon2.svg" alt="Display" title="Display"/><span>Display Campaign</span></li>
                                                    <li className="item"><img src="assets/images/playIcon2.svg" alt="Youtube" title="Youtube"/><span>Youtube Campaign</span></li>
                                                </ul>
                                            </div>
                                            <p>During the process of creating an audit for your Google Ads campaign, our team follows a meticulous and comprehensive approach to ensure no stone is left unturned. Here's a breakdown of what we do During the process of creating an audit for your Google Ads campaign</p>
                                            <span>Google ads certifications:</span>
                                            <ul>
                                                <li><a href="#" target="_blank"><span>Search </span><img src="assets/images/linkArrowIcon.svg"/></a></li>
                                                <li><a href="#" target="_blank"><span>Display </span><img src="assets/images/linkArrowIcon.svg"/></a></li>
                                                <li><a href="#" target="_blank"><span>Youtube </span><img src="assets/images/linkArrowIcon.svg"/></a></li>
                                            </ul>
                                        </div>
                                        <div className="social">
                                            <ul>
                                                <li><a className="linkedin" href="#" target="_blank"><img src="assets/images/LinkdinIcon.svg" alt="Linkdin-icon" title="Linkdin-icon"/></a></li>
                                                <li><a className="whatsapp" href="#" target="_blank"><img src="assets/images/whatsappIcon.svg" alt="whatsapp-icon" title="whatsapp-icon"/></a></li>
                                                <li><a className="phone" href="#" target="_blank"><img src="assets/images/phoneIcon.svg" alt="call-icon" title="call-icon"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="socials">
                                    <div className="content">
                                        <span>Product Designer</span>
                                        <div className="socialsIcon">
                                            <ul>
                                                <li><a className="linkedin" href="#" target="_blank"><img src="assets/images/linkedin0.svg" alt="Linkdin-icon" title="Linkdin-icon"/></a></li>
                                                <li><a className="whatsapp" href="#" target="_blank"><img src="assets/images/whatsapp0.svg" alt="whatsapp-icon" title="whatsapp-icon"/></a></li>
                                                <li><a className="phone" href="#" target="_blank"><img src="assets/images/call0.svg" alt="call-icon" title="call-icon"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="item">
                                <div className="box">
                                    <div className="cover"><img src="assets/images/ourTeam/mobina.png" alt="zahra-profile" title="zahra-profile"/></div>
                                    <div className="name">
                                        <div className="text">
                                            <span>Alireza</span>
                                            <span>Aghaei</span>
                                        </div>
                                        <div className="text second">
                                            <span>Alireza</span>
                                            <span>Aghaei</span>
                                        </div>
                                    </div>
                                    <div className="closeButton"><button>✖</button></div>
                                    <div className="content">
                                        <div className="info">
                                            <span>Specialist at: </span>
                                            <div className="icon">
                                                <ul className="items">
                                                    <li className="item"><img src="assets/images/searchIcon2.svg" alt="search" title="search"/><span>Search Campaign</span></li>
                                                    <li className="item"><img src="assets/images/displayIcon2.svg" alt="Display" title="Display"/><span>Display Campaign</span></li>
                                                    <li className="item"><img src="assets/images/playIcon2.svg" alt="Youtube" title="Youtube"/><span>Youtube Campaign</span></li>
                                                </ul>
                                            </div>
                                            <p>During the process of creating an audit for your Google Ads campaign, our team follows a meticulous and comprehensive approach to ensure no stone is left unturned. Here's a breakdown of what we do During the process of creating an audit for your Google Ads campaign</p>
                                            <span>Google ads certifications:</span>
                                            <ul>
                                                <li><a href="#" target="_blank"><span>Search </span><img src="assets/images/linkArrowIcon.svg"/></a></li>
                                                <li><a href="#" target="_blank"><span>Display </span><img src="assets/images/linkArrowIcon.svg"/></a></li>
                                                <li><a href="#" target="_blank"><span>Youtube </span><img src="assets/images/linkArrowIcon.svg"/></a></li>
                                            </ul>
                                        </div>
                                        <div className="social">
                                            <ul>
                                                <li><a className="linkedin" href="#" target="_blank"><img src="assets/images/LinkdinIcon.svg" alt="Linkdin-icon" title="Linkdin-icon"/></a></li>
                                                <li><a className="whatsapp" href="#" target="_blank"><img src="assets/images/whatsappIcon.svg" alt="whatsapp-icon" title="whatsapp-icon"/></a></li>
                                                <li><a className="phone" href="#" target="_blank"><img src="assets/images/phoneIcon.svg" alt="call-icon" title="call-icon"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="socials">
                                    <div className="content">
                                        <span>Product Designer</span>
                                        <div className="socialsIcon">
                                            <ul>
                                                <li><a className="linkedin" href="#" target="_blank"><img src="assets/images/linkedin0.svg" alt="Linkdin-icon" title="Linkdin-icon"/></a></li>
                                                <li><a className="whatsapp" href="#" target="_blank"><img src="assets/images/whatsapp0.svg" alt="whatsapp-icon" title="whatsapp-icon"/></a></li>
                                                <li><a className="phone" href="#" target="_blank"><img src="assets/images/call0.svg" alt="call-icon" title="call-icon"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    </div>

    <Footer FPS={props.title}></Footer>
    </HelmetProvider>
    );
  };
  
  export default About;