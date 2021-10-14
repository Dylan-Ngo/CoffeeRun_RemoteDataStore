(function (window) {
    'use strict';

    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]'; // Add a variable for the selector that matches the entire checklist area
    // var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
    var FIREBASE_SERVER_URL = 'https://coffeerun-d31d2-default-rtdb.firebaseio.com';

    var App = window.App;
    var Truck = App.Truck;
    // var DataStore = App.DataStore;
    // var RemoteDataStore = App.RemoteDataStore;
    var FirebaseDataStore = App.FirebaseDataStore;
    var FormHandler = App.FormHandler;
    var Validation = App.Validation;
    var CheckList = App.CheckList;  // Import the CheckList module from the App namespace to a local variable

    // var datastore = new DataStore();
    // var datastore = new RemoteDataStore(SERVER_URL);

    // var truck = new Truck('ncc-1701', datastore);
    var datastore = new FirebaseDataStore(FIREBASE_SERVER_URL);
    var truck = new Truck('ncc-1701', datastore);
    window.truck = truck;

    var checkList = new CheckList(CHECKLIST_SELECTOR);  // Instantiate a new CheckList
    checkList.addClickHandler(truck.deliverOrder.bind(truck));

    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(function(data) {
        return truck.createOrder.call(truck, data)
            .then(function() { checkList.addRow.call(checkList, data); },
            function() { alert('Server unreachable. Try again later.'); }
        );
    });

    formHandler.addInputHandler(Validation.isCompanyEmail);
    truck.printOrders(checkList.addRow.bind(checkList));

    console.log(formHandler);
})(window);
