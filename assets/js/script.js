$('.header__wrapper__introduction__btn').click(function(e){
    // Removing hashtag of link
    e.preventDefault();
    var id = $(this).attr('href');
        // Return value top
        targetOffset = $(id).offset().top;
        // Verify value of top in console
        console.log(targetOffset);
    // Where do i want animation? 'html' and 'body'
    $('html, body').animate({
        // Who do i want to animate? 'top'
        scrollTop: targetOffset
    }, 500);
});