var knownKeys = ['antivirusy', 'brauzery', 'multimedia', 'grafika'];

$(document).ready(function() {
	var key = 'default';
	var searchParts = window.location.search.replace('?', '').split('&');
	for(var i = 0; i < searchParts.length; i++) {
		var parameter = searchParts[i].split('=');
		if(parameter[0] == 'utm_key') {
			if($.inArray(parameter[1], knownKeys)) {
				key = parameter[1];
			}
		}
	}

	$('.utm_loader').each(function() {
		var block = $(this);
		var dataBlock = block.attr('data-block');
		block.load( "data.html ." + dataBlock + " ." + key);
	});
});