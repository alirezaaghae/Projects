tailwind.config = {
    theme: {
        extend: {
            colors: {
                clifford: '#da373d',
                admoonBlue: '#7282FF'
            },
            backgroundImage: {
                'sec1': "url('./assets/images/sec1_img.jpg')",
                'sec1-res': "url('./assets/images/res_sec1_img.jpg')",
                'sec3-1': "url('./assets/images/sec3_item1.png')",
            }
        }
    }
}

var emailValid = false;
var emailInput = '';

function sendAjaxForm() {
    // $('form').submit(function () {
    //     return false;
    // });
    var name, location, phone, service;
    var a = 'ld';
    email = emailInput;

    $('#send_button').addClass('pending');
    $('#send_button').prop('disabled', true);
    $.ajax({
        url: 'form.php',
        method: "POST",
        data: {
            'ajax': 'true',
            'in': '5' + a,
            'name': email,
        },
        success: function (result) {
            $('#send_button').removeClass('pending');
            $('#download_section').removeClass('showForm')
        }
    });
}

$('form').submit(function () {
    return false;
});
// insert data cover form

$("#email_input").on( "keyup", function() {
    if ($(this).is(":invalid") || this.value.length < 3) {
        emailValid = false;
        $('#send_button').addClass('disabled')
    } else {
        $('#send_button').removeClass('disabled');
        emailInput = $(this).val();
        emailValid = true;
    };
});

$('#send_button').click(function () {
    sendAjaxForm();
});


$('#hamburger_menu').click(function () {
    $('#navbar').addClass('open')
});

$('#navbar').click(function () {
    $('#navbar').removeClass('open')
});


$('#header_button').click(function (){
    $('#download_section').addClass('showForm')
});
