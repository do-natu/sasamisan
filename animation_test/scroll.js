/**
 *
 */
$(function(){



 $(window).scroll(function () {

	$('.text').text( $(window).scrollTop())

    });


});





$(document).ready(function() {
    $(window).on('load scroll', function() {

        var docHeight = $(document).height();
        var windowHeight = $(window).height();
        var windowPos = $(window).scrollTop();
        var completion = windowPos / (docHeight - windowHeight);

   //console.log(completion);
	var test =completion *100+'%';


$('.star').css('top',test);



    });
});




/*
$(document).ready(function() {
    $(window).on('load scroll', function() {

        var docHeight = $(document).height();
        var windowPos = $(window).scrollTop();
        var windowHeight = $(window).height();
    var windowWidth = $(window).width();
        var completion = windowPos / (docHeight - windowHeight);

    if (docHeight <= windowHeight) {
      $('.star').width(windowWidth);
    } else {
        $('.star').width(completion * windowWidth);
    }

    });
});


*/