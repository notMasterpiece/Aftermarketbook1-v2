$( document ).ready(function() {
    Onload();

});


function Onload() {
    initfancybox();
    initSelect2();
    showComments();
    initMenu();
    fotterToBottom();
}


function initfancybox () {

    if ( $(".fancybox").length ) {
        $('.fancybox').unbind('click').bind('click', function (e) {
            e.preventDefault();
            $.fancybox({
                maxWidth: 740,
                maxHeight: 900,
                minWidth: 280,
                type : $(this).attr('data-fancybox-type'),
                href: $(this).attr('data-fancybox-href'),
                fitToView: true,
                fitToViewHeight: false,
                width: 'auto',
                height: 'auto',
                autoSize: false,
                closeClick	: false,
                onComplete  : '',
                openEffect	: 'fade',
                closeEffect	: 'fade',
                padding: 0,
                margin: 10,
                closeBtn: false,
                autoHeight: true,
                afterShow: function() {
                    initfancybox();
                }
            });
        });

    }
}

function initMenu () {
    if( $('#my-menu').length ) {
        $("#my-menu").mmenu({
            clone: true
        });
    }
}


function initSelect2() {
    if( $('.profile-form select').length ) {
        $('.profile-form select').select2();
    }
}



function showComments() {
    var body = $('body'),
        rightComments = $('.right-comments');


    $('.left-comment__count').on('click', function () {
        rightComments.toggleClass('open');
        body.toggleClass('overflow');
    });


    body.on('click', function (e) {

        if ( !$(e.target).is('.left-comment__count') && $('.right-comments.open').length && !$('.right-comments')[0].contains(e.target)) {
            rightComments.removeClass('open');
            body.removeClass('overflow')
        }
    });
}


function fotterToBottom(){

    function setWrapperMinHeight() {
        $('main').css('minHeight', window.outerHeight - $('header').outerHeight() - $('footer').outerHeight());
    }
    setWrapperMinHeight();

    window.onresize = function() {
        setWrapperMinHeight();
    }
};
