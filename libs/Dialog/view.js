/**
 * @module views/Dialog
 */

var Backbone = require('backbone'),

	/**
	 * @class
	 * @extends external:Backbone.Marionette.View
	 */
		Dialog = Backbone.Marionette.View.extend(
		/** @lends module:views/Dialog~Dialog.prototype */
		{
			ui : {
				dialogButtons       : '.dialogButton',
				okButton            : '.dialogButton--ok',
				cancelButton        : '.dialogButton--cancel'
			},

			events : {
				'click @ui.dialogButtons' : 'onDialogButtonClick'
			},

			/**
			 * Handles ui.dialogButtons click
			 * @param {Jquery.Event} event
			 */
			onDialogButtonClick : function(event) {
				var target = Backbone.$(event.target);
				switch(true) {
					case target.hasClass(this.ui.okButton.substring(1)):
						this.trigger('confirm','ok');
					break;

					case target.hasClass(this.ui.cancelButton.substring(1)):
						this.trigger('confirm','cancel');
					break;

					default:
					break;
				}
				this.remove();
			}
		}
	);

module.exports = Dialog;
