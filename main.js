const btnHref = document.querySelector('header button');
btnHref.addEventListener('click', () => location.href = "https://github.com/michaljanik99?tab=repositories");


$(window).on("scroll", function () {
    let windowHeigth = $(window).height();
    let windowWidth = $(window).width();
    let scrollValue = $(this).scrollTop();

    const $aboutMe = $('.about_me');
    const aboutMeFromTop = $aboutMe.offset().top;
    const aboutMeHeight = $aboutMe.outerHeight()

    const $html = $('.project.html');
    const htmlFromTop = $html.offset().top;
    const htmlHeight = $html.outerHeight()

    const $css = $('.project.css');
    const cssFromTop = $css.offset().top;
    const cssHeight = $css.outerHeight()

    const $js = $('.project.js');
    const jsFromTop = $js.offset().top;
    const jsHeight = $js.outerHeight()


    if (scrollValue >= aboutMeFromTop + ((aboutMeHeight / 2) - windowHeigth) && windowWidth >= 1600) {
        $('.about_me .sentence').each(function (index, element) {

            $(element).css({
                opacity: `1`,
                transition: `1s ${(index+1)/2}s linear`
            })
        })
    }
    if (scrollValue >= htmlFromTop + ((htmlHeight / 2) - windowHeigth) && windowWidth >= 1600) {
        $html.css({
            left: 0
        })
    }
    if (scrollValue >= cssFromTop + ((cssHeight / 2) - windowHeigth) && windowWidth >= 1600) {
        $css.css({
            left: 0
        })
    }








});