/*global angular */

/**
 * Services that persists and retrieves REMINDERs from localStorage
 */
app.factory('reminderStorage', function () {
    'use strict';

    var STORAGE_ID = 'reminders-nnrx';

    return {
        all: function () {
            return JSON.parse(localStorage.getItem(STORAGE_ID) || '{}');
        },

        put: function (reminders) {
            localStorage.setItem(STORAGE_ID, JSON.stringify(reminders));
        },

        get: function(id) {
            var reminders = JSON.parse(localStorage.getItem(STORAGE_ID) || '{}');
            return reminders[id] || {};
        },
    };
});
