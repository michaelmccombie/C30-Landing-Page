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
}

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
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});

//Secondary Animation
 $("#branding").mouseenter(function () {
     $("#branding #s1").attr("id","s1-2");
     $("#branding #s2").attr("id","s2-2");
     $("#branding #s3").attr("id","s3-2");
     $("#branding #s4").attr("id","s4-2");
     $("#branding #s5").attr("id","s5-2");
     $("#branding #s6").attr("id","s6-2");
     $("#branding #s7").attr("id","s7-2");
     $("#branding #s8").attr("id","s8-2");
     $("#branding #s9").attr("id","s9-2");
     $("#branding #s10").attr("id","s10-2");
     $("#branding #s11").attr("id","s11-2");
 });
 $("#marketing").mouseenter(function () {
     $("#marketing #circle1").attr("id","circle1-2");
	 $("#marketing #circle2").attr("id","circle2-2");
     $("#marketing #circle3").attr("id","circle3-2");
     $("#marketing #circle4").attr("id","circle4-2");
     $("#marketing #line1").attr("id","line1-2");
     $("#marketing #line2").attr("id","line2-2");
     $("#marketing #line3").attr("id","line3-2");
     $("#marketing #line4").attr("id","line4-2");
 });
 $("#interactive").mouseenter(function () {
     $("#interactive #st1").attr("id","st1-2");
     $("#interactive #st2").attr("id","st2-2");
     $("#interactive #st3").attr("id","st3-2");
     $("#interactive #st4").attr("id","st4-2");
     $("#interactive #st5").attr("id","st5-2");
 });