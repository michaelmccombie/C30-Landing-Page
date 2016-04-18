

function isElementInViewport(elem) {
    var $elem = $(".animatedSVG");


    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();


    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
};

// Check if it's time to start the animation.
function checkAnimation() {

    var $elem = $('.animatedSVG');
    var $path = $('path');
    var $circle = $('circle');
    var $line = $('line');

    if (isElementInViewport($elem)) {
        // Start the animation
        $path.attr("class","animate");
        $circle.attr("class","animate");
        $line.attr("class","animate");
    }
};

// Capture scroll events
$(window).scroll(function(){

    checkAnimation();
});

//Secondary Animation
 $("#branding").mouseenter(function () {
    $("#branding path").attr("class","animate2");
 });
 $("#branding").mouseleave(function () {
    $("#branding path").attr("class","none");
 });
 $("#marketing").mouseenter(function () {
    $("#marketing path").attr("class","animate2");
    $("#marketing circle").attr("class","animate2");
 });
 $("#marketing").mouseleave(function () {
    $("#marketing path").attr("class","none");
    $("#marketing circle").attr("class","none");
 });
 $("#interactive").mouseenter(function () {
    $("#interactive line").attr("class","animate2");
    $("#interactive path").attr("class","none");
    $("#interactive circle").attr("class","none");
 });
 $("#interactive").mouseleave(function () {
    $("#interactive line").attr("class","none");
    $("#interactive path").attr("class","none");
    $("#interactive circle").attr("class","none");
 });

 
