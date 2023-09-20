import { useEffect } from 'react';
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Footer from "./Footer";
import $ from 'jquery';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SFM_Form from '../components/SFM_Form';
import Intro from '../components/Intro';

const Ads = (props) => {
    
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

    <div className="wrapper AdsManage-page">
        <header id="ServicesHeader">
            <div className="container">
                <Layout></Layout>
                <div className="content" id="navbar_padding">
                    <div className="text">
                        <h1>Ads Management</h1>
                        <span>Elevate Your Ads Management</span>
                        <p>Are You Struggling to Manage Your Campaign? Leave it to us! With our Ads Management service, expect optimized campaigns, targeted traffic, and exceptional results. Relax as we handle setup, monitoring, and clear reports. Trust our dedicated team to drive success while you focus on what you do best!</p>
                        <div className="price">
                            <a href="#Steps">Request now</a>
                        </div>
                    </div>
                    <div className="img">
                       
                    </div>
                </div>
            </div> 
        </header>
        <main id="ServicesMain">
            <Intro>
                <h2>Our Expert Team Delivers Winning Results!</h2>
                <p>Our agency offers a team of experienced professionals with extensive digital advertising experience to help you dominate the competition and achieve exceptional results. We analyze your competition, develop tailored strategies, and provide tools, insights, and expertise to stand out in the crowd. With our expert team by your side, you can unleash your full potential and position your business for success.</p>
            </Intro>
            <section id="Steps">
                <div className="container">
                    <h2>What happens in our management service!</h2>
                    <div className="content">
                        <ul>
                            <li>
                                <div className="title"><strong className="desktop">Pre-Run Research</strong></div>    
                                <div className="number"><b>1</b></div>
                                <div className="text"><div className="paragraph"><strong className="mobile">Pre-Run Research</strong><p>We analyze your Google Ads account structure, settings, and targeting to optimize campaign reach and alignment with business goals.</p></div></div>
                            </li>
                            <li>
                                <div className="title"><strong className="desktop">Campaign Setup</strong></div>    
                                <div className="number"><b>2</b></div>
                                <div className="text"><div className="paragraph"><strong className="mobile">Campaign Setup</strong><p>Metrics like CTR, conversion rates, CPA, and ROAS are assessed to identify strengths and weaknesses, guiding improvements.</p></div></div>
                            </li>
                            <li>
                                <div className="title"><strong className="desktop">Ongoing Management and Optimization</strong></div>    
                                <div className="number"><b>3</b></div>
                                <div className="text"><div className="paragraph"><strong className="mobile">Ongoing Management and Optimization</strong><p>We conduct keyword analysis to refine targeting and reduce ad spend, while improving ad copy and extensions for better click-through and conversion rates.</p></div></div>
                            </li>
                            <li>
                                <div className="title"><strong className="desktop">Your Strategic Partner for Boosted Success</strong></div>    
                                <div className="number"><b>4</b></div>
                                <div className="text"><div className="paragraph"><strong className="mobile">Your Strategic Partner for Boosted Success</strong><p>Maximize ROI with reviewed bidding strategies, bid adjustments, and automated options, based on campaign objectives and data analysis.</p></div></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="PricingForm">
                <div className="container">
                    <h2>Pricing</h2>
                    <div className="boxs">
                        <div className="circleInput">
                            <div className="circle-range">
                                <input id="priceInfo" maxLength="7" pattern="[0-9]{32}" className="priceInfo" type="text" value="" placeholder="Enter your budget" onKeyUp='addListAfterKeypress()'/>
                                <span>Monthly Budget</span>
                                <div className="slider"></div>
                            </div>
                        </div>
                        <div className="SelectPrices">
                            <div className="selectItems">
                                <ul>
                                    <li>
                                        <div className="button" item="1" >
                                            <span>$1,000-$4,900</span>
                                            <b>Wage: <strong>%15</strong></b>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="button" item="2">
                                            <span>$5,000-$14,900</span>
                                            <b>Wage: <del>%12</del> <strong>%7</strong></b>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="button" item="3">
                                            <span>$15,000-∞</span>
                                            <b>Wage: <del>%9</del> <strong>%5</strong></b>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="wageInfo">
                                <ul>
                                    <li><span>Wage fee:</span><strong className="WageFee">$0</strong></li>
                                    <li><span>Setup fee:</span><strong className="SetupFee">$0</strong></li>
                                    <li className="BudgetFeeLi"><span>Budget fee:</span><strong className="BudgetFee">$0</strong></li>
                                </ul>
                                <hr/>
                                <p><span>Total fee:</span><strong className="TotalFee">$0</strong></p>
                                <hr/>
                                <div className="checkBox"><input type="checkbox" name="payCheckbox" id="payCheckbox"/><p>I need to pay my account fee by your company </p></div> 
                            </div>
                            <button className="openFormButton">Start Now</button>
                        </div>
                        <div className="formPriceSubmiting">
                            <div className="top"><span>Let’s we learn about you</span><button>X</button></div>
                            <form className="form customForm">
                                <div className="WebsiteAddress" onClick={FocusInput}>
                                    <label>Website URL
                                    <input type="text" name="website"/></label>
                                    <div className="bottom-line"><div className="fill-line"></div></div>
                                </div>
                                <div className="FullName" onClick={FocusInput}>
                                    <label>Full Name
                                        <input type="text" name="name" min="2" max="20" required/>
                                    </label>
                                    <div className="bottom-line"><div className="fill-line"></div></div>
                                </div>
                                <div className="MailAddress" onClick={FocusInput}>
                                    <label>Email
                                        <input type="email" name="email"/>
                                    </label>
                                    <div className="bottom-line"><div className="fill-line"></div></div>
                                </div>
                                <div className="PhoneNumber" onClick={FocusInput}>
                                    <label>Phone Number
                                        <input type="tel" name="phone" maxLength="15" required/>
                                    </label>
                                    <div className="bottom-line"><div className="fill-line"></div></div>
                                </div>
                                <div className="button">
                                    <button className="send_button">Start Now</button>
                                </div>
                            </form>
                            <div className="successQS">
                                <p>Thank you for ordering us! We will call you back</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="WhyChooseOurService">
                <div className="container">
                    <h2>Why Choose Our Audit Service?</h2>
                    <p>Choose our agency to unlock the power of expertise, experience, and a proven history of success. We're here to help you achieve remarkable results, drive your business forward, and leave a lasting impact in the digital advertising realm. Let's embark on a journey together that will transform your campaigns into unparalleled successes!</p>
                    <div className="items">
                        <ul className="row">
                            <li className="col-xl-8 col-lg-8 col-md-12 col-sm-24 col-24">
                                <div className="box">
                                    <div className="img"><img src="assets/images/adsManageService1Icon.svg" alt="adsManage-Service-Icon" title="adsManage-Service-icon"/></div>
                                    <div className="text">
                                        <h3>Dedicated Expert Team</h3>
                                        <p>Passionate partners guiding your success.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="col-xl-8 col-lg-8 col-md-12 col-sm-24 col-24">
                                <div className="box">
                                    <div className="img"><img src="assets/images/adsManageService2Icon.svg" alt="adsManage-Service-Icon" title="adsManage-Service-icon"/></div>
                                    <div className="text">
                                        <h3>Proven Success</h3>
                                        <p>Tangible outcomes from winning strategies.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="col-xl-8 col-lg-8 col-md-12 col-sm-24 col-24">
                                <div className="box">
                                    <div className="img"><img src="assets/images/adsManageService3Icon.svg" alt="adsManage-Service-Icon" title="adsManage-Service-icon"/></div>
                                    <div className="text">
                                        <h3>Tailored Approach</h3>
                                        <p>Customized strategies for your vision.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="col-xl-8 col-lg-8 col-md-12 col-sm-24 col-24">
                                <div className="box">
                                    <div className="img"><img src="assets/images/adsManageService4Icon.svg" alt="adsManage-Service-Icon" title="adsManage-Service-icon"/></div>
                                    <div className="text">
                                        <h3>Years of Experience</h3>
                                        <p>Proven results across diverse industries.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="col-xl-8 col-lg-8 col-md-12 col-sm-24 col-24">
                                <div className="box">
                                    <div className="img"><img src="assets/images/adsManageService5Icon.svg" alt="adsManage-Service-Icon" title="adsManage-Service-icon"/></div>
                                    <div className="text">
                                        <h3>Industry Knowledge</h3>
                                        <p>Staying ahead with cutting-edge insights.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="col-xl-8 col-lg-8 col-md-12 col-sm-24 col-24">
                                <div className="box">
                                    <div className="img"><img src="assets/images/adsManageService6Icon.svg" alt="adsManage-Service-Icon" title="adsManage-Service-icon"/></div>
                                    <div className="text">
                                        <h3>Exceptional Service</h3>
                                        <p>Exceeding expectations with seamless support.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <section id="statistics"></section> */}
            <section id="Form2" className="sfm">
                <SFM_Form 
                    spanText={[<span>Do you want these numbers to be yours?</span>]}
                    buttonText="Start Now"
                    formData={(data) => props.mainFormData(data)}
                />
            </section>
            <section id="Questions">
                <div className="container">
                    <h2>Frequently Asked Questions</h2>
                        <div className="items">
                          <div className="panel-group" id="accordion">
                            <div className="panel panel-default">
                            <div>
                                <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1" className="collapsed" aria-expanded="false"><div><span>Why should I consider outsourcing my Google Ads management?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div></a>
                                </h4>
                            </div>
                            <div id="collapse1" className="panel-collapse collapse" aria-expanded="false" style={{height: "0px"}}>
                                <div className="panel-body"><p>Outsourcing your Google Ads management allows you to tap into the expertise of professionals who specialize in digital advertising. It saves you time and resources while ensuring your campaigns are strategically managed and optimized for maximum results.</p></div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div>
                                <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse2" className="collapsed" aria-expanded="false"><div><span>How involved will I be in the Ads Management process?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div> </a>
                                </h4>
                            </div>
                            <div id="collapse2" className="panel-collapse collapse" aria-expanded="false" style={{height: "0px"}}>
                                <div className="panel-body"><p>We believe in collaboration and transparency. While we take care of the day-to-day management, we value your input and insights. We work closely with you to understand your business goals, target audience, and preferences to ensure our strategies align with your vision.</p></div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div>
                                <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse3" className="collapsed" aria-expanded="false"><div><span>How do you determine the budget for my Google Ads campaigns?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div></a>
                                </h4>
                            </div>
                            <div id="collapse3" className="panel-collapse collapse" aria-expanded="false">
                                <div className="panel-body"><p>Budget allocation is based on several factors, including your business goals, competition, target audience, and available resources. We'll analyze these factors and work closely with you to determine a budget that maximizes your return on investment (ROI).</p></div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div>
                                <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse4" className="collapsed" aria-expanded="false"><div><span>Can you optimize my existing Google Ads campaigns?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div></a>
                                </h4>
                            </div>
                            <div id="collapse4" className="panel-collapse collapse" aria-expanded="false">
                                <div className="panel-body"><p>Absolutely! We specialize in optimizing existing campaigns. Our team will conduct a comprehensive audit, identify areas for improvement, and implement strategic changes to enhance campaign performance and drive better results.</p></div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div>
                                <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse5" className="collapsed" aria-expanded="false"><div><span>How long does it take to see results from Ads Management?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div></a>
                                </h4>
                            </div>
                            <div id="collapse5" className="panel-collapse collapse" aria-expanded="false" style={{height: "0px"}}>
                                <div className="panel-body"><p>The timeline for results can vary depending on several factors, including the competitiveness of your industry, campaign goals, and targeting strategies. Typically, you can start seeing noticeable improvements within the first few weeks, with continued optimization over time.</p></div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div>
                                <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse6" className="collapsed" aria-expanded="false"><div><span>How often will I receive reports on my campaign's performance?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div> </a>
                                </h4>
                            </div>
                            <div id="collapse6" className="panel-collapse collapse" aria-expanded="false" style={{height: "0px"}}>
                                <div className="panel-body"><p>We provide regular and comprehensive reports that give you a clear overview of your campaign's performance. The frequency of reports can be customized based on your needs, but we generally provide monthly reports along with additional updates as needed.</p></div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div>
                                <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse7" className="collapsed" aria-expanded="false"><div><span>Can I make changes to my campaigns during the management process?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div></a>
                                </h4>
                            </div>
                            <div id="collapse7" className="panel-collapse collapse" aria-expanded="false">
                                <div className="panel-body"><p>Of course! We encourage open communication and collaboration. If you have specific requests, updates, or changes, simply reach out to your dedicated expert, and they will work with you to implement the necessary adjustments to align with your evolving business needs.</p></div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div>
                                <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse8" className="collapsed" aria-expanded="false"><div><span>What happens if I decide to end the Ads Management service?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div></a>
                                </h4>
                            </div>
                            <div id="collapse8" className="panel-collapse collapse" aria-expanded="false">
                                <div className="panel-body"><p>We understand that circumstances may change, and you may choose to end the Ads Management service. In such cases, we will work with you to ensure a smooth transition. We'll provide you with the necessary information, access, and guidance to take over the management of your campaigns seamlessly.</p></div>
                            </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
            <section id="FinalIntro">
                <div className="container">
                    <div className="content">
                        <div className="img"><Link to="/aboutUs"><img src="assets/images/ceoProfile.png" alt="Ali-Hajizadeh(CEO-on-Admoon)" title="Ali-Hajizadeh(CEO-on-Admoon)"/></Link><div className="mobile"><strong>Ali Hajizadeh</strong><span>CEO on Admoon</span></div></div>
                        <div className="text"><div className="desktop"><strong>Ali Hajizadeh</strong><span>CEO on Admoon</span></div><p>Together, we'll align your ads with your business objectives, ensuring every penny spent brings profitable returns. No more guesswork; I'll let data-driven decisions and my expert guidance light the way to success. Together, we'll align your ads with your business objectives, ensuring every penny spent brings profitable returns.</p></div>
                    </div>
                </div>
            </section>
        </main>
    </div>

    <Footer 
        FPS={props.title} 
        formData={(data) => props.mainFormData(data)}
    />
    </HelmetProvider>
    );
  };
  
  export default Ads;