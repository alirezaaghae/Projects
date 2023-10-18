import { useState, useEffect, useRef } from 'react';
import $ from 'jquery';

 var totalFeeSum = 0;
 var wageFeeSum = 0;
 var setupFeeSum = 100;
 var budgetFeeSum = 0;
 var budgetFee = '$0'; 
 let isDragging;
 // let isChecked = false;
 let isTruePrice = false;
 let angle ;
 let degree ;
 let priceShow ;
 var xprice = 0 ;
 let topSections;
 let centerX ;
 let centerY ;
let deltaX ;
let deltaY ;
 let posX ;
 let posY ;

 
 const PricingForm = (props) => {
    const [emailValid, setEmailValid] = useState(false);
    const [nameValid, setNameValid] = useState(false);
    const [phoneValid, setPhoneValid] = useState(false);
    const [websiteValid, setWebsiteValid] = useState(false);

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))

        switch (name) {
            case 'name': 
              if (value == '' || value.length < 2) {
                setNameValid(false)
              } else {
                setNameValid(true)
              }
            break
            case 'email': 
            if (value == '') {
                setEmailValid(false)
              } else {
                setEmailValid(true)
              }
            break
            case 'phone': 
            if (value == '' || value.length < 2 || value.length > 15) {
                setPhoneValid(false)
              } else {
                setPhoneValid(true)
              }
            break
            case 'website': 
            if (value == '' || value.length < 2) {
                setWebsiteValid(false)
              } else {
                setWebsiteValid(true)
              }
            break
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(emailValid && nameValid && phoneValid && websiteValid){
            props.formData(inputs)
            formReset()
            document.getElementsByClassName('formPriceSubmiting')[0].classList.add('success')
        } else {
            console.log(emailValid , nameValid , phoneValid , websiteValid)
        }
    }   

    const formReset = () => {
        setInputs({})
    }
    const FocusInput = event => {
      event.preventDefault()
      event.currentTarget.classList.add('active')
      event.currentTarget.getElementsByTagName("input")[0].focus();
    }



  // circle price
    const circleRange = document.querySelector('.circle-range');
    const sliderRange = document.querySelector('.circle-range .slider');
    const header = document.querySelector('#ServicesHeader');
    const Intro = document.querySelector('#Intro');
    const Steps = document.querySelector('#Steps');
    const body = document.querySelector('#AdsManage #ServicesMain');
    const slider = document.querySelector('.slider');

    const [checked, setChecked] = useState(false);

    const [pricePerDot, setPricePerDot] = useState();

    // const [budgetFee, setBudgetFee] = useState('$0');
    const [totalFee, setTotalFee] = useState('$0');
    const [wageFee, setWageFee] = useState('$0');
    const [setupFee, setSetupFee] = useState('$100');
    function selectItems(price){
      if (1000 <= price && price < 5000){ 
        $('.selectItems>ul>li>.button').removeClass('selected');
        $('.selectItems>ul>li>.button[item="1"]').addClass('selected');
        wageFeeSum = (price*15)/100;
        setWageFee('$'+wageFeeSum.toLocaleString('en'));
        isTruePrice = true;
      } else if (5000 <= price && price < 15000){ 
        $('.selectItems>ul>li>.button').removeClass('selected');
        $('.selectItems>ul>li>.button[item="2"]').addClass('selected');
        wageFeeSum = (price*7)/100;
        setWageFee('$'+wageFeeSum.toLocaleString('en'));
        isTruePrice = true;
      } else if (15000 <= price){  
        $('.selectItems>ul>li>.button').removeClass('selected');
        $('.selectItems>ul>li>.button[item="3"]').addClass('selected');
        wageFeeSum = (price*5)/100;
        setWageFee('$'+wageFeeSum.toLocaleString('en'))
        isTruePrice = true;
      } else {
        $('.selectItems>ul>li>.button').removeClass('selected');
        setWageFee('$0')
        setTotalFee('$0')
        budgetFee = '$0';
        isTruePrice = false;
      }
    }

    function handleItem(item) {
      isTruePrice = true;
      // let item = $(this).attr("item");
      switch (item) {
        case 1:
          xprice = 1000;
          wageFeeSum = (xprice*15)/100;
          setWageFee('$'+wageFeeSum.toLocaleString('en'));
          totalFeeSum = checked ? (wageFeeSum + xprice + setupFeeSum) : (wageFeeSum + setupFeeSum);
          setPricePerDot('$'+ xprice.toLocaleString('en'));
          budgetFee = '$'+ xprice.toLocaleString('en');
          console.log(wageFee+' '+ budgetFee +' '+totalFee+' '+ pricePerDot);
          break;
        case 2:
          xprice = 5000;
          wageFeeSum = (xprice*7)/100;
          setWageFee('$'+wageFeeSum.toLocaleString('en'));
          totalFeeSum = checked ? (wageFeeSum + xprice + setupFeeSum) : (wageFeeSum + setupFeeSum);
          setPricePerDot('$'+ xprice.toLocaleString('en'));
          budgetFee = '$'+ xprice.toLocaleString('en');
          console.log(wageFee+' '+ budgetFee +' '+totalFee+' '+ pricePerDot);
          break;
        case 3:
          xprice = 15000;
          wageFeeSum = (xprice*5)/100;
          setWageFee('$'+wageFeeSum.toLocaleString('en'));
          totalFeeSum = checked ? (wageFeeSum + xprice + setupFeeSum) : (wageFeeSum + setupFeeSum);
          setPricePerDot('$'+ xprice.toLocaleString('en'));
          budgetFee = '$'+ xprice.toLocaleString('en');
          console.log(wageFee+' '+ budgetFee +' '+totalFee+' '+ pricePerDot);
          break;
        default: console.log('default');
      }
   
    };

    function handleChangeForm(event) {
      xprice = event.target.value;
      xprice = xprice.replace(/[^\d\.]*/g, ''); // Replace all leading non-digits with nothing
      xprice = Number(xprice);
      console.log(xprice);
      selectItems(xprice);
      priceShow = '$'+ xprice.toLocaleString('en');
      budgetFee = priceShow;
      totalFeeSum = checked ? (wageFeeSum + xprice + setupFeeSum) : (wageFeeSum + setupFeeSum);
      setTotalFee('$'+ totalFeeSum.toLocaleString('en'));
      setPricePerDot(priceShow);
      degree = (xprice/100)-90;
      // slider.style.transform = `rotate(${degree}deg)`;  
    }
    
     return(
         <section id="PricingForm">
                 <div className="container">
                     <h2>Pricing</h2>
                     <div className="boxs">
                         <div className="circleInput">
                             <div className="circle-range">
                                 {/* <input id="priceInfo" maxLength="7" pattern="[0-9]{32}" className="priceInfo" type="text" placeholder="Enter your budget" onkeyup='addListAfterKeypress()'/> */}
                                 <input id="priceInfo" maxLength="7" pattern="[0-9]{32}" className="priceInfo" type="text" value={pricePerDot} placeholder="Enter your budget" onChange={handleChangeForm}/>
                                 <span>Monthly Budget</span>
                                 <div className="slider"></div>
                             </div>
                         </div>
                         <div className="SelectPrices">
                             <div className="selectItems">
                                 <ul>
                                     <li>
                                         <div className="button" item="1" onClick={() => handleItem(1)}>
                                             <span>$1,000-$4,900</span>
                                             <b>Wage: <strong>%15</strong></b>
                                         </div>
                                     </li>
                                     <li>
                                         <div className="button" item="2" onClick={() => handleItem(2)}>
                                             <span>$5,000-$14,900</span>
                                             <b>Wage: <del>%12</del> <strong>%7</strong></b>
                                         </div>
                                     </li>
                                     <li>
                                         <div className="button" item="3" onClick={() => handleItem(3)}>
                                             <span>$15,000-∞</span>
                                             <b>Wage: <del>%9</del> <strong>%5</strong></b>
                                         </div>
                                    </li>
                                </ul>
                             </div>
                             <div className="wageInfo">
                                 <ul>
                                     <li><span>Wage fee:</span><strong className="WageFee">{wageFee}</strong></li>
                                     <li><span>Setup fee:</span><strong className="SetupFee">{setupFee}</strong></li>
                                     <li className="BudgetFeeLi"><span>Budget fee:</span><strong className="BudgetFee">{budgetFee}</strong></li>
                                     {/* <li><span>Wage fee:</span><strong className="WageFee">$0</strong></li>
                                     <li><span>Setup fee:</span><strong className="SetupFee">$0</strong></li>
                                     <li className="BudgetFeeLi"><span>Budget fee:</span><strong className="BudgetFee">$0</strong></li> */}
                                 </ul>
                                 <hr/>
                                 <p><span>Total fee:</span><strong className="TotalFee">{totalFee}</strong></p>
                                 {/* <p><span>Total fee:</span><strong className="TotalFee">$0</strong></p> */}
                                 <hr/>
                                 {/* <div className="checkBox"><input type="checkbox" name="payCheckbox" id="payCheckbox" checked={checked} onChange={handleCheck}/><p>I need to pay my account fee by your company </p></div>  */}
                                 <div className="checkBox"><input type="checkbox" name="payCheckbox" id="payCheckbox"/><p>I need to pay my account fee by your company </p></div> 
                             </div>
                             <button className="openFormButton">Start Now</button>
                         </div>
                        <div className="formPriceSubmiting">
                            <div className="top"><span>Let’s we learn about you</span><button>X</button></div>
                            <form className="form customForm">
                                <div className="WebsiteAddress" onClick={FocusInput}>
                                    <label>Website URL
                                      <input type="text" name="website" value={inputs.website || ""} onChange={handleChange}/>
                                    </label>
                                    <div className="bottom-line"><div className="fill-line"></div></div>
                                </div>
                                <div className="FullName" onClick={FocusInput}>
                                    <label>Full Name
                                      <input type="text" name="name" min="2" max="20" value={inputs.name || ""} onChange={handleChange} required/>
                                    </label>
                                    <div className="bottom-line"><div className="fill-line"></div></div>
                                </div>
                                <div className="MailAddress" onClick={FocusInput}>
                                    <label>Email
                                      <input type="email" name="email" value={inputs.email || ""} onChange={handleChange}/>
                                    </label>
                                    <div className="bottom-line"><div className="fill-line"></div></div>
                                </div>
                                <div className="PhoneNumber" onClick={FocusInput}>
                                    <label>Phone Number
                                      <input type="tel" name="phone" maxLength="15" value={inputs.phone || ""} onChange={handleChange} required/>
                                    </label>
                                    <div className="bottom-line"><div className="fill-line"></div></div>
                                </div>
                                <div className="button">
                                    <button className="send_button" onClick={handleSubmit}>Start Now</button>
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