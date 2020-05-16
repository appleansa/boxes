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



  autocomplete(document.getElementById("city"), countries);



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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZm9ybSBsYWJlbHNcclxuJCgnLmZseS1sYWJlbHMgLmZpZWxkIC5pbnB1dCcpLmZvY3VzKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2ZvY3VzJyk7XHJcbn0pO1xyXG5cclxuJCgnLmZseS1sYWJlbHMgLmZpZWxkIC5pbnB1dCcpLmJsdXIoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCEkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnZm9jdXMnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuLy8gbmF2aSB0b2dnbGVcclxuXHJcbiQoJy5qLXRvZ2dsZS1uYXZpJykuY2xpY2soIGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuaGVhZGVyLW5hdmknKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuJCgnLmotbmF2aS1jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmhlYWRlci1uYXZpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcblxyXG4gIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICB9LFxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgMDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA2MDA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICAgIG5hdmlnYXRpb25IaWRlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTAyNDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gIGF1dG9jb21wbGV0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHlcIiksIGNvdW50cmllcyk7XHJcblxyXG5cclxuXHJcbiAgLy8gY3VzdG9tIHNlbGVjdFxyXG4vLyBJdGVyYXRlIG92ZXIgZWFjaCBzZWxlY3QgZWxlbWVudFxyXG4kKCdzZWxlY3Quc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvLyBDYWNoZSB0aGUgbnVtYmVyIG9mIG9wdGlvbnNcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgbnVtYmVyT2ZPcHRpb25zID0gJCh0aGlzKS5jaGlsZHJlbignb3B0aW9uJykubGVuZ3RoO1xyXG5cclxuICAgIC8vIEhpZGVzIHRoZSBzZWxlY3QgZWxlbWVudFxyXG4gICAgJHRoaXMuYWRkQ2xhc3MoJ3NlbGVjdC1oaWRkZW4nKTtcclxuXHJcbiAgICAvLyBXcmFwIHRoZSBzZWxlY3QgZWxlbWVudCBpbiBhIGRpdlxyXG4gICAgJHRoaXMud3JhcCgnPGRpdiBjbGFzcz1cInNlbGVjdGJveFwiPjwvZGl2PicpO1xyXG5cclxuICAgIC8vIEluc2VydCBhIHN0eWxlZCBkaXYgdG8gc2l0IG92ZXIgdGhlIHRvcCBvZiB0aGUgaGlkZGVuIHNlbGVjdCBlbGVtZW50XHJcbiAgICAkdGhpcy5hZnRlcignPGRpdiBjbGFzcz1cInNlbGVjdFwiPjwvZGl2PicpO1xyXG5cclxuICAgIC8vIENhY2hlIHRoZSBzdHlsZWQgZGl2XHJcbiAgICB2YXIgJHN0eWxlZFNlbGVjdCA9ICR0aGlzLm5leHQoJ2Rpdi5zZWxlY3QnKTtcclxuXHJcbiAgICAvLyBTaG93IHRoZSBmaXJzdCBzZWxlY3Qgb3B0aW9uIGluIHRoZSBzdHlsZWQgZGl2XHJcbiAgICAkc3R5bGVkU2VsZWN0Lmh0bWwoJzxzcGFuPicrJHRoaXMuY2hpbGRyZW4oJ29wdGlvbicpLmVxKDApLmh0bWwoKSsnPC9zcGFuPicpO1xyXG5cclxuICAgIC8vIEluc2VydCBhbiB1bm9yZGVyZWQgbGlzdCBhZnRlciB0aGUgc3R5bGVkIGRpdiBhbmQgYWxzbyBjYWNoZSB0aGUgbGlzdFxyXG4gICAgdmFyICRsaXN0ID0gJCgnPHVsIC8+Jywge1xyXG4gICAgICAgICdjbGFzcyc6ICdvcHRpb25zJ1xyXG4gICAgfSkuaW5zZXJ0QWZ0ZXIoJHN0eWxlZFNlbGVjdCk7XHJcblxyXG4gICAgLy8gSW5zZXJ0IGEgbGlzdCBpdGVtIGludG8gdGhlIHVub3JkZXJlZCBsaXN0IGZvciBlYWNoIHNlbGVjdCBvcHRpb25cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcclxuICAgICAgICAkKCc8bGkgLz4nLCB7XHJcbiAgICAgICAgICAgIHRleHQ6ICR0aGlzLmNoaWxkcmVuKCdvcHRpb24nKS5lcShpKS5odG1sKCksXHJcbiAgICAgICAgICAgIHJlbDogJHRoaXMuY2hpbGRyZW4oJ29wdGlvbicpLmVxKGkpLnZhbCgpXHJcbiAgICAgICAgfSkuYXBwZW5kVG8oJGxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENhY2hlIHRoZSBsaXN0IGl0ZW1zXHJcbiAgICB2YXIgJGxpc3RJdGVtcyA9ICRsaXN0LmNoaWxkcmVuKCdsaScpO1xyXG5cclxuICAgIC8vIFNob3cgdGhlIHVub3JkZXJlZCBsaXN0IHdoZW4gdGhlIHN0eWxlZCBkaXYgaXMgY2xpY2tlZCAoYWxzbyBoaWRlcyBpdCBpZiB0aGUgZGl2IGlzIGNsaWNrZWQgYWdhaW4pXHJcbiAgICAkc3R5bGVkU2VsZWN0LmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICQoJ2Rpdi5zZWxlY3QuYWN0aXZlJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJykubmV4dCgndWwub3B0aW9ucycpLmhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5uZXh0KCd1bC5vcHRpb25zJykudG9nZ2xlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBIaWRlcyB0aGUgdW5vcmRlcmVkIGxpc3Qgd2hlbiBhIGxpc3QgaXRlbSBpcyBjbGlja2VkIGFuZCB1cGRhdGVzIHRoZSBzdHlsZWQgZGl2IHRvIHNob3cgdGhlIHNlbGVjdGVkIGxpc3QgaXRlbVxyXG4gICAgLy8gVXBkYXRlcyB0aGUgc2VsZWN0IGVsZW1lbnQgdG8gaGF2ZSB0aGUgdmFsdWUgb2YgdGhlIGVxdWl2YWxlbnQgb3B0aW9uXHJcbiAgICAkbGlzdEl0ZW1zLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICRzdHlsZWRTZWxlY3QudGV4dCgkKHRoaXMpLnRleHQoKSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICR0aGlzLnZhbCgkKHRoaXMpLmF0dHIoJ3JlbCcpKTtcclxuICAgICAgICAkbGlzdC5oaWRlKCk7XHJcbiAgICAgICAgLyogYWxlcnQoJHRoaXMudmFsKCkpOyBVbmNvbW1lbnQgdGhpcyBmb3IgZGVtb25zdHJhdGlvbiEgKi9cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEhpZGVzIHRoZSB1bm9yZGVyZWQgbGlzdCB3aGVuIGNsaWNraW5nIG91dHNpZGUgb2YgaXRcclxuICAgICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzdHlsZWRTZWxlY3QucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICRsaXN0LmhpZGUoKTtcclxuICAgIH0pO1xyXG5cclxufSk7Il0sImZpbGUiOiJzY3JpcHQuanMifQ==
