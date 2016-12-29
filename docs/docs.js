$(function(){
    $('.nice-header .nice-header-toggle').bind('click', function(e){
        var toggle = $(this),
            menu = $('.nice-header-menu'),
            state = toggle.is('.collapsed');

        toggle.toggleClass('collapsed', !state);
        $('body').toggleClass('expanded', state);
    });
    $('code').each(function(){
        var code = $(this);
        if (code.outerHeight() > 200) {
            $(this).addClass('collapsed')
                .bind('click', function(e){
                    var isCollapsed = $(this).is('.collapsed');
                    $(this).toggleClass('collapsed', !isCollapsed);
                });
        }
    });
});