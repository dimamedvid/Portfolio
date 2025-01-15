$(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
          $('.pageup').fadeIn();
        } else {
          $('.pageup').fadeOut();
        }
    });
  
    $("a[href^='#']").click(function(e){
        e.preventDefault(); // предотвращает стандартное поведение ссылки
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top}, 800);
    });
});
