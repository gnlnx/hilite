//
// plugin name: hilite
// by: @gnlnx
// public clone url: git://github.com/gnlnx/hilite.git
//
// Use hilite to show when a yellow background on interesting text.
//
// usage: jQuery( elements ).hilite( options );
// options: { color }
//
//
// Copyright (c) 2009 Omar A Rodriguez
// Licensed under the MIT license
// http://www.opensource.org/licenses/mit-license.php
//
( function( $ ) {
	$.fn.hilite = function( options ) {
		//
		// default settings
		//
		settings = $.extend({
			color: "#ffa"
		}, options );

		//
		// apply background to elements
		//
		this.each( function( i ) {
			var _color_ = settings.color;
			$( this ).hover(
				function() { // over
					$( this ).css( 'background-color', _color_ ); 
				},
				function() { // out
					$( this ).css( 'background-color', '' ); 
				}
			);
		});
	}
})( jQuery );
