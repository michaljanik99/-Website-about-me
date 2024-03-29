$(document).ready(function () {
    // connect to repo
    const btnHref = document.querySelector('header button');
    btnHref.addEventListener('click', () => location.href = "https://github.com/michaljanik99?tab=repositories");
    // writing function header
    const spnaText = document.querySelector('.welcome h2');
    const txt = "POCZĄTKUJĄCY WEB DEVELOPER";
    let indexText = 0;
    const addLetter = () => {
        spnaText.textContent += txt[indexText];
        indexText++;
        if (indexText === txt.length) clearInterval(indexTyping);
    }
    const indexTyping = setInterval(addLetter, 150);
});

// function of showing elements
$(window).on("scroll", function () {

    // download properties
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

    const $php = $('.project.php');
    const phpFromTop = $php.offset().top;
    const phpHeight = $php.outerHeight()

    const $git = $('.project.git');
    const gitFromTop = $git.offset().top;
    const gitHeight = $git.outerHeight()

    const $sass = $('.project.sass');
    const sassFromTop = $sass.offset().top;
    const sassHeight = $sass.outerHeight()

    const $jquery = $('.project.jquery');
    const jqueryFromTop = $jquery.offset().top;
    const jqueryHeight = $jquery.outerHeight()

    const $python = $('.project.python');
    const pythonFromTop = $python.offset().top;
    const pythonHeight = $python.outerHeight()

    const $firstFutureSection = $('.future:nth-of-type(1) img');
    const firstFutureSectionFromTop = $firstFutureSection.offset().top;
    const firstFutureSectionHeight = $firstFutureSection.outerHeight()

    const $secondFutureSection = $('.future:nth-of-type(4) img');
    const secondFutureSectionFromTop = $secondFutureSection.offset().top;
    const secondFutureSectionHeight = $secondFutureSection.outerHeight()

    // event calling
    // event section about me
    if (scrollValue >= aboutMeFromTop + ((aboutMeHeight / 2) - windowHeigth) && windowWidth >= 1100) {
        $('.about_me .sentence').each(function (index, element) {

            $(element).css({
                opacity: `1`,
                transition: `.5s ${(index+1)/2}s linear`
            })
        })
    }
    if (scrollValue >= htmlFromTop + ((htmlHeight / 2) - windowHeigth) && windowWidth >= 1100) {
        $html.css({
            left: 0
        })
    }
    if (scrollValue >= cssFromTop + ((cssHeight / 2) - windowHeigth) && windowWidth >= 1100) {
        $css.css({
            left: 0
        })
    }
    if (scrollValue >= jsFromTop + ((jsHeight / 2) - windowHeigth) && windowWidth >= 1100) {
        $js.css({
            left: 0
        })
    }
    if (scrollValue >= phpFromTop + ((phpHeight / 2) - windowHeigth) && windowWidth >= 1100) {
        $php.css({
            left: 0
        })
    }
    if (scrollValue >= gitFromTop + ((gitHeight / 2) - windowHeigth) && windowWidth >= 1100) {
        $git.css({
            left: 0
        })
    }
    if (scrollValue >= sassFromTop + ((sassHeight / 2) - windowHeigth) && windowWidth >= 1100) {
        $sass.css({
            left: 0
        })
    }
    if (scrollValue >= jqueryFromTop + ((jqueryHeight / 2) - windowHeigth) && windowWidth >= 1100) {
        $jquery.css({
            left: 0
        })
    }
    if (scrollValue >= pythonFromTop + ((pythonHeight / 2) - windowHeigth) && windowWidth >= 1100) {
        $python.css({
            left: 0
        })
    }
    // event first section future
    if (scrollValue >= firstFutureSectionFromTop + ((firstFutureSectionHeight / 0.5) - windowHeigth) && windowWidth >= 1100) {
        $('.futures img:lt(3)').each(function (index, element) {

            $(element).css({

                animation: ` up 1s ${(index+1)/2}s linear`
            })
        })
    }
    // event second section future
    if (scrollValue >= secondFutureSectionFromTop + ((secondFutureSectionHeight / 0.5) - windowHeigth) && windowWidth >= 1100) {

        $(".futures img").slice(3).each(function (index, element) {

            $(element).css({

                animation: ` up 1s ${(index+1)/2}s linear`
            })
        })
    }


});

$('.nav').click(() => {
    $('.menu').toggleClass('active')
    if ($('.nav i').hasClass('fa-bars')) {
        $('.nav i').removeClass('fa-bars').addClass('fa-arrow-circle-up')
    } else if ($('.nav i').hasClass('fa-arrow-circle-up')) {
        $('.nav i').removeClass('fa-arrow-circle-up').addClass('fa-bars')
    }
})

// fas fa-bars


$(".menu div").click(function () {
    const data = $(this).attr('data-target');

    $('html, body').animate({
        scrollTop: $(data).offset().top
    }, 2000);
});