$.each($('td.price input'), function(i, inpt){

  $(inpt).delayedObserver(function() {
	 	alert('Ajax call goes here');
  }, 0,5);
});