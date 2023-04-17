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

// input select 
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);



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

