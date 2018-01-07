$(function() {
    $(".toggle").on("click",function(e) {
        e.preventDefault(); // do not follow the link
        $(this).next(".spoiler").toggle().addClass("toggled");
    })
});
