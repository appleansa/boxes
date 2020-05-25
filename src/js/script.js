// form labels
// $('.fly-labels .field .input').focus(function () {
//     $(this).parent().addClass('focus');
// });

// $('.fly-labels .field .input').blur(function () {
//     if (!$(this).val()) {
//         $(this).parent().removeClass('focus');
//     }
// });


// navi toggle

$('.j-toggle-navi').click( function() {
   $('.header-navi').addClass('active');
});

$('.j-navi-close').click(function() {
    $('.header-navi').removeClass('active');
});


