
var app = angular.module('app.directives', []);

app.directive('popover', ['$compile', function($compile) {
	return {
		scope : true,
		link : function(scope, elem, dirAttrs) {

			var template = jQuery('#'+dirAttrs.popoverTemplate);
			var placement = {
				top		: elem.offset().top + elem.outerHeight(),
				left	: elem.offset().left + (elem.outerWidth()/2)
			};
			var bodyElem = jQuery('body');
			var id = template.attr('id')+'-inst';
			var popover = (jQuery('#'+id).length !== 0) ?
										jQuery('#'+id) :
										false;

			elem.on('click', function() {
				if( ! popover ) {
					popover = jQuery('<div></div>')
										.attr('id', id)
										.addClass('popover')
										.append(template.html())
										.offset(placement)
										.css('transform','translateX(-50%)')
										.css('display','none');
					scope.$apply(function() {
						var content = $compile(popover)(scope);
						elem.parent().append(content);
					});
				}

				if( elem.hasClass('popover-in') ) {
					popover.hide();
					bodyElem.off('click');
					elem.removeClass('popover-in');
				} else {
					popover.show();
					bodyElem.on('click', function (e) {
						if (!jQuery(e.target).is('[popover]') &&
								jQuery(e.target).parents('.popover').length === 0) {
							popover.hide();
							elem.removeClass('popover-in');
							bodyElem.off('click');
						}
					});
					elem.addClass('popover-in');
				}
			});
		}
	};
}]);