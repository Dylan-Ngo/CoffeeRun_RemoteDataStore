(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    class RemoteDataStore {
        constructor(url) {
            console.log('running the RemoteDataStore constructor.');
            if (!url) { throw new Error('No remote URL supplied.'); }
            this.serverUrl = url;
        }
        add(key, val) { 
            return $.post(this.serverUrl, val, function (serverResponse) {
                console.log(serverResponse);
            }); 
        }

        get(key, cb) { 
            return $.get(this.serverUrl + '/' + key, function (serverResponse) {
                if (cb) {
                    console.log(serverResponse);
                    cb(serverResponse);
                }
            }); 
        }

        getAll(cb) {
            return $.get(this.serverUrl, function (serverResponse) {
                if (cb) {
                    console.log(serverResponse);
                    cb(serverResponse);
                }
            });
        }

        remove (key) {
            return $.ajax(this.serverUrl + '/' + key, { type: 'DELETE' });
        }

        // static runTests(ds) {
        //     ds.add('m@bond.com', 'tea');
        //     ds.add('james@bond.com', 'espresso');
        //     console.log(ds.getAll());
        //     ds.remove('james@bond.com');
        //     console.log('After removing james@bond.com' + ds.getAll());
        //     console.log(ds.get('m@bond.com'));
        //     console.log('Trying to get the removed james@bond.com gets...' + ds.get('james@bond.com'));
        // }
    }
    
    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
})(window);