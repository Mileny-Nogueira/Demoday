//Início do Click Scroll Lento

let $root = $('html, body');
$('a[href^="#"]').click(function() {
    let href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function() {
        window.location.hash = href;
    }); return false;
});

//Fim do Click Scroll Lento

// Menu
function clickMenu(){
    if(menu.style.display == 'block'){
        menu.style.display = 'none';
    }
    else{
        menu.style.display = 'block';
    }
}