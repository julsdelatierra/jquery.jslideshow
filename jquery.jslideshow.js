// awesome slideshow for whatever
// version 0.5.0a
// (c) 2012 Julian Ceballos [julian@pikhub.com]
// released under the MIT license

(function($){
  $.fn.extend({
    slideshow: function() {
    	var slideshow = this;
    	var container = this.children('.slides');
      	var slides = this.children('.slides').children('.slide');
    	var current_slide = 0;
		var left = 0;
		var width = 0;
		var first = true;
		for(var i = 0; i < slides.length; i++) {
			var slide = $(slides[i]);
			width += slide.width() + 10;
			if (first) {
				first = false;
				left = (slideshow.width() - slide.width()) / 2 - 10;
				container.css('left', left);
			}
		}
		container.css('width', width);
		container.append($('<div>', { 'style': 'clear:both;' }));
		slideshow.prev().css('margin-bottom', slideshow.height() + 20);
		$(document).keyup(function(evt) {
			if (evt.which == 39) {
				next();
			} else if (evt.which == 37 && current_slide > 0) {
				previous();
			}
			return false;
		});
		// Mobile listeners
		var x0 = 0;
		var x1 = 0;
		var y0 = 0;
		var y1 = 0;
		document.addEventListener("touchstart", touchStart, false);
		document.addEventListener("touchmove", touchMove, false);
		document.addEventListener("touchend", touchEnd, false);
		document.addEventListener("touchcancel", touchCancel, false);
		function touchStart(evt) {
			x0 = evt.touches[0].pageX;
			y0 = evt.touches[0].pageY;
			return false;
		};
		function touchMove(evt) {
			x1 = evt.touches[0].pageX;
			y1 = evt.touches[0].pageY;
			return false;
		};
		function touchEnd(evt) {
			if((y1 - y0 > 20) || (y0 - y1 > 20)) return false;
			if (x1 < x0) {
				next();
			} else if(x1 > x0) {
				previous();
			}
			return false;
		};
		function touchCancel(evt) {};
		// control navigation
		function next() {
			if (current_slide < slides.size() - 1) {
				var current = $(slides[current_slide]);
				left -= (current.width() / 2) + 5;
				var next = $(slides[current_slide + 1]);
				left -= (next.width() / 2) + 5;
				container.css('left', left);
				current_slide++;
			}
		}
		function previous() {
			if (current_slide > 0) {
				var current = $(slides[current_slide]);
				left += (current.width() / 2) + 5;
				var next = $(slides[current_slide - 1]);
				left += (next.width() / 2) + 5;
				container.css('left', left);
				current_slide--;
			}
		}
    },
  });
})(jQuery);
