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

const TuneUp = (props) => {

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

    <div className="wrapper TuneUp-page">
        <header id="ServicesHeader">
            <div className="container">
                <Layout></Layout>
                <div className="content" id="navbar_padding">
                    <div className="text">
                        <h1>Tune Up</h1>
                        <span>Revitalize Your Campaign with Tune Up</span>
                        <p>Looking to improve your Google Ads campaign? Our Tune Up service offers comprehensive solutions for professional optimization and expert problem-solving. Say goodbye to campaign troubles and hello to a high-performing campaign with remarkable results. Let us be your guiding light and ignite your path to success.</p>
                        <div className="price">
                            <span>Pricing</span>
                            <strong><del></del>$1,500</strong>
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
                <h2>Tune Up Goes Beyond Audits!</h2>
                <p>Experience the ultimate boost with Tune Up – taking audits to new heights. While audits uncover insights, Tune Up brings them to life. We implement recommendations, optimize your campaign, and solve existing issues. It's like having a personal pit crew for your Google Ads success. Say goodbye to guesswork and hello to a turbocharged campaign. Let's conquer the digital advertising landscape together!</p>
            </Intro>
            <Steps name={props.page}>
                Step into Success with Tune Up
            </Steps>
            <section id="Form" className="sfm">
                <SFM_Form 
                    spanText={[<span>Let us make your account more valuable</span>,<b>Price: <strong><del></del>$1,500</strong></b>]}
                    buttonText="Discover more"
                    formData={(data) => props.mainFormData(data)}
                />
            </section>
            <Collaborating name={props.page}/>
            
            <section id="WhyChooseOurService">
                <div className="container">
                    <h2>Why Choose Our Tune Up Service?</h2>
                    <div className="items">
                        <ul className="row">
                            <li className="col-xl-6 col-lg-6 col-md-12 col-sm-24 col-24">
                                <div className="box">
                                    <div className="img"><img src="assets/images/TuneUpService1Icon.svg" alt="TuneUp-Service-Icon" title="TuneUp-Service-icon"/></div>
                                    <div className="text">
                                        <h3>Rapid Optimization</h3>
                                        <p>Experience rapid implementation of recommended changes, while minimizing downtime.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="col-xl-6 col-lg-6 col-md-12 col-sm-24 col-24">
                                <div className="box">
                                    <div className="img"><img src="assets/images/TuneUpService2Icon.svg" alt="TuneUp-Service-Icon" title="TuneUp-Service-icon"/></div>
                                    <div className="text">
                                        <h3>Comprehensive Evaluation</h3>
                                        <p>by conducting in-depth market research, competitor analysis and target audience analysis we provide you with a holistic understanding of your campaign's potential.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="col-xl-6 col-lg-6 col-md-12 col-sm-24 col-24">
                                <div className="box">
                                    <div className="img"><img src="assets/images/TuneUpService3Icon.svg" alt="TuneUp-Service-Icon" title="TuneUp-Service-icon"/></div>
                                    <div className="text">
                                        <h3>Expertise and Experience</h3>
                                        <p>Trust in 8 years of experience and skill to fine-tune your campaign for exceptional results.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="col-xl-6 col-lg-6 col-md-12 col-sm-24 col-24">
                                <div className="box">
                                    <div className="img"><img src="assets/images/TuneUpService4Icon.svg" alt="TuneUp-Service-Icon" title="TuneUp-Service-icon"/></div>
                                    <div className="text">
                                        <h3>Customer-Centric Approach</h3>
                                        <p>We prioritize your concerns and tailor our strategies to address your unique needs. We understand the importance of timely optimization and problem-solving, ensuring your satisfaction every step of the way.</p>
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
                    spanText={[<span>Do you want these numbers to be yours?</span>,<b>Price: <strong><del></del>$1,500</strong></b>]} 
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
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1" className="collapsed" aria-expanded="false"><div><span>What exactly is the Tune Up service?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div></a>
                                </h4>
                            </div>
                            <div id="collapse1" className="panel-collapse collapse" aria-expanded="false" style={{height: '0px'}}>
                                <div className="panel-body"><p>Tune Up is a comprehensive service that combines in-depth evaluation, rapid optimization, and expert problem-solving to revitalize your Google Ads campaign. It goes beyond traditional audits by swiftly implementing recommendations and fine-tuning your campaign for exceptional results.</p></div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div>
                                <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse2" className="collapsed" aria-expanded="false"><div><span>How long does the Tune Up process take?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div> </a>
                                </h4>
                            </div>
                            <div id="collapse2" className="panel-collapse collapse" aria-expanded="false" style={{height: '0px'}}>
                                <div className="panel-body"><p>The duration of the Tune Up process may vary depending on the complexity of your campaign. Typically, it takes a minimum of three days to evaluate your campaign, implement changes, and monitor performance. However, our goal is to provide efficient and timely optimizations to minimize any disruptions to your campaign.</p></div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div>
                                <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse3" className="collapsed" aria-expanded="false"><div><span>What types of optimizations are included in Tune Up?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div></a>
                                </h4>
                            </div>
                            <div id="collapse3" className="panel-collapse collapse" aria-expanded="false">
                                <div className="panel-body"><p>Tune Up includes a range of optimizations tailored to your specific campaign needs. This can include refining targeting options, optimizing bidding strategies, enhancing ad copy, improving keyword selection, and implementing data-driven recommendations to boost your campaign's performance.</p></div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div>
                                <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse4" className="collapsed" aria-expanded="false"><div><span>Can Tune Up be applied to existing campaigns or only new ones?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div></a>
                                </h4>
                            </div>
                            <div id="collapse4" className="panel-collapse collapse" aria-expanded="false">
                                <div className="panel-body"><p>Tune Up is suitable for both existing campaigns that need a refresh and newly launched campaigns. Our expert team will assess your campaign's current state, identify areas for improvement, and implement strategic changes to enhance its performance and drive better results.</p></div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div>
                                <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse5" className="collapsed" aria-expanded="false"><div><span>Will I receive reports and updates during the Tune Up process?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div></a>
                                </h4>
                            </div>
                            <div id="collapse5" className="panel-collapse collapse" aria-expanded="false" style={{height: '0px'}}>
                                <div className="panel-body"><p>Yes, we believe in transparency and clear communication. Throughout the Tune Up process, we provide regular updates on the changes made, optimizations implemented, and the performance of your campaign. Our team will keep you informed every step of the way.</p></div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div>
                                <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse6" className="collapsed" aria-expanded="false"><div><span>Can I make additional changes or requests during the Tune Up process?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div> </a>
                                </h4>
                            </div>
                            <div id="collapse6" className="panel-collapse collapse" aria-expanded="false" style={{height: '0px'}}>
                                <div className="panel-body"><p>Absolutely! We encourage open communication and collaboration. If you have specific requests, updates, or changes, simply reach out to your dedicated expert, and they will work with you to address your needs and make any necessary adjustments to optimize your campaign further.</p></div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div>
                                <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse7" className="collapsed" aria-expanded="false"><div><span>What results can I expect from the Tune Up service?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div></a>
                                </h4>
                            </div>
                            <div id="collapse7" className="panel-collapse collapse" aria-expanded="false">
                                <div className="panel-body"><p>With Tune Up, you can expect enhanced campaign performance, including increased click-through rates (CTR), improved conversion rates, and a higher return on ad spend (ROAS). Our goal is to revitalize your campaign, surpass your goals, and achieve remarkable growth and success in the digital advertising realm.</p></div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div>
                                <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse8" className="collapsed" aria-expanded="false"><div><span>What happens after the Tune Up process is completed?</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div></a>
                                </h4>
                            </div>
                            <div id="collapse8" className="panel-collapse collapse" aria-expanded="false">
                                <div className="panel-body"><p>Once the Tune Up process is completed, our team will continue to monitor and optimize your campaign's performance. We provide ongoing support, and you can choose to explore additional services or maintenance options to ensure your campaign remains optimized and continues to drive outstanding results.</p></div>
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
  
  export default TuneUp;