//---------------------------------------------------------
//
// web_avatar.js
// Data: 10/29/2015
//
//---------------------------------------------------------

(function( $ ) {
    $.fn.CreateAvatar = function() {
		this.addClass('wAvatar');
        $('<div>').addClass('pAvatar').html('Avatar').appendTo(this);
		$('<div>').addClass('pPhrase').appendTo(this);
		$('<div>').addClass('pActions').appendTo(this);
		var owner = this;
		$.getJSON("./dialogs/dialog-1.js", function(data){
			console.log('onLoad');
			console.log(data);
			var idRoot = data.root
			$('<div>')
				.addClass('lAvatarCallout')
				.html(data.nodes[idRoot].text)
				.appendTo(".pPhrase");
			for(var action of data.nodes[idRoot].actions){
				$('<div>')
				.addClass('Action')
				.html(action.text)
				.appendTo(".pActions");
			}
		}).fail(function() {
			console.log( "Error: Loading dialog file." );
		});
        return this;
    };
 
}( jQuery ));