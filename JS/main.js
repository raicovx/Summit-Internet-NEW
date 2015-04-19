$(document).ready(function(){
    var isFullScreen = false,
        fullScreenButtn = $('.fullScreen'),
        sliderCont = $('.slider'),
        indic = $('.indicators');
        indic.css('bottom', '');
    $(".dropdown-button").dropdown(); 
     $(".button-collapse").sideNav();
    $('ul.tabs').tabs();
     $('.slider').slider({full_width: true});
    $('.fullScreen').on('click', function(){
        if(isFullScreen){
         fullScreenButtn.css('top', '340px');
            indic.animate({top:'340px'}, 1000, function(){
             sliderCont.animate({height:"400px"}, 1000);
            });
            sliderCont.toggleClass('fullscreen'); 
        isFullScreen = false;
        }else{
           sliderCont.css('height',''); 
            indic.css('top','');
          sliderCont.toggleClass('fullscreen'); 
        isFullScreen = true;
            fullScreenButtn.css('top', '750px');
            indic.animate({top:'750px'},1000);
        }
         
    });
});