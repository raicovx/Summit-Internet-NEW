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
            sliderCont.css('height','');
            $('.welcomeArea').css("marginTop", "");
         fullScreenButtn.css('top', '340px');
            indic.animate({top:'340px'}, 1000, function(){
             sliderCont.animate({height:"400px"}, 1000);
            });
            sliderCont.toggleClass('fullscreen'); 
        isFullScreen = false;
            $('html, body').css({
    'overflow': 'auto',
    'height': 'auto'
});
        }else{
           sliderCont.css('height',''); 
            indic.css('top','');
          sliderCont.toggleClass('fullscreen'); 
        isFullScreen = true;
            $('html, body').css({
    'overflow': 'hidden',
    'height': '100%'
                });
            fullScreenButtn.css('top', '75%');
            $('.welcomeArea').animate({marginTop: '50%'}, 1050);
            indic.animate({top:'750px'},1000);
        }
         
    });
    $('#dropdown1 li a').on('click', function(){
            var thisClick = $(this).html();
            if(thisClick == 'NBN Plans'){
                $('ul.tabs').tabs('select_tab', 'nbn');
            }else if(thisClick == 'ADSL 2+'){
                $('ul.tabs').tabs('select_tab', 'adsl2');
            }if (thisClick == 'VOIP'){
                $('ul.tabs').tabs('select_tab', 'voip');   
            };
    });
    $('#dropdown2 li a').on('click', function(){
            var thisClick = $(this).html();
            if(thisClick == 'Web Hosting'){
                $('ul.tabs').tabs('select_tab', 'webHosting');
            }else if(thisClick == 'E-Mail'){
                $('ul.tabs').tabs('select_tab', 'email');
            }if (thisClick == 'Domain Names'){
                $('ul.tabs').tabs('select_tab', 'domains');   
            }if(thisClick == 'Spam Filtering'){
                  $('ul.tabs').tabs('select_tab', 'spamFilter');  
            };
    });
    $('.scrollspy').scrollSpy();
});