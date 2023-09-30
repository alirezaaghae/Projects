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
import Services from '../components/Services';
import Questions from '../components/Questions';
import FinalIntro from '../components/FinalIntro';

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

            <Intro
                title="The Audit steps we take for you"
                text="During the process of creating an audit for your Google Ads campaign, our team follows a meticulous and comprehensive approach to ensure no stone is left unturned. Here's a breakdown of what we do:"
            />
            
            <Steps name={props.page} title="Step into Success with audit"/>

            <SFM_Form 
                id="Form"
                spanText={[<span>Let us make your account more valuable</span>,<b>Price: <strong><del>$200</del> - $50</strong></b>]}
                buttonText="Discover more"
                formData={(data) => props.mainFormData(data)}
            />
            <Collaborating name={props.page}/>
            
            <Services name={props.page} title="Why Choose Our Audit Service?" />
            
            <SFM_Form 
                id="Form2"
                spanText={[<span>Let us make your account more valuable</span>,<b>Price: <strong><del>$200</del> - $50</strong></b>]}
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
  
  export default Audit;