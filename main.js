const btnHref = document.querySelector('header button');
btnHref.addEventListener('click', () => location.href = "https://github.com/michaljanik99?tab=repositories");
const textArea = document.querySelector('.about_me h1');
const txt = 'TWORZE NOWOCZESNE STRONY INTERNETOWE';







let windowHeigth = $(window).height();
let windowWidth = $(window).width();
let a = $('.about_me').offset().top;
let b = $('.about_me').outerHeight();




$(window).on("scroll", function () {
    let windowHeigth = $(window).height();
    let windowWidth = $(window).width();
    let scrollValue = $(this).scrollTop();
    let f = true
    indexText = 0;
    const $aboutMe = $('.about_me');
    const aboutMeFromTop = $aboutMe.offset().top;
    const aboutMeHeight = $aboutMe.outerHeight()

    if (scrollValue >= aboutMeFromTop + ((aboutMeHeight / 2) - windowHeigth)) {
        $('.about_me .sentence').each(function (index, element) {

            $(element).css({
                opacity: `1`,
                transition: `1s ${(index+1)/2}s linear`
            })
        })





    }






});