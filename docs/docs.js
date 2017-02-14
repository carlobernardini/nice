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
    $('.nice-header .nice-header-toggle').bind('click', function(e){
        var toggle = $(this),
            menu = $('.nice-header-collapse'),
            state = toggle.is('.collapsed');

        toggle.toggleClass('collapsed', !state);
        $('body').toggleClass('expanded', state);
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
                return false;
            });
            copy.bind('click', function(e){
                ClipboardHelper.copyElement(code);
                return false;
            });
        }
    });
});