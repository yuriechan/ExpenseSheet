$(document).ready(function(){
var counter = 0;

//btn to add one row
  $(document).on('click','#add-table', function(){
    //set row number to 1
    var counter = $('table tr').length - 1;

    $(document).on('click','#delete-table', function(){
      counter = counter - 1;
    })

  var newRow = $('<tr>');
  var cols = '';

  cols += '<td><span id = "add-table" class="glyphicon glyphicon-plus"></span><input class = "pickdate"/></td>'
  cols += '<td><input name = "name'+ counter +'"></td>';
  cols += '<td><input name = "type '+ counter +'"></td>';
  cols += '<td><input name = "cost '+ counter +'"></td>';
  cols += '<td><button type = "button" id = "delete-table">DELETE</button></td>'

  newRow.append(cols);
  newRow.insertAfter($(this).parents().closest('tr'));

  counter = counter + 1;
    })

//display calendar when user input date
    $(document).on('focus','.pickdate', function(){
      $('.pickdate').datepicker();
    });

//btn to delete one row
    $(document).on('click','#delete-table', function(){
      $(this).closest('tr').remove();
      calculateTotalCost();
    })

//calculate total cost input
    $(document).on('change', 'input[name^="cost"]', function(){
      calculateTotalCost();
    })

  });



    function calculateTotalCost(){
      var totalCost = 0;
      $(document).find('input[name^="cost"]').each(function (){
        totalCost += +$(this).val();
        console.log(totalCost);
      })

      $('#total-cost').text('Monthly Total:' + totalCost);
    }
