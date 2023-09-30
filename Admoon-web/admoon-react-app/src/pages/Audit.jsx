import { useEffect } from 'react';
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Footer from "./Footer";
import $ from 'jquery';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SFM_Form from '../components/SFM_Form';
import Intro from '../components/Intro';
import Steps from '../components/Steps';
import Collaborating from '../components/Collaborating';

const Audit = (props) => {

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

    <div className="wrapper Audit-page">
        <header id="ServicesHeader">
            <div className="container">
                <Layout></Layout>
                <div className="content" id="navbar_padding">
                    <div className="text">
                        <h1>Audit</h1>
                        <span>Introducing the Ultimate Campaign Audit</span>
                        <p>Feeling frustrated with your Google Ads campaign? Our expert team can help with our Audit service. We'll analyze every aspect of your campaign to uncover hidden potential, and provide you with a comprehensive report. Unlock the full potential of your campaign and start seeing the results you've been dreaming of. Let us help you take it to the next level with our Audit service.</p>
                        <div className="price">
                            <span>Pricing</span>
                            <strong><del>$200</del> - $50</strong>
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
                <h2>The Audit steps we take for you</h2>
                <p>During the process of creating an audit for your Google Ads campaign, our team follows a meticulous and comprehensive approach to ensure no stone is left unturned. Here's a breakdown of what we do:</p>
            </Intro>
            <Steps name={props.page}>
                Step into Success with audit
            </Steps>
            <section id="Form" className="sfm">
                <SFM_Form 
                    spanText={[<span>Let us make your account more valuable</span>,<b>Price: <strong><del>$200</del> - $50</strong></b>]}
                    buttonText="Discover more"
                    formData={(data) => props.mainFormData(data)}
                />
            </section>
            <Collaborating name={props.page}/>

            <section id="WhyChooseOurService">
                <div className="container">
                    <h2>Why Choose Our Audit Service?</h2>
                    <div className="items">
                        <ul className="row">
                            <li className="col-xl-6 col-lg-6 col-md-12 col-sm-24 col-24">
                                <div className="box">
                                    <div className="img"><img src="assets/images/AuditService1Icon.svg" alt="Audit-Service-Icon" title="Audit-Service-icon"/></div>
                                    <div className="text">
                                        <h3>Dedicated Experts</h3>
                                        <p>Our team comprises certified Google specialists with more than 8 years of experience and a proven track record.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="col-xl-6 col-lg-6 col-md-12 col-sm-24 col-24">
                                <div className="box">
                                    <div className="img"><img src="assets/images/AuditService2Icon.svg" alt="Audit-Service-Icon" title="Audit-Service-icon"/></div>
                                    <div className="text">
                                        <h3>Tailored Insights</h3>
                                        <p>We go beyond generic analysis, delving into the nuances of your industry to provide customized recommendations aligned with your goals.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="col-xl-6 col-lg-6 col-md-12 col-sm-24 col-24">
                                <div className="box">
                                    <div className="img"><img src="assets/images/AuditService3Icon.svg" alt="Audit-Service-Icon" title="Audit-Service-icon"/></div>
                                    <div className="text">
                                        <h3>Unlock Hidden Potential</h3>
                                        <p>Our experts have a keen eye for optimization and can uncover untapped opportunities within your campaign.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="col-xl-6 col-lg-6 col-md-12 col-sm-24 col-24">
                                <div className="box">
                                    <div className="img"><img src="assets/images/AuditService4Icon.svg" alt="Audit-Service-Icon" title="Audit-Service-icon"/></div>
                                    <div className="text">
                                        <h3>Genuine Partnership</h3>
                                        <p>We are committed to your success and work closely with you to develop strategies that drive results.</p>
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
                    spanText={[<span>Let us make your account more valuable</span>,<b>Price: <strong><del>$200</del> - $50</strong></b>]}
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
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1" className="collapsed" aria-expanded="false"><div><span>What is an audit service for Google Ads?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div></a>
                                </h4>
                            </div>
                            <div id="collapse1" className="panel-collapse collapse" aria-expanded="false" style={{height: '0px'}}>
                                <div className="panel-body"><p>Our audit service involves a comprehensive analysis of your existing Google Ads campaign. We evaluate various aspects, including account structure, settings, performance metrics, keywords, ad copy, bidding strategies, and landing pages. The goal is to identify strengths, weaknesses, and opportunities for optimization.</p></div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div>
                                <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse2" className="collapsed" aria-expanded="false"><div><span>Why should I consider getting an audit for my Google Ads campaign?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div> </a>
                                </h4>
                            </div>
                            <div id="collapse2" className="panel-collapse collapse" aria-expanded="false" style={{height: '0px'}}>
                                <div className="panel-body"><p>An audit provides valuable insights into the performance and effectiveness of your campaign. It helps identify areas for improvement and uncovers hidden opportunities for better results. By understanding where your campaign can be optimized, you can make informed decisions to enhance its performance and maximize your return on investment (ROI).
                                </p></div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div>
                                <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse3" className="collapsed" aria-expanded="false"><div><span>How long does the audit process typically take?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div></a>
                                </h4>
                            </div>
                            <div id="collapse3" className="panel-collapse collapse" aria-expanded="false">
                                <div className="panel-body"><p>The duration of the audit process depends on the complexity and scale of your campaign. Generally, it can take anywhere from a few days to a couple of weeks. We prioritize thoroughness and attention to detail to ensure we provide you with accurate and actionable recommendations.</p></div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div>
                                <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse4" className="collapsed" aria-expanded="false"><div><span>What can I expect from the audit report?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div></a>
                                </h4>
                            </div>
                            <div id="collapse4" className="panel-collapse collapse" aria-expanded="false">
                                <div className="panel-body"><p>The audit report is a detailed document that summarizes our findings and recommendations. It includes insights on campaign performance, areas for improvement, and specific action steps to optimize your campaign. The report may also include visual representations of data, charts, and graphs for better understanding.
                                </p></div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div>
                                <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse5" className="collapsed" aria-expanded="false"><div><span>How can I implement the recommendations from the audit report?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div></a>
                                </h4>
                            </div>
                            <div id="collapse5" className="panel-collapse collapse" aria-expanded="false" style={{height: '0px'}}>
                                <div className="panel-body"><p>Implementing the recommendations depends on your resources and capabilities. If you prefer a hands-on approach, you can utilize your in-house team or work with our agency's experts for assistance. We also offer additional services, such as our Tune Up service, where we can help execute the recommended optimizations and fine-tune your campaign for better performance.
                                </p></div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div>
                                <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse6" className="collapsed" aria-expanded="false"><div><span>How often should I get an audit for my Google Ads campaign?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div> </a>
                                </h4>
                            </div>
                            <div id="collapse6" className="panel-collapse collapse" aria-expanded="false" style={{height: '0px'}}>
                                <div className="panel-body"><p> It is beneficial to conduct periodic audits to ensure your campaign remains optimized and aligned with your goals. The frequency depends on factors such as campaign complexity, industry changes, and business objectives. As a general guideline, an annual or biannual audit can help keep your campaign on track and maximize its potential.
                                </p></div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div>
                                <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse7" className="collapsed" aria-expanded="false"><div><span>Can I get an audit if I'm new to Google Ads or don't have an existing campaign?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div></a>
                                </h4>
                            </div>
                            <div id="collapse7" className="panel-collapse collapse" aria-expanded="false">
                                <div className="panel-body"><p>Yes, absolutely! An audit can be valuable for both existing campaigns and new advertisers. For new advertisers, it can provide insights and recommendations for setting up an effective campaign from the start. For existing campaigns, it helps identify areas for improvement and optimization.
                                </p></div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div>
                                <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse8" className="collapsed" aria-expanded="false"><div><span>Is my data and campaign information secure during the audit process?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div></a>
                                </h4>
                            </div>
                            <div id="collapse8" className="panel-collapse collapse" aria-expanded="false">
                                <div className="panel-body"><p>Yes, we take data security and confidentiality seriously. We follow strict protocols to ensure the privacy and security of your data throughout the audit process. Your campaign information and sensitive data will be handled with the utmost care and stored securely.</p></div>
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
  
  export default Audit;