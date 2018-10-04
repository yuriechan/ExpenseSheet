$(document).ready(function(){
var counter = 0;
  // $(document).on('click', '#add-table', function (){
  //   $('table').after('<tr><td><span id = "add-table" class="glyphicon glyphicon-plus"></span><input id = "pickdate"/></td><td><input /></td><td><input /></td><td><input /><button id = "delete-table">DELETE</button></td></tr>');
  // })
  //
  // $('#delete-table').click(function (){
  //   $(this).parents('tr').remove();
  // })
  //
  // $('#pickdate').datepicker();

  $(document).on('click','#add-table', function(){
    var counter = $('table tr').length - 1;
    alert(counter)

    $(document).on('click','#delete-table', function(){
      counter = counter - 1;
      console.log(counter);
    })


  var newRow = $('<tr>');
  var cols = '';

  cols += '<td><span id = "add-table" class="glyphicon glyphicon-plus"></span><input id = "pickdate"/></td>'
  cols += '<td><input name = "name'+ counter +'"></td>';
  cols += '<td><input name = "type '+ counter +'"></td>';
  cols += '<td><input name = "cost '+ counter +'"></td>';
  cols += '<td><button type = "button" id = "delete-table">DELETE</button></td>'

  newRow.append(cols);

  newRow.insertAfter($(this).parents().closest('tr'));

  counter = counter + 1;
    })

    $(document).on('click','#delete-table', function(){
      $(this).closest('tr').remove();
    })


  });
