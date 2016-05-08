console.log('locked/loaded');

( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });
} )( jQuery );

$( window ).resize(function() {
 var maxWidth = $(window).width();
 var maxHeight = $(window).height();
 $('.welcome, .intro, .sign-up').css({
        width: maxWidth,
        height: maxHeight
});   
});