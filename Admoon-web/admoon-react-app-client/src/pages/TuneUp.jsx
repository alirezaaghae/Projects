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

            <Intro
                title="Tune Up Goes Beyond Audits!"
                text="Experience the ultimate boost with Tune Up – taking audits to new heights. While audits uncover insights, Tune Up brings them to life. We implement recommendations, optimize your campaign, and solve existing issues. It's like having a personal pit crew for your Google Ads success. Say goodbye to guesswork and hello to a turbocharged campaign. Let's conquer the digital advertising landscape together!"
            />

            <Steps name={props.page} title=" Step into Success with Tune Up "/>

            <SFM_Form 
                id="Form"
                spanText={[<span>Let us make your account more valuable</span>,<b>Price: <strong><del></del>$1,500</strong></b>]}
                buttonText="Discover more"
                formData={(data) => props.mainFormData(data)}
            />

            <Collaborating name={props.page}/>

            <Services name={props.page} title="Why Choose Our Tune Up Service?" />
            
            <SFM_Form 
                id="Form2"
                spanText={[<span>Do you want these numbers to be yours?</span>,<b>Price: <strong><del></del>$1,500</strong></b>]} 
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
  
  export default TuneUp;