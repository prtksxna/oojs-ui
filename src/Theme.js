/**
 * Theme logic.
 *
 * @abstract
 * @class
 *
 * @constructor
 * @param {Object} [config] Configuration options
 */
OO.ui.Theme = function OoUiTheme( config ) {
	// Configuration initialization
	config = config || {};
};

/* Setup */

OO.initClass( OO.ui.Theme );

/* Methods */

/**
 * Get a list of classes to be applied to a widget.
 *
 * The 'on' and 'off' lists combined MUST contain keys for all classes the theme adds or removes,
 * otherwise state transitions will not work properly.
 *
 * @param {OO.ui.Element} element Element for which to get classes
 * @return {Object.<string,string[]>} Categorized class names with `on` and `off` lists
 */
OO.ui.Theme.prototype.getElementClasses = function () {
	return { on: [], off: [] };
};

/**
 * Update CSS classes provided by the theme.
 *
 * For elements with theme logic hooks, this should be called any time there's a state change.
 *
 * @param {OO.ui.Element} element Element for which to update classes
 * @return {Object.<string,string[]>} Categorized class names with `on` and `off` lists
 */
OO.ui.Theme.prototype.updateElementClasses = function ( element ) {
	var $elements = $( [] ),
		classes = this.getElementClasses( element );

	if ( element.$icon ) {
		$elements = $elements.add( element.$icon );
	}
	if ( element.$indicator ) {
		$elements = $elements.add( element.$indicator );
	}

	$elements
		.removeClass( classes.off.join( ' ' ) )
		.addClass( classes.on.join( ' ' ) );
};

/**
 * Get the transition duration in milliseconds for dialogs opening/closing
 *
 * The dialog should be fully rendered this many milliseconds after the
 * ready process has executed.
 *
 * @return {number} Transition duration in milliseconds
 */
OO.ui.Theme.prototype.getDialogTransitionDuration = function () {
	return 0;
};