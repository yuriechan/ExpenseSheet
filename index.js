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

  cols += '<td><span id = "add-table" class="glyphicon glyphicon-plus"></span><input class = "pickdate"/></td>';
  cols += '<td><input name = "name'+ counter +'"></td>';
  cols += '<td><select name = "type'+ counter +'" class="form-control js-example-tags"><option selected="selected">FOOD</option><option>CLOTHES</option><option>HEALTH</option></select></td>';
  cols += '<td><input name = "cost'+ counter +'"/></td>';
  cols += '<td><button type = "button" id = "delete-table">DELETE</button></td>';

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

//enable custom value in drop down box for TYPE
    $(".js-example-tags").select2({
      tags: true
  });
    // $(document).on('click', '.js-example-tags', function(){
    //   $(this).select2({
    //     tags: true;
    //   })
    // })
  });



    function calculateTotalCost(){
      var totalCost = 0;
      $(document).find('input[name^="cost"]').each(function (){
        totalCost += +$(this).val();
        console.log(totalCost);
      })

      $('#total-cost').text('Monthly Total:' + totalCost);
    }
