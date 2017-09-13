$("#sidebar span.prime-learn-more").bind('click', function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    $(".free-with-prime").toggle();
});
$("#sidebar div.free-with-prime a.close-prime").bind('click', function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    $(".free-with-prime").hide();
});
