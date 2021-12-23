$(function(){
    $("#snap").click(function(e){
    e.preventDefault();

    $("body").css("overflow", "hidden");

    var idOkienka = $(this).attr("data-okienkoId");
    $(idOkienka).fadeIn("fast");

    // Zamknięcie okienka
    $(idOkienka).find(".okienko-zamknij").click(function(){
        $(idOkienka).fadeOut("fast", function(){
            $("body").css("overflow", "auto");
        });
    });

    });
    });