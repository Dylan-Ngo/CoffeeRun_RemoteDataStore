(function (window) {
    'use strict';
    var App = window.App || {};
    
    var FirebaseConfig = {
        apiKey: "AIzaSyCUvb4PdG5QwjRLVP_0AYA1qLVgAwamP8M",
        authDomain: "coffeerun-d31d2.firebaseapp.com",
        databaseURL: "https://coffeerun-d31d2-default-rtdb.firebaseio.com",
        projectId: "coffeerun-d31d2",
        storageBucket: "coffeerun-d31d2.appspot.com",
        messagingSenderId: "903229398175",
        appId: "1:903229398175:web:960f4ed78b2e768a3856aa",
        measurementId: "G-46H958Z893"
    };
    App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(App.FirebaseConfig);
    window.App = App;
  
})(window);
