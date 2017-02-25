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
            $('#loading').hide();
        }, 1000);
    });
});

$('.nz_ex_btn').on('click', function(e){
    var p_id = $(this).text();
    $('#protein_id').focus();
    $('#protein_id')[0].parentElement.MaterialTextfield.change(p_id);
});
$('.nz_back_btn').on('click',function(e){
    $('#protein_id').val('');
    $('#page-2').hide();
    $('#page-1').fadeIn();
});
