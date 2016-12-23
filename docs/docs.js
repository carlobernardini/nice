$(function(){
    $('.nice-header .nice-header-toggle').bind('click', function(e){
        var toggle = $(this),
            menu = $('.nice-header-menu'),
            state = toggle.is('.collapsed');

        toggle.toggleClass('collapsed', !state);
        $('body').toggleClass('expanded', state);
    });
});