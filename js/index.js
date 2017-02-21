
window.onload = function() {
  var yourDiv = document.getElementById('graph_div');
  var ProtVista = require('ProtVista');
  var instance = new ProtVista({
    el: yourDiv,
    uniprotacc: 'P05067'
  });
}
var h_scroll = 0;
console.log($('#container').width());
$('.right-btn').on('click', function(e){
  if(h_scroll < 350) h_scroll += 50;
  $('#container').animate({scrollLeft: h_scroll});
  console.log(h_scroll);
});
$('.left-btn').on('click', function(e){
  if(h_scroll > 0) h_scroll -= 50;
  $('#container').animate({scrollLeft: h_scroll});
  console.log(h_scroll);
});
$('#search').on('click', function(e){
    $('#page-1').fadeOut();
    $('#page-2').fadeIn();
});
