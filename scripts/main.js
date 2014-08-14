$(document).ready(function (){
$('.nav').click(function(event){
  $(this)
    .addClass('activo')
    .parent()
      .siblings()
        .children('.nav')
          .removeClass('activo');
    seccion = $('.'+event.target.id);
    if (!isActive(seccion)){
      seccion.css({'z-index':'-30','display':'initial'})
      .addClass('animated fadeIn')
        .siblings('section')
          .css({'z-index':'-50','display':'none'});
    }
});

function getZValue(selector) {
  return selector.css('z-index');
}

function isActive(selector) {
  if (getZValue(selector) === '-40' )
    return true;
  else
    return false;
}
});
