var h_scroll = 0;
var ProtVista = require('ProtVista');
var dialog = document.querySelector('dialog');
dialogPolyfill.registerDialog(dialog);
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
  var prot_id = $('#protein_id').val();
  if( prot_id == ''){
    $('#error_text').text('The textbox is empty, please insert the protein ID.');
    dialog.showModal();
  }else{
    $('#loading').fadeIn();
    var graph_div = document.getElementById('graph_div');
    var instance = new ProtVista({
      el: graph_div,
      uniprotacc: prot_id
    });
    instance.getDispatcher().on("ready", function(obj) {
        setTimeout(function () {
            $('#page-1').hide();
            $('#page-2').fadeIn();
            $('#loading').hide();
        }, 1000);
    });
  }
});

$('#close_error').on('click',function(){
  dialog.close();
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
$('.nz_plus_btn').on('click', function(){
    $('#extra_info').fadeToggle();
});
