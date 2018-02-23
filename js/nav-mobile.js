$(function(){

    // Botón de navegación para móviles
    var $btnNav = $('#btn-nav');
    var $showMenu = $('nav').find('.desktop-menu');

    $btnNav.click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $showMenu.toggleClass('show');
    });

    // Enlaces menú principal
    var $item = $('.menu li');
    var $subItem = $('.menu li ul');

    var $subMenu = $('ul .sub-menu');
    var $subMenuN = $('.sub-menu ul');

    // Enlaces sub menú
    $item.click(function(e){

        var $class = $(this).attr('class');

        if($class === 'sub-menu'){
            $($subMenuN).not($('ul',this)).slideUp('slow').next();
            $(this).children('ul').slideToggle('slow').end();
        } else {
            $($subItem).not($('ul',this)).slideUp('slow').next();
            $(this).children('ul').slideToggle('slow').end();
        }

        e.preventDefault();
        e.stopPropagation();

    });

    // Obtener la url del valor seleccionado y redireccionar
    var go = $('nav a');

    go.click(function(e){

        var $url = $(this).attr('href');
        
        if( $url == '#' ){
            e.preventDefault();
        } else {
            window.location.href = $url;
        }
    });

});
