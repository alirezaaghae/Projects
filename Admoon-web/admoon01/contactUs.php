<!-- include html setting (head) -->
<?php 
    $title = "Contact us"; 
    $description = "Contact us Description";
    $colorTheme = "#252E60";
    include('head.php'); 
?>
 
<!-- page -->
<body id="ContactUs">
    <div class="loading">
        <div class="loading-text">
            <span class="loading-text-words">A</span>
            <span class="loading-text-words">D</span>
            <span class="loading-text-words">M</span>
            <span class="loading-text-words">O</span>
            <span class="loading-text-words">O</span>
            <span class="loading-text-words">N</span>
            <!--<span class="loading-text-words">.</span>-->
            </br>
            <span class="loading-text-words sec">C</span>
            <span class="loading-text-words sec">O</span>
            <span class="loading-text-words sec">N</span>
            <span class="loading-text-words sec">T</span>
            <span class="loading-text-words sec">A</span>
            <span class="loading-text-words sec">C</span>
            <span class="loading-text-words sec">T</span>
            <span class="loading-text-words sec"> </span>
            <span class="loading-text-words sec">U</span>
            <span class="loading-text-words sec">S</span>
        </div>
    </div>
    <div class="wrapper ContactUs-page">
        <div class="container">
            <header id="WhiteMenu">
                <?php include('nav.php'); ?>
            </header>
            <main id="navbar_padding"> 
                <section id="links">
                    <div class="title">
                        <h1>Lets work together</h1>
                        <p>We’are here to help – from advertising support to your request</p>
                    </div>
                    <div class="locationInfo">
                        <div class="map"><a href="https://maps.app.goo.gl/kRdKzfxD4LZtdsmz5" target="_blank"><img src="assets/images/contactUsMap.jpg" alt="admoon-location" title="admoon-location"></a></div>
                        <div class="textBox">
                            <ul>
                                <li>
                                    <img src="assets/images/locationIcon2.svg" alt="location-icon" title="location-icon">
                                    <a href="https://maps.app.goo.gl/kRdKzfxD4LZtdsmz5" target="_blank"><p>Office L77, Al Mararr, Dubai</p></a>
                                </li>
                                <li>
                                    <img src="assets/images/timeIcon2.svg" alt="time-icon" title="time-icon">
                                    <p>You can reach us in 9:00 am to 20:00 pm</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="socialsNetwork">
                        <ul class="items">
                            <li class="item">
                                <a href="tel:+971501104970" target="_blank">
                                    <img src="assets/images/callIcon3.svg" alt="call-icon">
                                    <span>+971 50 1104970</span>
                                    <!--<span>+968 - 469 2578</span>-->
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" target="_blank">
                                    <img src="assets/images/mailIcon3.svg" alt="mail-icon">
                                    <span>Admoon@gmail.com</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" target="_blank">
                                    <img src="assets/images/telegramIcon3.svg" alt="telegram-icon">
                                    <span>Telegram</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="https://wa.me/+971501104970">
                                    <img src="assets/images/whatsappIcon3.svg" alt="whatsapp-icon">
                                    <span>WhatsApp</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" target="_blank">
                                    <img src="assets/images/meetIcon3.svg" alt="Google-meet-icon">
                                    <span>Google meet</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section id="mainForm">
                    <div class="title">
                        <h2>Do you need our help</h2>
                        <p>We’ll do our best to get back to you as soon as possible.</p>
                    </div>
                    <div class="form contactUs">
                        <form class="form customForm">
                            <span>We can help you with</span>
                            <div class="custom-select package">
                                <select>
                                  <option value="Audit">Audit</option>
                                  <option value="TuneUp">Tune up</option>
                                  <option value="AdsManagement">Ads Management</option>
                                  <option value="AccountSuspension">Account Suspension</option>
                                </select>
                            </div>
                            <div class="FullName">
                                <label>Full Name
                                    <input type="text" name="name" min="2" max="20" required>
                                </label>
                                <div class="bottom-line"><div class="fill-line"></div></div>
                            </div>
                            <div class="MailAddress">
                                <label>Email
                                    <input type="email" name="email">
                                </label>
                                <div class="bottom-line"><div class="fill-line"></div></div>
                            </div>
                            <div class="WebsiteAddress">
                                <label>Website URL
                                <input type="text" name="website"></label>
                                <div class="bottom-line"><div class="fill-line"></div></div>
                            </div>
                            <div class="PhoneNumber">
                                <label>Phone Number
                                    <input type="tel" name="phone" maxlength="15" required>
                                </label>
                                <div class="bottom-line"><div class="fill-line"></div></div>
                            </div>
                            <div class="button">
                                <button class="send_button">Submit</button> 
                            </div>
                        </form>
                        <div class="successQS">
                            <p>Thank you for ordering us! We will call you back</p>
                        </div>  
                    </div>
                    <div class="bottomText">
                        <strong>Connect with us elsewhere</strong>
                        <ul class="items">
                            <li class="item"><a href="#" class="linkedin" target="_blank"><img src="assets/images/linkedin0.svg" alt="linkedin-icon"></a></li>
                            <li class="item"><a href="#" class="instagram" target="_blank"><img src="assets/images/instagramIcon0.svg" alt="instagram-icon"></a></li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    </div>
</div>
<!-- include footer and scripts -->
<?php 
    $formPage = '';
    include('footer.php');
?>
</body>