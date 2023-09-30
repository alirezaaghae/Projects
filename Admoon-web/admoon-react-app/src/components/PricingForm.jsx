import $ from 'jquery';

const PricingForm = () => {

    const FocusInput = event => {
        event.preventDefault()
        event.currentTarget.classList.add('active')
        event.currentTarget.getElementsByTagName("input")[0].focus();
    }

    return(
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
    )
}


export default PricingForm