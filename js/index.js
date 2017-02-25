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
    $('#loading').fadeIn();
    var graph_div = document.getElementById('graph_div');
    var ProtVista = require('ProtVista');
    var instance = new ProtVista({
      el: graph_div,
      uniprotacc: $('#protein_id').val()
    });
    instance.getDispatcher().on("ready", function(obj) {
        setTimeout(function () {
            $('#page-1').hide();
            $('#page-2').fadeIn();
        }, 2000);
    });
});
