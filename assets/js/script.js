/* Utilizando toggle en tarjetas para ocultar el texto haciendo click en el título */
$(document).ready(function() {
    $(".card-title").on("click", function() {
        $(this).parent().find(".card-text").toggle();
    });
});


// Script para el desplazamiento suave
$(document).ready(function(){
    $('a[href^="#"]').on('click', function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
});
