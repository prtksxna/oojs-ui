/**
 * Creates an OO.ui.MenuItemWidget object.
 *
 * @class
 * @extends OO.ui.OptionWidget
 *
 * @constructor
 * @param {Mixed} data Item data
 * @param {Object} [config] Configuration options
 */
OO.ui.MenuItemWidget = function OoUiMenuItemWidget( data, config ) {
	// Configuration initialization
	config = $.extend( { 'icon': 'check' }, config );

	// Parent constructor
	OO.ui.OptionWidget.call( this, data, config );

	// Initialization
	this.$element.addClass( 'oo-ui-menuItemWidget' );
};

/* Inheritance */

OO.inheritClass( OO.ui.MenuItemWidget, OO.ui.OptionWidget );
