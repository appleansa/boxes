// form labels
$('.fly-labels .field .input').focus(function () {
    $(this).parent().addClass('focus');
});

$('.fly-labels .field .input').blur(function () {
    if (!$(this).val()) {
        $(this).parent().removeClass('focus');
    }
});


// navi toggle

$('.j-toggle-navi').click( function() {
   $('.header-navi').addClass('active');
});

$('.j-navi-close').click(function() {
    $('.header-navi').removeClass('active');
});


  var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
         0: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          navigationHide: true,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }

    });



  
  if ($("#city").length ) {
    autocomplete(document.getElementById("city"), countries);
  }



  // custom select
// Iterate over each select element
$('select.select').each(function() {

    // Cache the number of options
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;

    // Hides the select element
    $this.addClass('select-hidden');

    // Wrap the select element in a div
    $this.wrap('<div class="selectbox"></div>');

    // Insert a styled div to sit over the top of the hidden select element
    $this.after('<div class="select"></div>');

    // Cache the styled div
    var $styledSelect = $this.next('div.select');

    // Show the first select option in the styled div
    $styledSelect.html('<span>'+$this.children('option').eq(0).html()+'</span>');

    // Insert an unordered list after the styled div and also cache the list
    var $list = $('<ul />', {
        'class': 'options'
    }).insertAfter($styledSelect);

    // Insert a list item into the unordered list for each select option
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).html(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    // Cache the list items
    var $listItems = $list.children('li');

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select.active').each(function() {
            $(this).removeClass('active').next('ul.options').hide();
        });
        $(this).toggleClass('active').next('ul.options').toggle();
    });

    // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
    // Updates the select element to have the value of the equivalent option
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        /* alert($this.val()); Uncomment this for demonstration! */
    });

    // Hides the unordered list when clicking outside of it
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});