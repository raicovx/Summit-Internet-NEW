$(document).ready(function(){
    var isFullScreen = false,
        fullScreenButtn = $('.fullScreen'),
        sliderCont = $('.slider');
    $(".dropdown-button").dropdown(); 
     $(".button-collapse").sideNav();
     $('.slider').slider({full_width: true});
    $('.fullScreen').on('click', function(){
        if(isFullScreen){
         fullScreenButtn.css('top', '340px');
             sliderCont.animate({height:"400px"}, 1000);
            sliderCont.toggleClass('fullscreen'); 
        isFullScreen = false;
        }else{
           sliderCont.css('height',''); 
        sliderCont.toggleClass('fullscreen'); 
        isFullScreen = true;
            fullScreenButtn.css('top', '700px');
        }
         
    });
});