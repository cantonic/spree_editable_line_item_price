$.each($('td.qty input'), function(i, inpt){

  $(inpt).delayedObserver(function() {

    var id = $(this).attr('id').replace("order_line_items_attributes_", "").replace("_quantity", "");
    id = "#order_line_items_attributes_" + id + "_id";

    jQuery.ajax({
      type: "POST",
      url: "/admin/orders/" + $('input#order_number').val() + "/line_items/" + $(id).val(),
      data: ({_method: "put", "line_item[quantity]": $(this).val()}),
      complete: function(resp){
        $('#order-form-wrapper').html(resp.responseText);
      }
    });

  }, 0,5);
});

$.each($('td.price input'), function(i, inpt){

  $(inpt).delayedObserver(function() {

    var id = $(this).attr('id').replace("order_line_items_attributes_", "").replace("_price", "");
    id = "#order_line_items_attributes_" + id + "_id";

    jQuery.ajax({
      type: "POST",
      url: "/admin/orders/" + $('input#order_number').val() + "/line_items/" + $(id).val(),
      data: ({_method: "put", "line_item[price]": $(this).val()}),
      complete: function(resp){
        $('#order-form-wrapper').html(resp.responseText);
      }
    });

  }, 0,5);
});