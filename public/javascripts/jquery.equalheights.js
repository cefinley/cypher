/**
Equal Height 2.0 

How to use?
jQuery('#content, #secondary-content').equalHeights(); would make the elements with IDs 'content' and 'secondary-content' equal height.
 */

jQuery.fn.equalHeights = function () {
	var height		= 0;
	var maxHeight	= 0;

	// Store the tallest element's height
	this.each(function () {
		height		= jQuery(this).outerHeight();
		maxHeight	= (height > maxHeight) ? height : maxHeight;
	});

	// Set element's min-height to tallest element's height
	return this.each(function () {
		var t			= jQuery(this);
		var minHeight	= maxHeight - (t.outerHeight() - t.height());
		var property	= jQuery.browser.msie && jQuery.browser.version < 7 ? 'height' : 'min-height';

		t.css(property, minHeight + 'px');
	});
};