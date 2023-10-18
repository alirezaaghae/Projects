import { useEffect } from 'react';
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Footer from "./Footer";
import CM_Slider from "../components/CM_Slider";
import $ from 'jquery';

import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = (props) => {
    useEffect(() => {
        $('html').addClass(props.title);
        $('body').attr('id', props.page);
        document.title = props.title;
        return () => {
          $('html').removeClass(props.title);
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
        <div className="wrapper index-page" id="main-page">
            <header>
                <div className="container">
                    <Layout></Layout>
                    <div className="content" id="navbar_padding">
                        <div className="text">
                            <h1>Admoon help you<br/><span>With Google ads</span></h1>
                            <a href="#ProvideForYou">What we do for you</a>
                        </div>
                        <div className="img">
                            
                        </div>
                    </div>
                </div>
                <div className="bottomItems">
                    <ul className="desktop">
                        <li><strong>$500k</strong><span>Ads Budget Saving</span></li>
                        <li><strong>$5M</strong><span>in Ads Budget Managed Last Year</span></li>
                        <li><strong>50</strong><span>Accounts Tuned Up weekly</span></li>
                        <li><strong>%95</strong><span>Customer Retention</span></li>
                    </ul>
                    <ul className="mobile">
                        <li>
                            <div className="items">
                                <div className="item showw"><strong>$500k</strong><span>Ads Budget Saving</span></div>
                                <div className="item"><strong>$5M</strong><span>in Ads Budget Managed Last Year</span></div>
                            </div>
                        </li>
                        <li>
                            <div className="items">
                                <div className="item showw"><strong>50</strong><span>Accounts Tuned Up weekly</span></div>
                                <div className="item"><strong>%95</strong><span>Customer Retention</span></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>
            <main className="site-main main-index">
                <section id="WhoAreWe">
                    <div className="container">
                        <h2>Who are we?</h2>
                        <div className="content">
                            <div className="text">
                                <p>Feeling frustrated with your Google Ads campaign? Our expert team can help with our Audit service. We'll analyze every aspect of your campaign to uncover hidden potential, and provide you with a comprehensive report. </p>
                                <ul>
                                    <li><strong>10M</strong><span>Leads Generated in the Last Year</span></li>
                                    <li><strong>50</strong><span>Accounts Tuned Up Weekly</span></li>
                                    <li><strong>100</strong><span>Accounts Reactivated Monthly</span></li>
                                    <li><strong>10</strong><span>Account Managers & 5 Campaign Strategists</span></li>
                                </ul>
                                <Link to="/aboutUs">Discover more</Link>
                            </div>
                            <div className="img">
                                <img src="assets/images/WRW-Image.png" alt="Who-are-we-image" title="Who-are-we-image"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="ProvenSuccess" className="Provens">
                    <div className="container">
                        <h2>We have proven success</h2>
                        <div className="box customers">
                            <ul className="row">
                                <li className="col-xl-8 col-lg-8 col-md-8 col-sm-24 col-24">
                                    <Link to="caseStudy/single">
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
                                    <Link to="caseStudy/single">
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
                                    <Link to="caseStudy/single">
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
                        <Link to="/caseStudy">Explore more <img src="assets/images/rightArrowIcon.svg"/><img src="assets/images/rightArrowIcon2.svg"/></Link>
                    </div>
                </section>
                <section id="ProvideForYou">
                    <div className="container">
                        <h2>What we provide for you</h2>
                        <div className="boxs">
                            <ul className="row boxs">
                                <li className=" col-xl-24 col-lg-24 col-md-24 col-sm-24 col-24">
                                    <div className="box AdsManagement">
                                    <div className="content">
                                        <h3>Ads Management</h3>
                                        <p>With our Ads Management service, expect optimized campaigns, targeted traffic, and exceptional results. Relax as we handle setup, monitoring, and clear reports.</p>
                                        <b>What you get?</b>
                                        <ul>
                                            <li>Dedicated Expert Team</li>
                                            <li>Proven Success</li>
                                            <li>Tailored Approach</li>
                                            <li>Years of Experience</li>
                                        </ul>
                                    </div>
                                    <div className="vl"></div>
                                    <div className="prices">
                                        <ul>
                                            <li>
                                                <div className="title">
                                                    <span>Monthly budget:</span><span>Wage:</span>
                                                </div>
                                                <div className="value">
                                                    <strong>$1,000-$5,000</strong><strong>%15</strong>
                                                </div>
                                            </li><hr style={{borderTop: '1px solid #7F92FA'}}/>
                                            <li>
                                                <div className="title">
                                                    <span>Monthly budget:</span><span>Wage:</span>
                                                </div>
                                                <div className="value">
                                                    <strong>$5,001-$15,000</strong><strong><del>%12</del> %7</strong>
                                                </div>
                                            </li><hr style={{borderTop: '1px solid #7F92FA'}}/>
                                            <li>
                                                <div className="title">
                                                    <span>Monthly budget:</span><span>Wage:</span>
                                                </div>
                                                <div className="value">
                                                    <strong>$15,001-∞</strong><strong><del>%9</del> %5</strong>
                                                </div>
                                            </li>
                                        </ul>
                                        <Link className="moreButton" to="/adsManagement">Check Service</Link>
                                    </div>
                                </div>
                                </li>
                                <li className=" col-xl-8 col-lg-8 col-md-8 col-sm-24 col-24">
                                    <div className="box Audit">
                                    <div className="content">
                                        <h3>Audit</h3>
                                        <p>We'll analyze every aspect of your campaign to uncover hidden potential, and provide you with a comprehensive report.</p>
                                        <b>What you get?</b>
                                        <ul>
                                            <li>Dedicated Experts</li>
                                            <li>Tailored Insights</li>
                                            <li>Unlock Hidden Potential</li>
                                            <li>Genuine Partnership</li>
                                        </ul>
                                        <div className="pricing">
                                            <span>Pricing</span><br/>
                                            <strong><del>$200</del> $50</strong>
                                        </div>
                                        <Link className="moreButton" to="/audit">Check Service</Link>
                                    </div>
                                </div>
                                </li>
                                <li className=" col-xl-8 col-lg-8 col-md-8 col-sm-24 col-24">
                                    <div className="box TuneUp">
                                    <div className="content">
                                        <h3>Tune Up</h3>
                                        <p>Our Tune Up service offers comprehensive solutions for professional optimization and expert problem-solving.</p>
                                        <b>What you get?</b>
                                        <ul>
                                            <li>Rapid Optimization</li>
                                            <li>Comprehensive Evaluation</li>
                                            <li>Expertise and Experience</li>
                                            <li>Customer-Centric Approach</li>
                                        </ul>
                                        <div className="pricing">
                                            <span>Pricing</span><br/>
                                            <strong>$1,500</strong>
                                        </div>
                                        <Link className="moreButton" to="/tuneUp">Check Service</Link>
                                    </div>
                                </div>
                                </li>
                                <li className=" col-xl-8 col-lg-8 col-md-8 col-sm-24 col-24">
                                    <div className="box AccountSuspension">
                                    <div className="content">
                                        <h3>Account Suspension</h3>
                                        <p>Our Tune Up service offers comprehensive solutions for professional optimization and expert problem-solving.</p>
                                        <b>What you get?</b>
                                        <ul>
                                            <li>Rapid Optimization</li>
                                            <li>Comprehensive Evaluation</li>
                                            <li>Expertise and Experience</li>
                                            <li>Customer-Centric Approach</li>
                                        </ul>
                                        <div className="pricing">
                                            <span>Pricing</span><br/>
                                            <strong>$1,500</strong>
                                        </div>
                                        <Link className="moreButton" to="/accountSuspension">Check Service</Link>
                                    </div>
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="OurCustomers">
                    <div className="container">
                        <h2>What our customers say about Us</h2>
                        <div className="slider">
                            <CM_Slider/>
                        </div>
                    </div>
                </section>
                {/* <section id="LearnAboutGAds">
                    <div className="container">
                        <h2>Learn about Google ads campaign</h2>
                        <div className="items">
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                        </div>
                    </div>
                </section> */}
            </main>
        </div>
        <Footer 
            FPS={props.title} 
            formData={(data) => props.mainFormData(data)}
        />
      </HelmetProvider>
   );
  };
  
  export default Home;