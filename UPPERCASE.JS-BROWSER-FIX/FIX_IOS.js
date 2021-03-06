/**
 * Fix for iOS Safari.
 */
RUN(function() {
	'use strict';

	var
	// load fix script.
	loadFixScript = function(name) {
		LOAD(BROWSER_CONFIG.fixScriptsFolderPath + '/IOS/' + name + '.js');
	};

	global.IOS = {};

	/**
	 * fix BROWSER.
	 */

	// fix INFO.
	loadFixScript('BROWSER/INFO');
	
	/**
	 * fix BROWSER/DOM.
	 */

	// fix INPUT.
	loadFixScript('BROWSER/DOM/TAG/INPUT');
	
	// fix TEXTAREA.
	loadFixScript('BROWSER/DOM/TAG/TEXTAREA');
});
