import { useEffect } from 'react';
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Footer from "./Footer";
import $ from 'jquery';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const CaseStudy = (props) => {

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

    <div className="wrapper CaseStudy-page">
        <div className="container">
            <header id="WhiteMenu">
                <Layout></Layout>
            </header>
            <main id="navbar_padding"> 
                <section id="CaseStudies"  className="Provens">
                    <div className="title">
                        <h1>We have proven success</h1>
                        <p>Admoon has helped data-driven retailers unlock the full potential of Google Camapigns</p>
                    </div>
                    <div className="box customers">
                        <ul className="row">
                            <li className="col-xl-8 col-lg-8 col-md-8 col-sm-24 col-24">
                                <Link to='/single'>
                                    <div className="img">
                                        <img src="assets/images/C1Home.png" alt="Zarifbar-img" title="Zarifbar-img"/>
                                        <img src="assets/images/C1Logo.svg" alt="Zarifbar-logo" title="Zarifbar-logo"/>
                                    </div>
                                    <div className="content">
                                        <div className="text">
                                            <h3>Zarif Bar</h3>
                                            <div className="icon-more-info"><img src="assets/images/searchIcon.svg" alt="search-icon" title="search-icon"/><span>Search campaign</span></div>
                                            <p>Tour Gasht achieve a 250%+ boost in Return on Ad Spend</p>
                                        </div>
                                        <div className="item">
                                            <ul>
                                                <li>
                                                    <span><strong>250%</strong><br/>Increase</span>
                                                    <b>ROAS</b>
                                                </li>
                                                <li>
                                                    <span><strong>20%</strong><br/>Increase</span>
                                                    <b>CTR</b>
                                                </li>
                                                <li className="red">
                                                    <span><strong>20%</strong><br/>Decrease</span>
                                                    <b>CPA</b>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className="col-xl-8 col-lg-8 col-md-8 col-sm-24 col-24">
                                <Link to='/single'>
                                    <div className="img">
                                        <img src="assets/images/C2Home.png" alt="spa-img" title="spa-img"/>
                                        <img src="assets/images/C2Logo.svg" alt="spa-logo" title="spa-logo"/>
                                    </div>
                                    <div className="content">
                                        <div className="text">
                                            <h3>Spa Iranian</h3>
                                            <div className="icon-more-info"><img src="assets/images/searchIcon.svg" alt="search-icon" title="search-icon"/><span>Search campaign</span></div>
                                            <p>Spa Iranina Save 40% on costs</p>
                                        </div>
                                        <div className="item">
                                            <ul>
                                                <li>
                                                    <span><strong>45%</strong><br/>Increase</span>
                                                    <b>ROAS</b>
                                                </li>
                                                <li>
                                                    <span><strong>30%</strong><br/>Increase</span>
                                                    <b>RIO</b>
                                                </li>
                                                <li className="red">
                                                    <span><strong>40%</strong><br/>Decrease</span>
                                                    <b>Cost</b>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className="col-xl-8 col-lg-8 col-md-8 col-sm-24 col-24">
                                <Link to='single'>
                                    <div className="img">
                                        <img src="assets/images/C3Home.png" alt="TourGasht-img" title="TourGasht-img"/>
                                        <img src="assets/images/C3Logo.svg" alt="TourGasht-logo" title="TourGasht-logo"/>
                                    </div>
                                    <div className="content">
                                        <div className="text">
                                            <h3>Tour Gasht</h3>
                                            <div className="icon-more-info"><img src="assets/images/searchIcon.svg" alt="search-icon" title="search-icon"/><span>Search campaign</span></div>
                                            <p>Tour Gasht achieve a 250%+ boost in Return on Ad Spend</p>
                                        </div>
                                        <div className="item">
                                            <ul>
                                                <li>
                                                    <span><strong>55%</strong><br/>Increase</span>
                                                    <b>RIO</b>
                                                </li>
                                                <li>
                                                    <span><strong>25%</strong><br/>Increase</span>
                                                    <b>CTR</b>
                                                </li>
                                                <li className="red">
                                                    <span><strong>35%</strong><br/>Decrease</span>
                                                    <b>CPA</b>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </li>
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
  
  export default CaseStudy;