$(document).ready(function(){

	$('img:first').addClass('shown');
	$('.name').text('Batman');

});


$('.next').on('click', function(e){
	$('next').addClass('shown');
	$('.name').text('Captain America');

});