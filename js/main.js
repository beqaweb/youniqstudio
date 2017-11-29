var siteHeaderHeight;

function adjustHeightOnScroll() {
    if (siteHeaderHeight
        && siteHeaderHeight > window.scrollY) {
        $(document.body).removeClass('header-small');
        // $('.stndart-logo').slideDown(632.0754716981132);
        // $('.small-logo').slideUp(1000);
    } else {
        $(document.body).addClass('header-small');
        // $('.stndart-logo').slideUp(632.0754716981132);
        // $('.small-logo').slideDown(1000);
    }
}

window.addEventListener('load', function () {
    siteHeaderHeight = Number(getComputedStyle(document.querySelector('header.site-header')).height.split('px')[0]);

    adjustHeightOnScroll();
});

window.addEventListener('scroll', function () {
    adjustHeightOnScroll();
});