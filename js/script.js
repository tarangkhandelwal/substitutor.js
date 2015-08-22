
$("#substitutorBtn").click(function(){
    var rawString=$("#rawString").val();
    var jsonString=$("#jsonToSubstitute").val();    
    var result=substitutor(rawString, (new Function('return ' + jsonString))());
 $("#result").html(result);

});


// Code for shrinking header on scroll
$(window).scroll(function(){

 var shrinkHeader =70;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('.navbar').addClass('shrink');
        }
        else {
            $('.navbar').removeClass('shrink');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});

$(function(){
      $(".headingText").typed({
          strings: ["", " ^1000 Define, ^1000 Substitute ^1500 and Create. "],
          typeSpeed: 20,
          backDelay: 500,
          callback: function() {
            $(".headingSubText").css("opacity","1");
            $(".header").css("opacity","1");
          },

    });
  });