<?php 
    global $formPage;
?>
<footer id="Footer" class="site-footer footer-index" role="contentinfo">
    <div class="footerContact">
    <div class="container">
        <div class="location">
            <a class="map" href="https://maps.app.goo.gl/kRdKzfxD4LZtdsmz5" target="_blank">
                <img src="assets/images/footerMapCover.png" alt="location" title="location">
            </a>
            <div class="text">
                <ul>
                    <li>
                        <img src="assets/images/locationIcon.svg" alt="location-icon" title="location-icon">
                        <a href="https://maps.app.goo.gl/kRdKzfxD4LZtdsmz5">Office L77, Al Mararr, Dubai, UAE</a>
                    </li>
                    <li>
                        <img src="assets/images/phoneIcon.svg" alt="phone-icon" title="phone-icon">
                        <a href="tel:+971501104970">+971 50 1104970</a>
                        <!--<a href="tel:+9684692578">+968 - 469 2578</a>-->
                    </li>
                    <li>
                        <img src="assets/images/mailIcon.svg" alt="mail-icon" title="mail-icon">
                        <a href="mailto:sale@admoon.agency">sale@admoon.agency</a>
                        <!--<a href="tel:+9684692578">+968 - 469 2578</a>-->
                    </li>
                </ul>
            </div>
        </div>
        <div id="footerform">
            <form class="form customForm">
                <span>We can help you with</span>
                <div class="custom-select footer-select">
                    <select id="FPS" page="<?php echo $formPage;?>">
                      <option value="Audit">Audit</option>
                      <option value="TuneUp">Tune up</option>
                      <option value="AdsManagement">Ads Management</option>
                      <option value="AccountSuspension">Account Suspension</option>
                    </select>
                </div>
                <div class="FullName footer-input">
                    <label>Full Name
                        <input type="text" name="name" min="2" max="20" required>
                    </label>
                    <div class="bottom-line"><div class="fill-line"></div></div>
                </div>
                <div class="MailAddress footer-input">
                    <label>Email
                        <input type="email" name="email">
                    </label>
                    <div class="bottom-line"><div class="fill-line"></div></div>
                </div>
                <div class="WebsiteAddress footer-input">
                    <label>Website URL
                    <input type="text" name="website"></label>
                    <div class="bottom-line"><div class="fill-line"></div></div>
                </div>
                <div class="PhoneNumber footer-input">
                    <label>Phone Number
                        <input type="tel" name="phone" maxlength="15" required>
                    </label>
                    <div class="bottom-line"><div class="fill-line"></div></div>
                </div>
                <div class="button footer-button">
                    <button class="send_button">Submit</button>
                </div>
            </form>
            <div class="successQS">
                <p>Thank you for ordering us! We will call you back</p>
            </div>
        </div>
    </div>
    </div>
    <div class="footerNav desktop">
        <div class="logo">
            <img src="assets/images/admoonLogoWhite.svg" alt="admoon-logo" title="admoon-logo">
        </div>
        <div class="footerNavBar">
            <ul class="navv">
                <li>
                    <strong>Services</strong>
                    <ul>
                        <li><a href="audit.php">Audit</a></li>
                        <li><a href="adsManagement.php">Ads Management</a></li>
                        <li><a href="tuneUp.php">Tune Up</a></li>
                        <li><a href="#">Account Suspension</a></li>
                    </ul>
                </li>
                <div class="vl"></div>
                <li>
                    <strong>Solution for industry</strong>
                    <ul>
                        <li><a href="#">E-commerce</a></li>
                        <li><a href="#">Travel and Tourism</a></li>
                        <li><a href="#">Real Estate</a></li>
                    </ul>
                </li>
                <div class="vl"></div>
                <!--<li>-->
                <!--    <strong>Learn about</strong>-->
                <!--    <ul>-->
                <!--        <li><a href="#">Search Campaign</a></li>-->
                <!--        <li><a href="#">Display Campaign</a></li>-->
                <!--        <li><a href="#">Youtube Campaign</a></li>-->
                <!--        <li><a href="#">Download Campaign</a></li>-->
                <!--        <li><a href="#">Application Campaign</a></li>-->
                <!--    </ul>-->
                <!--</li>-->
                <!--<div class="vl"></div>-->
                <li>
                    <strong>Resources</strong>
                    <ul>
                        <li><a href="caseStudy.php">Case Study</a></li>
                        <li><a href="aboutUs.php">About Us</a></li>
                        <li><a href="contactUs.php">Contact Us</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="trustUs">
            <div class="GPartner">
                <a target="_blank" href="https://www.google.com/partners/agency?id=6288273986" class="footerbottomgpartner"><img src="assets/images/GPartner.png"></a>
            </div>
            <div class="Social">
                <ul>
                    <li><a class="linkedin" target="_blank" href="#"><img src="assets/images/LinkdinIcon.svg" alt="Linkdin-Icon" title="Linkdin-Icon"></a></li>
                    <li><a class="telegram" target="_blank" href="#"><img src="assets/images/telegramIcon.svg" alt="telegram-Icon" title="telegram-Icon"></a></li>
                    <li><a class="whatsapp" target="_blank" href="https://wa.me/+971501104970"><img src="assets/images/whatsappIcon.svg" alt="whatsapp-Icon" title="whatsapp-Icon"></a></li>
                    <li><a class="instagram" target="_blank" href="#"><img src="assets/images/instagramIcon.svg" alt="instagram-Icon" title="instagram-Icon"></a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footerNav mobile">
        <div class="footerNavBar">
            <ul class="navv">
             <div class="panel-group">
                <div class="panel">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                        <a data-toggle="collapse" href="#collapse101">Services <img src="assets/images/downArrow.svg"></a>
                        </h4>
                    </div>
                    <div id="collapse101" class="panel-collapse collapse">
                        <ul class="list-group">
                        <li class="list-group-item"><a href="audit.php">Audit</a></li>
                        <li class="list-group-item"><a href="adsManagement.php">Ads Management</a></li>
                        <li class="list-group-item"><a href="tuneUp.php">Tune Up</a></li>
                        <li class="list-group-item"><a href="#">Account Suspension</a></li>
                        </ul>
                    </div>
                </div>
                <div class="panel">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                        <a href="caseStudy.php">Case Study</a>
                        </h4>
                    </div>
                </div>
                <div class="panel">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                        <a data-toggle="collapse" href="#collapse102">Solution for industry <img src="assets/images/downArrow.svg"></a>
                        </h4>
                    </div>
                    <div id="collapse102" class="panel-collapse collapse">
                        <ul class="list-group">
                        <li class="list-group-item"><a href="#">E-commerce</a></li>
                        <li class="list-group-item"><a href="#">Travel and Tourism</a></li>
                        <li class="list-group-item"><a href="#">Real Estate</a></li>
                        </ul>
                    </div>
                </div>
                <!--<div class="panel">-->
                <!--    <div class="panel-heading">-->
                <!--        <h4 class="panel-title">-->
                <!--        <a data-toggle="collapse" href="#collapse103">Learn about <img src="assets/images/downArrow.svg"></a>-->
                <!--        </h4>-->
                <!--    </div>-->
                <!--    <div id="collapse103" class="panel-collapse collapse">-->
                <!--        <ul class="list-group">-->
                <!--        <li class="list-group-item"><a href="#">Search Campaign</a></li>-->
                <!--        <li class="list-group-item"><a href="#">Display Campaign</a></li>-->
                <!--        <li class="list-group-item"><a href="#">Youtube Campaign</a></li>-->
                <!--        <li class="list-group-item"><a href="#">Download Campaign</a></li>-->
                <!--        <li class="list-group-item"><a href="#">Application Campaign</a></li>-->
                <!--        </ul>-->
                <!--    </div>-->
                <!--</div>-->
                <div class="panel">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a href="aboutUs.php">About Us</a>
                        </h4>
                    </div>
                </div>
                <div class="panel">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                        <a href="contactUs.php">Contact Us</a>
                        </h4>
                    </div>
                </div>
              </div> 
            </ul>
        </div>
        <div class="trustUs">
            <div class="GPartner">
                <a target="_blank" href="https://www.google.com/partners/agency?id=6288273986" class="footerbottomgpartner"><img src="assets/images/GPartner.png"></a>
            </div>
            <div class="Social">
                <ul>
                    <li><a class="linkedin" target="_blank" href="#"><img src="assets/images/LinkdinIcon.svg" alt="Linkdin-Icon" title="Linkdin-Icon"></a></li>
                    <li><a class="telegram" target="_blank" href="#"><img src="assets/images/telegramIcon.svg" alt="telegram-Icon" title="telegram-Icon"></a></li>
                    <li><a class="whatsapp" href="https://wa.me/+971501104970"><img src="assets/images/whatsappIcon.svg" alt="whatsapp-Icon" title="whatsapp-Icon"></a></li>
                    <li><a class="instagram" target="_blank" href="#"><img src="assets/images/instagramIcon.svg" alt="instagram-Icon" title="instagram-Icon"></a></li>
                </ul>
            </div>
        </div>
        <div class="logo">
            <a href="index.php"><img src="assets/images/admoonLogoWhite.svg" alt="admoon-logo" title="admoon-logo"></a>
        </div>
    </div>
</footer>
<div class="whatsapp-call">
    <a href="https://wa.me/+971501104970"><img src="assets/images/whatsappIcon.svg" alt="Whatsapp" title="Whatsapp"></a>
</div>
<script src="assets/js/jquery-3.6.4.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<script src="assets/OwlCarousel/dist/owl.carousel.min.js"></script>
<script src="assets/gsap-public/minified/gsap.min.js"></script>
<script src="assets/js/script.js" defer="defer"></script>
</html>