import { useState, useEffect, useRef } from 'react';
import $, { event } from 'jquery';

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

const PricingForm = () => {
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

  // const [totalFeeSum ,setTotalFeeSum] = useState(0);
  // const [wageFeeSum ,setWageFeeSum] = useState(0);
  // const [setupFeeSum ,setSetupFeeSum] = useState(100);
  // const [budgetFeeSum ,setBudgetFeeSum] = useState(0);




$('.circle-range .slider').bind( "mousedown touchstart", function() { isDragging = true; $('html, body').css({overflow: 'hidden' }); });
$('body').bind( "mouseup touchend", function() { isDragging = false; $('html, body').css({overflow: 'auto'}); });

  $('#PricingForm').bind( "mousemove touchmove", function(e) {
  
  const box = circleRange.getBoundingClientRect();
  // const priceInfo = document.querySelector('.priceInfo').value;
    if(isDragging) {    
        const {atan2, PI, round} = Math ;
        // if 
      if ($(window).width() < 760) {
        topSections = header.offsetHeight;
      }
      else {
        topSections = header.offsetHeight + Intro.offsetHeight + Steps.offsetHeight + 200;
      }
      
            centerX = (circleRange.offsetWidth / 2) + box.left;
            centerY = (circleRange.offsetHeight / 2) + box.top;
      // console.log("Left: " + box.left.toFixed() + ", Top: " + box.top.toFixed() + ", Width: " + box.width + ", Height: " + box.height);
            posX = e.originalEvent.pageX ? e.originalEvent.pageX : e.originalEvent.touches[0].pageX ;
            posY = e.originalEvent.pageY ? e.originalEvent.pageY : e.originalEvent.touches[0].pageY ;
            posY -= topSections;
            deltaY = centerY - posY ;
            deltaX = centerX - posX ;
      // console.log('pageX: '+posX+', pageY: '+posY);
      // console.log('deltaX: '+deltaX+', deltaY: '+deltaY);
            angle = atan2(deltaY, deltaX) * (180 / PI) ;
            angle -= 0 ;
            if(angle < 0){
        angle += 360;
      }
            angle = round(angle);
      xprice = (angle * 100)+1000;
      selectItems(xprice);
      degree = angle - 90;
      // slider.style.transition = 'inherit';
      slider.style.transform = `rotate(${degree}deg)`;
      priceShow = '$'+ xprice.toLocaleString('en');
      // BudgetFee.text(priceShow);
      budgetFee = priceShow;
      totalFeeSum = checked ? (wageFeeSum + xprice + setupFeeSum) : (wageFeeSum + setupFeeSum);
      // TotalFee.text('$'+ totalFeeSum.toLocaleString('en'));
      setTotalFee('$'+ totalFeeSum.toLocaleString('en'))
      setPricePerDot(priceShow);    
    }
  });


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
      setTotalFee('$'+ totalFeeSum.toLocaleString('en'));
      slider.style.transform = `rotate(-90deg)`;
      setPricePerDot('$'+ xprice.toLocaleString('en'));
      budgetFee = '$'+ xprice.toLocaleString('en');
      $('.SelectPrices>.selectItems>ul>li>.button').removeClass('selected');
      $('.SelectPrices .button[item="1"]').addClass('selected');
      break;
    case 2:
      xprice = 5000;
      wageFeeSum = (xprice*7)/100;
      setWageFee('$'+wageFeeSum.toLocaleString('en'));
      totalFeeSum = checked ? (wageFeeSum + xprice + setupFeeSum) : (wageFeeSum + setupFeeSum);
      setTotalFee('$'+ totalFeeSum.toLocaleString('en'));
      slider.style.transform = `rotate(-50deg)`;
      setPricePerDot('$'+ xprice.toLocaleString('en'));
      budgetFee = '$'+ xprice.toLocaleString('en');
      $('.SelectPrices>.selectItems>ul>li>.button').removeClass('selected');
      $('.SelectPrices .button[item="2"]').addClass('selected');
      break;
    case 3:
      xprice = 15000;
      wageFeeSum = (xprice*5)/100;
      setWageFee('$'+wageFeeSum.toLocaleString('en'));
      totalFeeSum = checked ? (wageFeeSum + xprice + setupFeeSum) : (wageFeeSum + setupFeeSum);
      setTotalFee('$'+ totalFeeSum.toLocaleString('en'));
      slider.style.transform = `rotate(50deg)`;
      setPricePerDot('$'+ xprice.toLocaleString('en'));
      budgetFee = '$'+ xprice.toLocaleString('en');
      $('.SelectPrices>.selectItems>ul>li>.button').removeClass('selected');
      $('.SelectPrices .button[item="3"]').addClass('selected');
      break;
    default: console.log('default');
  }
  
};

const handleCheck = () => {
  // this will contain a reference to the checkbox   
  setChecked(!checked);
  if (!checked) {
    $('.BudgetFeeLi').addClass('showww');
    let tfs = wageFeeSum + xprice + setupFeeSum;
    setTotalFee('$'+ tfs.toLocaleString('en'));
    console.log(wageFeeSum +' + '+ xprice +' + '+ setupFeeSum)
} else {
    $('.BudgetFeeLi').removeClass('showww');
    totalFeeSum = wageFeeSum + setupFeeSum;
    setTotalFee('$'+ totalFeeSum.toLocaleString('en'));
    console.log('unchecked')
}
};

// open form Range
$('.openFormButton').click(function () {
  if(isTruePrice){
    $('.formPriceSubmiting').addClass('open');
  }else{
    // $('#priceInfo').val('Choose above $1000');
    $('#priceInfo').addClass('shake');
    $('.circle-range>span').addClass('shake');
    setTimeout(function(){ 
      $('#priceInfo').removeClass('shake');
      $('.circle-range>span').removeClass('shake');
    },2000);
    $('.circle-range>span').text('Choose above $1,000');
    setTimeout(function(){ $('.circle-range>span').text('Monthly Budget')},2000);
  }
  
});
$('.formPriceSubmiting>.top button').click(function () {
  $('.formPriceSubmiting').removeClass('open');
});

    const FocusInput = event => {
        event.preventDefault()
        event.currentTarget.classList.add('active')
        event.currentTarget.getElementsByTagName("input")[0].focus();
    }

// // // // // // // // // // // // // //

    

    function handleChange(event) {
      xprice = event.target.value;
      xprice = xprice.replace(/[^\d\.]*/g, ''); // Replace all leading non-digits with nothing
      xprice = Number(xprice);
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
                                {/* <input id="priceInfo" maxLength="7" pattern="[0-9]{32}" className="priceInfo" type="text" value="" placeholder="Enter your budget" onKeyUp='addListAfterKeypress()'/> */}
                                <input id="priceInfo" maxLength="7" pattern="[0-9]{32}" className="priceInfo" type="text" value={pricePerDot} placeholder="Enter your budget" onChange={handleChange}/>
                                <span>Monthly Budget</span>
                                <div className="slider" style={{}}></div>
                            </div>
                        </div>
                        <div className="SelectPrices">
                            <div className="selectItems">
                                <ul>
                                    <li>
                                        <div className="button" item="1" onClick={() => handleItem(1)} >
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
                                </ul>
                                <hr/>
                                <p><span>Total fee:</span><strong className="TotalFee">{totalFee}</strong></p>
                                <hr/>
                                <div className="checkBox"><input type="checkbox" name="payCheckbox" id="payCheckbox" checked={checked} onChange={handleCheck}/><p>I need to pay my account fee by your company </p></div> 
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