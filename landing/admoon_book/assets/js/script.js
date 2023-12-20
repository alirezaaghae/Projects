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

var nameValid = false;
var nameInput = '';

function sendAjaxForm() {
    // $('form').submit(function () {
    //     return false;
    // });
    var name, location, phone, service;
    var a = 'ld';
    name = nameInput;

    $('#send_button').addClass('pending');
    $('#send_button').prop('disabled', true);
    $.ajax({
        url: 'form.php',
        method: "POST",
        data: {
            'ajax': 'true',
            'in': '5' + a,
            'name': name,
        },
        success: function (result) {
            $('#send_button').removeClass('pending');
            elm.addClass('success');
            $('#sec_6 form').hide();
        }
    });
}

$('form').submit(function () {
    return false;
});
// insert data cover form 

$('#send_button').click(function () {
    sendAjaxForm();
});

