$('.hamburger').on('click', function(event) {
	event.preventDefault();
	$('nav ul').slideToggle();
});