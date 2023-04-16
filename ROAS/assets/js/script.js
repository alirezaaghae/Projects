// just get 11 number input
var alireza = document.querySelectorAll(".alireza_validator input"),
    i;
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




// $('.owl-carousel.first').owlCarousel({
//     rtl:true,
//     loop:true,
//     dots: true,
//     autoplay: true,
//     autoplayTimeout: 6000,
//     nav: true,
//     margin: 20,
//     navText : ["<img src='assets/images/right_button.svg' width='54px'>","<img src='assets/images/left_button.svg' width='54px'>"],
//     responsive:{
//       0:{
//           items:1,
//           nav:false,
//           margin: 10
//       },
//       600:{
//           items:2,
//           margin: 30
//       },
//       1000:{
//           items:3,
//       }
//      }
// });



function sendAjaxForm() {
    var age, goingTo, phone;
    var elm = $(this).parent();
    var a = 'ld';
    age = $("input[name='age']:checked").val();
    goingTo = $("input[name='goingTo']:checked").val();
    phone = $('#phone').val();

    $('.InputButton').addClass('pending');
    $('.InputButton').prop('disabled', true);

    // disable all forms when fill the form :|
//     [beforAjax] $('#next_button').addClass('pending');
//     [ajaxSuccess:] $('#next_button').removeClass('pending');$('form').addClass('success');
    $.ajax({
        url: 'form.php',
        method: "POST",
        data: {
            'ajax': 'true',
            'in': '5' + a,
            'age': age,
            'goingTo': goingTo,
            'phone': phone
        },
        success: function (result) {
            $('.InputButton').addClass('disable');
            elm.addClass('success');
            // console.log(result);
            $('.thirdQS').removeClass('show');
            $('.successQS').addClass('show');
            $('.backbutton').hide();
        }
    });

}


$('form').submit(function () {
    return false;
});

// $(function () {
//     $('.menu-icon,.topNavLinks').click(function () {
//         $('.firstQS').addClass('show');
//         $('.secondQS').removeClass('show');
//         $('.backbutton').hide();
//         $('.menu-icon').toggleClass('is-open');
//         $('.topNavLinks').toggleClass('ShowMunu')
//     });
// });

