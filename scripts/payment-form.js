(function (window) {
    'use strict';

    var FORM_SELECTOR = '[data-payment="form"]';
    var App = window.App;

    var FormHandler = App.FormHandler;
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler( function (data) {
        $("#titleHolder").text(data.title);
        $("#usernameHolder").text(data.username);
        $("#thankyoudialog").modal();
    });
    console.log(formHandler);
})(window);