var ClipboardHelper = {
    copyElement: function ($element)
    {
       this.copyText($element.text())
    },
    copyText:function(text) // Linebreaks with \n
    {
        var $tempInput =  $("<textarea>");
        $("body").append($tempInput);
        $tempInput.val(text).select();
        document.execCommand("copy");
        $tempInput.remove();
    }
};

$(function(){
    $(document).on('click', function(e){
        if (!$(e.target).closest('.dropdown-menu').length) {
            $('.nice-dropdown .dropdown-menu').removeClass('shown');
        }
    });
    $(window).on('scroll', function(){
        var scrollTop = $(this).scrollTop(),
            contentOffset = $('section.nice-container').offset().top,
            sideNav = $('#docs-sections-side');
        if (sideNav.is('*')) {
            var offset = sideNav.offset().top;
            if (scrollTop >= contentOffset && !sideNav.is('.affix')) {
                sideNav.addClass('affix');
            } else if (scrollTop < contentOffset) {
                sideNav.removeClass('affix');
            }
        }
    });
    $('.nice-header .nice-header-toggle').bind('click', function(e){
        var toggle = $(this),
            menu = $('.nice-header-collapse'),
            state = toggle.is('.collapsed');

        toggle.toggleClass('collapsed', !state);
        $('body').toggleClass('expanded', state);
    });
    $('#docs-sections li a').on('click', function(e){
        var section = $(this).attr('href');
        if (section.substring(0, 1) == '#') {
            $('html, body').animate({
                scrollTop: $(section).offset().top - $(section).children('h2').outerHeight() - 20
            }, 500);
            return false;
        }
    });
    $('.nice-dropdown').on('click', '.nice-btn', function(){
        var btn = $(this),
            dd = btn.closest('.nice-dropdown'),
            menu = dd.children('.dropdown-menu');
        var isShown = menu.is('.shown');
        menu.toggleClass('shown', !isShown);
        return false;
    });
    $('.docs-code-wrapper').each(function(){
        var code = $(this).find('code.docs'),
            toggle = $(this).find('.toggle'),
            copy = $(this).find('.copy');
        if (code.outerHeight() > 200) {
            code.addClass('collapsed');
            toggle.bind('click', function(e){
                var isCollapsed = code.is('.collapsed');
                code.toggleClass('collapsed', !isCollapsed);
                toggle.text(
                    isCollapsed ? 'Collapse' : 'Expand'
                )
                return false;
            });
            copy.bind('click', function(e){
                ClipboardHelper.copyElement(code);
                var copyAlert = $('<div />')
                    .addClass('nice-alert info')
                    .text('Code snippet copied to clipboard')
                    .css({
                        zIndex: 999,
                        position: 'fixed',
                        bottom: '-100%',
                        right: '15px'
                    })
                    .appendTo($('body'))
                    .animate({
                        bottom: '15px'
                    }, 500);
                setTimeout(function(){
                    copyAlert.remove();
                }, 3000);

                return false;
            });
        }
    });
});