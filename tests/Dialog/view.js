var assert = require('chai').assert,
	sinon = require('sinon'),
	Backbone = require('backbone'),

	testContent = require('./content/testcontent1.html'),

	Dialog = require('../../libs/Dialog/view');

suite('testing dialog view', function() {
	setup(function() {
		Backbone.$('#sandbox').html(testContent);
		Dialog.prototype.onDialogButtonClick = sinon.spy(Dialog.prototype, 'onDialogButtonClick');
		this.dialog = new Dialog({el : '.dialog'});
	});

	teardown(function() {
		Dialog.prototype.onDialogButtonClick.restore();
	});

	test('test button before click', function() {
		assert.isFalse(this.dialog.onDialogButtonClick.calledOnce);
	});

	test('test button click', function() {
		var buttonItem = this.dialog.$(this.dialog.ui.dialogButtons).eq(0);
		buttonItem.trigger('click');
		assert.isTrue(this.dialog.onDialogButtonClick.calledOnce);
	});

	test('test before remove', function() {
		assert.isTrue(!!this.dialog.el.parentNode);
	});

	test('test remove', function() {
		var buttonItem = this.dialog.$(this.dialog.ui.dialogButtons).eq(0);
		buttonItem.trigger('click');
		assert.isFalse(!!this.dialog.el.parentNode);
	});

	test('test ok button click', function() {
		var buttonItem = this.dialog.$(this.dialog.ui.okButton).eq(0),
			spy = sinon.spy();
		this.dialog.on('confirm', spy);
		buttonItem.trigger('click');
		assert.isTrue(spy.withArgs('ok').calledOnce);
	});

	test('test cancel button click', function() {
		var buttonItem = this.dialog.$(this.dialog.ui.cancelButton).eq(0),
			spy = sinon.spy();
		this.dialog.on('confirm', spy);
		buttonItem.trigger('click');
		assert.isTrue(spy.withArgs('cancel').calledOnce);
	});

	test('', function() {});
});