$(document).ready(function(){

  $('#add-table').click(function (){
    $('table').append('<tr><td><span id = "add-table" class="glyphicon glyphicon-plus"></span><input /></td><td><input /></td><td><input /></td><td><input /><button id = "delete-table">DELETE</button></td></tr>')
  })

  $('#delete-table').click(function (){
    $(this).parents('tr').remove();
  })



  });
