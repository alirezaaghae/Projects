var nameValid = false;
var locationValid = false;
var phoneValid = false;
var serviceValid = false;
var captchaValid = false;

var nameInput = '';
var locationInput = '';
var phoneInput = '';
var serviceInput = '';

function sendAjaxForm() {
    // $('form').submit(function () {
    //     return false;
    // });
    var name, location, phone, service;
    var a = 'ld';
    name = nameInput;
    service = serviceInput;
    phone = phoneInput;
    location = locationInput;

    $('#send_button').addClass('pending');
    $('#send_button').prop('disabled', true);

    $.ajax({
        url: 'form.php',
        method: "POST",
        data: {
            'ajax': 'true',
            'in': '5' + a,
            'name': name,
            'phone': phone,
            'service': service,
            'location': location
        },
        success: function (result) {
            $('#send_button').removeClass('pending');
            // elm.addClass('success');
            $('.successDiv').addClass("open");
            $('#sec_6 form').hide();
        }
    });

}


$('form').submit(function () {
    return false;
});
// insert data cover form 

  $("#name_input").blur(function () {
    if ($(this).is(":invalid") || this.value.length < 2) {
      nameValid = false;
    } else {
      nameInput = $(this).val();
      nameValid = true;
    };
  });
  $("#phone_input").blur(function () {
    if ($(this).is(":invalid") || this.value.length <= 10) {
      phoneValid = false;
    } else {
      phoneInput = $(this).val();
      phoneValid = true;
    };
  });
  $("#ort_input").blur(function () {
    if ($(this).is(":invalid") || !$(this).val()) {
      locationValid = false;
    } else {
      locationInput = $(this).val();
      locationValid = true;
    };
  });


$('#send_button').click(function () {
    var v = grecaptcha.getResponse();
    if(v.length == 0)
    {
        document.getElementById('captcha').innerHTML=" بهمون بگو که ربات نیستی :)";
        captchaValid = false;
        return false;
    }else
    {
        document.getElementById('captcha').innerHTML="هویت تایید شد";
        document.getElementById('captcha').style.color = "green";
        captchaValid = true;
        if ($('#select input').is(":checked")) { serviceInput = $('input[name="service"]:checked').val(); }
        
        if (phoneValid){
            sendAjaxForm();
        }else {
            alert('لطفا فرم را با دقت پر کنید.')
            return false;
        }
        
    }
    
});












// just get 11 number input
var alireza = document.querySelectorAll(".alireza_validator"),i;
// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
        textbox.addEventListener(event, function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            }
        });
    });
}
for (i = 0; i < alireza.length; ++i) {
    alireza[i].maxLength = 11;
    // Restrict input to digits and '.' by using a regular expression filter.
    setInputFilter(alireza[i], function (value) {
        return /^[0-9۰-۹]*$/i.test(value);
    });
}