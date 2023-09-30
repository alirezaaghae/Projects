import { useEffect } from 'react';
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Footer from "./Footer";
import $ from 'jquery';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SFM_Form from '../components/SFM_Form';
import Intro from '../components/Intro';
import Steps from '../components/Steps';
import Services from '../components/Services';
import Questions from '../components/Questions';
import FinalIntro from '../components/FinalIntro';
import PricingForm from '../components/PricingForm';

const Ads = (props) => {

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

            <Intro
                title="Our Expert Team Delivers Winning Results!"
                text="Our agency offers a team of experienced professionals with extensive digital advertising experience to help you dominate the competition and achieve exceptional results. We analyze your competition, develop tailored strategies, and provide tools, insights, and expertise to stand out in the crowd. With our expert team by your side, you can unleash your full potential and position your business for success."
            />

            <Steps name={props.page} title=" What happens in our management service!"/>

            <PricingForm/>

            <Services name={props.page} title="Why Choose Our Audit Service?" text="Choose our agency to unlock the power of expertise, experience, and a proven history of success. We're here to help you achieve remarkable results, drive your business forward, and leave a lasting impact in the digital advertising realm. Let's embark on a journey together that will transform your campaigns into unparalleled successes!" />

            <SFM_Form 
                id="Form2"
                spanText={[<span>Do you want these numbers to be yours?</span>]}
                buttonText="Start Now"
                formData={(data) => props.mainFormData(data)}
            />

            <Questions name={props.page} title="Frequently Asked Questions"/>

            <FinalIntro />

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