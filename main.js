const btnHref = document.querySelector('header button');
btnHref.addEventListener('click', () => location.href = "https://github.com/michaljanik99?tab=repositories");


$(window).on("scroll", function () {
    let windowHeigth = $(window).height();
    let windowWidth = $(window).width();
    let scrollValue = $(this).scrollTop();

    const $aboutMe = $('.about_me');
    const aboutMeFromTop = $aboutMe.offset().top;
    const aboutMeHeight = $aboutMe.outerHeight()

    if (scrollValue > aboutMeFromTop + ((aboutMeHeight / 2) - windowHeigth)) {
        $('.about_me .sentence').addClass('active')



    }


});