import $ from 'jquery';
import { useEffect, useState } from "react";

export default function SFM_Form (props){
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
        let state = event.target.getAttribute("state");

        switch (state) {
          case '0':
            if(emailValid){
              $('.form-input').attr("state", "name");
              $('.next_button').text('Next');
              event.target.setAttribute("state", "1");
            }
            break;
          case '1':
            if(nameValid){
              $('.form-input').attr("state", "phone");
              event.target.setAttribute("state", "2");
            }
            break;
          case '2':
            if(phoneValid){
              $('.form-input').attr("state", "website");
              $('.next_button').text('Send');
              $('.next_button').addClass('send_button');
              event.target.setAttribute("state", "3");
            }
            break;
          case '3':
            if(websiteValid){
              props.formData(inputs)
              formReset()
              $('.successDiv').css("display", "flex");
              setTimeout(function(){ 
                $('.form-input').attr("state", "success");
              }, 100);
            }
            setWebsiteValid(false)
            break;
          default: 
            break;
        }
    }   
    const topLabel = (event) => {
        let radio = event.target.value;
        console.log(radio);
        switch (radio) {
            case '0':
              $('.form-input').attr("state", "email");
              $('.next_button').text('Lets Start');
              $('.next_button.send_button').removeClass('send_button');
              $('.next_button').attr("state", "0");
              break;
            case '1':
              if(emailValid){
                $('.form-input').attr("state", "name");
                $('.next_button').text('Next');
                $('.next_button.send_button').removeClass('send_button');
                $('.next_button').attr("state", "1");
              }
              break;
            case '2':
              if(emailValid && nameValid){
                $('.form-input').attr("state", "phone");
                $('.next_button').text('Next');
                $('.next_button.send_button').removeClass('send_button');
                $('.next_button').attr("state", "2");
              }
              break;
            case '3':
              if(emailValid && nameValid && phoneValid){
                $('.form-input').attr("state", "website");
                $('.next_button').text('Send');
                $('.next_button').addClass('send_button');
                $('.next_button').attr("state", "3");
              }
              break;
            default: console.log('default');
          }
          return false;
    }
    const formReset = () => {
      setInputs({})
    }
    return(
        <div className="container">
            <div className="box">
                <div className="priceInfo">
                    <div className="text">
                        {props.spanText}
                    </div>
                    <div className="button">
                        <button className="formDiscover" onClick={()=> $('.box').addClass('open') }>{props.buttonText}</button>
                    </div>
                </div>
                <div className="form-input center" state="email" page="Audit">
                    <div className="top-label">
                        <label className="active" value="0" onClick={topLabel}>Email<input type="radio" className="radio-input Email_menu2" name="top_label_menu" value="0"/></label>
                        <label value="1" onClick={topLabel}>Full Name<input type="radio" className="radio-input Name_menu2" name="top_label_menu" value="1" checked/></label>
                        <label value="2" onClick={topLabel}>Phone Number<input type="radio" className="radio-input Phone_menu2" name="top_label_menu" value="2"/></label>
                        <label value="3" onClick={topLabel}>Website URL<input type="radio" className="radio-input Budget_menu2" name="top_label_menu" value="3"/></label>
                    </div>
                    <form>
                        <div className="inputs">
                            <div className="Email-input">
                                <input type="email" name="email" placeholder="Email" value={inputs.email || ""} onChange={handleChange}/>
                            </div>
                            <div className="Name-input">
                                <input type="text" name="name" placeholder="Full Name" inputMode="decimal" min="2" max="20" value={inputs.name || ""} onChange={handleChange} required/>
                            </div>
                            <div className="phone-input alireza_validator">
                                <input type="tel" className="phone123" name="phone" placeholder="Phone Number" value={inputs.phone || ""} onChange={handleChange} maxlength="15" required/>
                            </div>
                            <div className="website-input">
                                <input type="url" name="website" placeholder="Website address" max="30" value={inputs.website || ""} onChange={handleChange}/>
                            </div>

                            <div className="successDiv">
                                <p>Thank you for ordering us! We will call you back</p>
                            </div>
                        </div>
                        <button className="next_button" state="0" onClick={handleSubmit}>Next</button>
                    </form>
                </div>
            </div>
        </div>
    )
}