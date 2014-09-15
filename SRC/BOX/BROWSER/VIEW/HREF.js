FOR_BOX(function(box) {
	'use strict';

	/**
	 * get href.
	 */
	box.HREF = METHOD({

		run : function(uri) {
			//OPTIONAL: uri

			return HREF((box.boxName === CONFIG.defaultBoxName ? '' : box.boxName + '/') + (uri === undefined ? '' : uri));
		}
	});
});
