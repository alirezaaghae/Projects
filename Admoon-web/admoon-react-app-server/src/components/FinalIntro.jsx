import { Link } from "react-router-dom";

const FinalIntro = () => {
    return(
        <section id="FinalIntro">
            <div className="container">
                <div className="content">
                    <div className="img"><Link to="/aboutUs"><img src="assets/images/ceoProfile.png" alt="Ali-Hajizadeh(CEO-on-Admoon)" title="Ali-Hajizadeh(CEO-on-Admoon)"/></Link><div className="mobile"><strong>Ali Hajizadeh</strong><span>CEO on Admoon</span></div></div>
                    <div className="text"><div className="desktop"><strong>Ali Hajizadeh</strong><span>CEO on Admoon</span></div><p>Together, we'll align your ads with your business objectives, ensuring every penny spent brings profitable returns. No more guesswork; I'll let data-driven decisions and my expert guidance light the way to success. Together, we'll align your ads with your business objectives, ensuring every penny spent brings profitable returns.</p></div>
                </div>
            </div>
        </section>
    )
}

export default FinalIntro