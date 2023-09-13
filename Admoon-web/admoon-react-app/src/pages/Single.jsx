import { useEffect } from 'react';
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Footer from "./Footer";
import $ from 'jquery';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Single = (props) => {

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

    <div className="wrapper Single-page">
    <header id="WhiteMenu">
        <div className="container">
            <Layout></Layout>
        </div>
    </header>
    <main id="navbar_padding">
        <section id="SingleCover">
            <div className="container">
                <div className="box">
                    <div className="content">
                        <div className="logo desktop">
                            <img src={window.location.origin + "/assets/images/SingleLogo.svg"} alt="spa-iranian" title="spa-iranian"/>
                        </div>
                        <div className="text">
                            <h1>Zarif Bar</h1>
                            <div className="icon-more-info"><img src={window.location.origin + "/assets/images/searchIcon.svg"} alt="searchIcon" title="searchIcon"/><span>Search campaign</span></div>
                            <p>Zarife Bar achieve a 250%+ boost in Return on Ad Spend with our expert campaign management</p>
                        </div>
                    </div>
                    <div className="img">
                        <img src={window.location.origin + "/assets/images/C1Image.jpg" } alt="spa-iranian" title="spa-iranian"/>
                    </div>
                    <div className="logo mobile">
                        <img src={window.location.origin + "/assets/images/SingleLogo.svg"} alt="spa-iranian" title="spa-iranian"/>
                    </div>
                </div>
            </div>
        </section>
        <section id="SingleIcons">
            <div className="container">
                <ul className="row icons">
                    <li className="icon col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="img"><img src={window.location.origin + "/assets/images/singleIcons/singleIcon1.svg"} alt="time" title="time"/></div>
                        <div className="text blue"><strong>May 26, 2022 – April 27, 2023</strong><span>Time period</span></div>
                    </li>
                    <li className="icon col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="img"><img src={window.location.origin + "/assets/images/singleIcons/singleIcon2.svg"} alt="location" title="location"/></div>
                        <div className="text blue"><strong>Dubai</strong><span>Location</span></div>
                    </li>
                    <li className="icon col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="img"><img src={window.location.origin + "/assets/images/singleIcons/singleIcon3.svg"} alt="ads-spend" title="ads-spend"/></div>
                        <div className="text blue"><strong>$35,000</strong><span>Total ad spend</span></div>
                    </li>
                    <li className="icon col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="img"><img src={window.location.origin + "/assets/images/singleIcons/singleIcon4.svg"} alt="click" title="click"/></div>
                        <div className="text blue"><strong>$2.5</strong><span>Average cost per click</span></div>
                    </li>
                    <li className="icon col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="img"><img src={window.location.origin + "/assets/images/singleIcons/singleIcon5.svg"} alt="Total-sale" title="Total-sale"/></div>
                        <div className="text blue"><strong>%52</strong><span>Total sale</span></div>
                    </li>
                    <li className="icon col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="img"><img src={window.location.origin + "/assets/images/singleIcons/singleIcon6.svg"} alt="revenue" title="revenue"/></div>
                        <div className="text blue"><strong>$55,000</strong><span>revenue</span></div>
                    </li>
                    <li className="icon col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="img"><img src={window.location.origin + "/assets/images/singleIcons/singleIcon7.svg"} alt="Total-conversions" title="Total-conversions"/></div>
                        <div className="text blue"><strong>%42</strong><span>Total conversions</span></div>
                    </li>
                    <li className="icon col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="img"><img src={window.location.origin + "/assets/images/singleIcons/singleIcon8.svg"} alt="ROAS" title="ROAS"/></div>
                        <div className="text green"><strong>%250</strong><span>Increase</span></div>
                    </li>
                    <li className="icon col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="img"><img src={window.location.origin + "/assets/images/singleIcons/singleIcon9.svg"} alt="RIO" title="RIO"/></div>
                        <div className="text green"><strong>%40</strong><span>Increase</span></div>
                    </li>
                    <li className="icon col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="img"><img src={window.location.origin + "/assets/images/singleIcons/singleIcon10.svg"} alt="CPC" title="CPC"/></div>
                        <div className="text green"><strong>%35</strong><span>Increase</span></div>
                    </li>
                    <li className="icon col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="img"><img src={window.location.origin + "/assets/images/singleIcons/singleIcon11.svg"} alt="CTR" title="CTR"/></div>
                        <div className="text green"><strong>%25</strong><span>Increase</span></div>
                    </li>
                    <li className="icon col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="img"><img src={window.location.origin + "/assets/images/singleIcons/singleIcon12.svg"} alt="Con.rate" title="Con.rate"/></div>
                        <div className="text green"><strong>%80</strong><span>Increase</span></div>
                    </li>
                    <li className="icon col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="img"><img src={window.location.origin + "/assets/images/singleIcons/singleIcon13.svg"} alt="CPA" title="CPA"/></div>
                        <div className="text red"><strong>%20</strong><span>Decrease</span></div>
                    </li>
                    <li className="icon col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="img"><img src={window.location.origin + "/assets/images/singleIcons/singleIcon14.svg"} alt="Cost" title="Cost"/></div>
                        <div className="text red"><strong>%30</strong><span>Decrease</span></div>
                    </li>
                    <li className="icon col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="img"><img src={window.location.origin + "/assets/images/singleIcons/singleIcon15.svg"} alt="Con.rate" title="Con.rate"/></div>
                        <div className="text red"><strong>%80</strong><span>Decrease</span></div>
                    </li>
                </ul>
            </div>
        </section>
        <section id="SingleAbout">
            <div className="content">
                <div className="text">
                    <h2>About Zarif bar</h2>
                    <p>During the process of creating an audit for your Google Ads campaign, our team follows a meticulous and comprehensive approach to ensure no stone is left unturned. Here's a breakdown of what we do During the process of creating an audit for your Google Ads campaign, our team follows a meticulous and comprehensive approach to ensure no stone is left unturned. Here's a breakdown of what we do During the process of creating an audit for your Google Ads campaign, our team follows a meticulous and comprehensive approach to ensure no stone is left unturned. Here's a breakdown of what we do:</p>
                </div>
                <div className="img">
                    <img src={window.location.origin + "/assets/images/zarifbarAbout.jpg"} alt="zarifbar-cover" title="zarifbar-cover"/>
                </div>
            </div>
        </section>
        <section id="SingleRoad">
            <div className="container">
                <ul className="row items">
                    <li className="item">
                        <div className="text">
                            <h3>Our challenge</h3>
                            <p>During the process of creating an audit for your Google Ads campaign, our team follows a meticulous and comprehensive approach to ensure no stone is left unturned. Here's a breakdown of what we do During the process of creating an audit for your Google Ads campaign</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="text">
                            <h3>Strategy</h3>
                            <p>During the process of creating an audit for your Google Ads campaign, our team follows a meticulous and comprehensive approach to ensure no stone is left unturned. Here's a breakdown of what we do During the process of creating an audit for your Google Ads campaign</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="text">
                            <h3>What we did</h3>
                            <p>During the process of creating an audit for your Google Ads campaign, our team follows a meticulous and comprehensive approach to ensure no stone is left unturned. Here's a breakdown of what we do During the process of creating an audit for your Google Ads campaign</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <section id="CaseSpecialist">
            <div className="container">
                <div className="box">
                    <div className="profile">
                        <img src={window.location.origin + "/assets/images/Armin.png"} alt="profile" title="profile"/>
                        <div className="socials">
                            <div className="icons">
                                <a href="#" className="linkedin" target="_blank"><img src={window.location.origin + "/assets/images/LinkdinIcon.svg"} alt="linkedin" title="linkedin"/></a>
                                <a href="#" className="whatsapp" target="_blank"><img src={window.location.origin + "/assets/images/whatsappIcon.svg"} alt="whatsapp" title="whatsapp"/></a>
                                <a href="#" className="phone" target="_blank"><img src={window.location.origin + "/assets/images/phoneIcon.svg"} alt="phone" title="phone"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <h3>Armin Manouchehri</h3>
                        <span>Zarif bar specialist </span>
                        <div className="info">
                            <span>Specialist at: </span>
                            <div className="icon">
                                <ul className="items">
                                    <li className="item"><img src={window.location.origin + "/assets/images/searchIcon.svg"} alt="search" title="search"/><span>Search Campaign</span></li>
                                    <li className="item"><img src={window.location.origin + "/assets/images/displayIcon.svg"} alt="Display" title="Display"/><span>Display Campaign</span></li>
                                    <li className="item"><img src={window.location.origin + "/assets/images/playIcon.svg"} alt="Youtube" title="Youtube"/><span>Youtube Campaign</span></li>
                                </ul>
                            </div>
                            <p>During the process of creating an audit for your Google Ads campaign, our team follows a meticulous and comprehensive approach to ensure no stone is left unturned. Here's a breakdown of what we do During the process of creating an audit for your Google Ads campaign</p>
                            <span>Google ads certifications:</span>
                            <ul>
                                <li><a href="#" target="_blank"><span>Search </span><img src={window.location.origin + "/assets/images/linkArrowIcon.svg"}/></a></li>
                                <li><a href="#" target="_blank"><span>Display </span><img src={window.location.origin + "/assets/images/linkArrowIcon.svg"}/></a></li>
                                <li><a href="#" target="_blank"><span>Youtube </span><img src={window.location.origin + "/assets/images/linkArrowIcon.svg"}/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="FinalIntro">
            <div className="container">
                <div className="content">
                    <div className="img"><Link to="/aboutUs"><img src={window.location.origin + "/assets/images/ceoProfile.png"} alt="Ali-Hajizadeh(CEO-on-Admoon)" title="Ali-Hajizadeh(CEO-on-Admoon)"/></Link><div className="mobile"><strong>Ali Hajizadeh</strong><span>CEO on Admoon</span></div></div>
                    <div className="text"><div className="desktop"><strong>Ali Hajizadeh</strong><span>CEO on Admoon</span></div><p>Together, we'll align your ads with your business objectives, ensuring every penny spent brings profitable returns. No more guesswork; I'll let data-driven decisions and my expert guidance light the way to success. Together, we'll align your ads with your business objectives, ensuring every penny spent brings profitable returns.</p></div>
                </div>
            </div>
        </section>
    </main>
    </div>

    <Footer FPS={props.title}></Footer>
    </HelmetProvider>
    );
  };
  
  export default Single;