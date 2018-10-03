$(document).ready(function(){

  $(document).on('click', '#add-table', function (){
    $('table').after('<tr><td><span id = "add-table" class="glyphicon glyphicon-plus"></span><input id = "pickdate"/></td><td><input /></td><td><input /></td><td><input /><button id = "delete-table">DELETE</button></td></tr>');
  })

  $('#delete-table').click(function (){
    $(this).parents('tr').remove();
  })

  $('#pickdate').datepicker();


  });
