
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
      $("#home").typed({
        strings: ["Home Content : ^1000 Here we will display the content describing a bit about library. i.e How stuff Works.^2000"],
        typeSpeed: 10,
        showCursor : true,
        cursorChar : "|",
        loop : true
      });
  });