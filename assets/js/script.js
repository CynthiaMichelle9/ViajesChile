/* Utilizando toggle en tarjetas para ocultar el texto haciendo click en el título */
$(document).ready(function() {
    $(".card-title").on("click", function() {
        $(this).parent().find(".card-text").toggle();
    });
});


