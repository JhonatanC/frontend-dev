$(function(){

    var $btnNav = $('#nav-button');
    var $showMenu = $('.menu');

    $btnNav.click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $showMenu.toggleClass('show');
    });

    function preventStop(e){
        e.preventDefault();
        e.stopPropagation();
    }

    $('.menu li').click(function(e){
        $(this).children('ul').slideToggle('slow');
        preventStop(e);
    })

    $('.menu li ul li').click(function(e){
        $('.menu li ul li ul').not($('ul',this)).slideUp('slow').next();
        //$('.menu li ul li ul').not($(this)).slideUp('slow').next()
        preventStop(e);
    })

    // Obtener la url del valor seleccionado y redireccionar
    var go = $('.menu a');

    go.click(function(e){

        var $url = $(this).attr('href');
        
        if( $url == '#' ){
            e.preventDefault();
        } else {
            window.location.href = $url;
        }
    });

});
