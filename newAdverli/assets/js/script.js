// just get 11 number input
var alireza = document.querySelectorAll(".alireza_validator"),
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

var fields = true;

// $(document).ready(function(){
//     $(".close-bg ,.close-button").on('click', function() {
//         $(".index-page").removeClass('blur');        
//         $(".pop-up").fadeOut("500");
//         $('html').css('overflow','inherit');
//     });
// });


//$(document).ready(function(){
//  $('.owl-carousel-index').owlCarousel({
//      rtl:true,
//      loop:true,
//      dots: false,
//      autoplay: true,
//      autoplayTimeout: 5000,
//      nav: true,
//      margin: 80,
//      navText : ["<div class='owl-next'><img src='assets/images/sample/right-arrow.svg' width='54px'></div>","<div class='owl-prev'><img src='assets/images/sample/left-arrow.svg' width='54px'></div>"],
//      responsive:{
//        0:{
//            items:2,
//            nav:false,
//            margin: 80
//        },
//        600:{
//            items:3,
//            margin: 30
//        },
//        1000:{
//            items:4,
//        }
//       }
//  });
//});


//adverli js 

var itemSelected = '';
var register = false;


function showRegisteredItems() {
    //  hide
    $("#selectItems").addClass("hidden").hasClass("show");
    $("#selectItems").removeClass("show");
    $("#formInputs").addClass("hidden").hasClass("show");
    $("#formInputs").removeClass("show");
    //  show
    $("#registeredItems").addClass("show").not('.show');
    $("#registeredItems").removeClass("hidden");

    $("div.state.inquiry").addClass("checked").not(".checked");
    $("div.state.register").addClass("checked").not(".checked");
    return true;
}

function sendAjaxForm() {
    $('form').submit(function () {
        return false;
    });
    var phone, website;
    var returnerr = 'false';
    var elm = $(this).parent();
    var a = 'ld';
    phone = $('#phone').val();
    website = $('#website').val();

            // page = window.location.href;
            if (phone == '' || phone.length != 11) {
                $('#name').addClass('error');
                returnerr = 'true';
                setTimeout(function () {
                    $('.error').removeClass('error');
                }, 1000);
            }
            if (returnerr == 'true') {
                return false;
            }
    $('#new_next_button').addClass('pending');
    $('#new_next_button').prop('disabled', true);

    // disable all forms when fill the form :|
//     [beforAjax] $('#new_next_button').addClass('pending');
//     [ajaxSuccess:] $('#new_next_button').removeClass('pending');$('form').addClass('success');
    $.ajax({
        url: 'form.php',
        method: "POST",
        data: {
            'ajax': 'true',
            'in': '5' + a,
            'item': itemSelected,
            'phone': phone,
            'website': website
        },
        success: function (result) {
            $('#new_next_button').addClass('disable');
            elm.addClass('success');
            // console.log(result);
            showRegisteredItems();
        }
    });

}

$(document).ready(function () {

    $("#buyButton").mouseover(function () {
        $("div.circle-background").css("transform", "scale(5)")
    }).mouseout(function () {
        $("div.circle-background").css("transform", "scale(1)")
    });


    $(".realitem>div").click(function () {
        itemSelected = $(this).attr('select');
    });

    $("#new_next_button").click(function () {
            if ($(".realitem>div").hasClass("active2") && fields) {
                $("#new_next_button").removeClass("enable");
                sendAjaxForm();
            }else{
                alert('لطفا تمام فیلد هارا پر کنید');
            }
});

$("#selectionCircle").click(function () {
    if ($('#formInputs').hasClass('show')) {
        return ShowSelectItems();
    } else {
        return false;
    }
});
$("#inquiryCircle").click(function () {
if (!$('#formInputs').hasClass('show')) {
    if ($('#registeredItems').hasClass('show')) {
        $("#new_next_button").removeClass("disable");
        return showFormInputs();
    }
} else {
    return false;
}

});

});

$('#phone').on('keyup', function() {
    if ($(this).val().length == 11){
        console.log($(this).val().length);
        enableNextButton();
    }
});

function enableNextButton() {
    $("input").each(function() {
        var element = $(this);
        if (element.val() == "") {
            register = false;
            exit();
        } else{
            register = true;
        }
    });
    $("#new_next_button").removeClass("disable");
    $("#new_next_button").addClass("enable");
    
    
}

// var isValid;

// new edit

  $( ".realitem2" ).hover(
    function() {
      $( '.csections1' ).addClass( "active" );
      $( '.csections2' ).addClass( "active" );
    }, function() {
      $( '.csections2' ).removeClass( "active" );
    }
  );
  $( ".realitem3" ).hover(
    function() {
      $( '.csections1' ).addClass( "active" );
      $( '.csections2' ).addClass( "active" );
      $( '.csections3' ).addClass( "active" );
      $( '.csections4' ).addClass( "active" );
    }, function() {
      $( '.csections2' ).removeClass( "active" );
      $( '.csections3' ).removeClass( "active" );
      $( '.csections4' ).removeClass( "active" );
    }
  );


  $(".realitem1").click(function () {
      $('.realitem .active').removeClass( "active" );
      $(this).addClass("active");
      $( '.csections1' ).addClass( "active2" );
      $( '.csections2' ).removeClass( "active2" );
      $( '.csections3' ).removeClass( "active2" );
      $( '.csections4' ).removeClass( "active2" );
  });

  $(".realitem2").click(function () {
    $('.realitem .active').removeClass( "active" );
    $(this).addClass("active");
    $( '.csections1' ).addClass( "active2" );
    $( '.csections2' ).addClass( "active2" );
    $( '.csections3' ).removeClass( "active2" );
    $( '.csections4' ).removeClass( "active2" );
});

$(".realitem3").click(function () {
    $('.realitem .active').removeClass( "active" );
    $(this).addClass("active");
    $( '.csections1' ).addClass( "active2" );
    $( '.csections2' ).addClass( "active2" );
    $( '.csections3' ).addClass( "active2" );
    $( '.csections4' ).addClass( "active2" );
});