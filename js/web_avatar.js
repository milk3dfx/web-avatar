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
		$('<div>').addClass('pPhrase').html('Phrase').appendTo(this);
		$('<div>').addClass('pActions').html('Actions').appendTo(this);
        return this;
 
    };
 
}( jQuery ));