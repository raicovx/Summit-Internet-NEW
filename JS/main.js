$(document).ready(function(){
    $('html').attr('data-useragent', navigator.userAgent);
    var isFullScreen = false,
        fullScreenButtn = $('.fullScreen'),
        sliderCont = $('.slider'),
        indic = $('.indicators'),
        navBar = $('nav');
        indic.css('bottom', '');
    $(".dropdown-button").dropdown();
     $(".button-collapse").sideNav();
    $('ul.tabs').tabs();
     $('.slider').slider({full_width: true});

    $('.fullScreen').on('click', function(){
        if(isFullScreen){
            $('.welcomeArea').css("marginTop", "");
         fullScreenButtn.css('top', '330px');
         sliderCont.toggleClass('fullscreen');
         isFullScreen = false;
         navBar.show(0).animate({top:"0px"},1000);
            indic.animate({top:'340px'}, 1000);
             sliderCont.animate({height:"400px"}, 1000);
               $('html, body').css({
       'overflow': 'auto',
       'height': 'auto'
           });



}else{
          sliderCont.css('height','');
            indic.css('top','');
          sliderCont.toggleClass('fullscreen');
        isFullScreen = true;
        navBar.animate({top:"-100px"},1000).delay(1000).hide(0);
            $('html, body').css({
    'overflow': 'hidden',
    'height': '100%'
                });
            fullScreenButtn.css('top', '75%');
            $('.welcomeArea').animate({marginTop: '50%'}, 1050);
              indic.animate({top:'750px'},1000);


        }

    });
    $('#dropdown1 li a,.collapsible-body ul li a').on('click', function(){
            var thisClick = $(this).html();
            if(thisClick == 'NBN Plans'){
                $('ul.tabs').tabs('select_tab', 'nbn');
            }else if(thisClick == 'ADSL 2+'){
                $('ul.tabs').tabs('select_tab', 'adsl2');
            }if (thisClick == 'VOIP'){
                $('ul.tabs').tabs('select_tab', 'voip');
            };
    });
    $('#dropdown2 li a, .collapsible-body ul li a').on('click', function(){
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
    $(window).resize(function(){
      $('ul.tabs').tabs();
    });
    $('.scrollspy').scrollSpy();
});
