/** A collection of JS code snippets **/

/* Date from Timestamp */
/* date timestamp day month year datestring time epoch */
function dateFromString(timestamp) {
    var dateString = "";
    var newDate = new Date(timestamp);  
    dateString += (newDate.getMonth() + 1) + " / ";
    dateString += newDate.getDate() + " / ";
    dateString += newDate.getFullYear();
    return dateString
}

/* Date from Days Since 1900 */
/* date timestamp day month year datestring time 1900 weird */
function dateFrom1900(daysSince) {
    return new Date(0, 0, daysSince - 1);
}

/* AngularJS Show Material Dialog */
/* angular angularjs material dialog */
/* Notes: Make sure to have $mdDialog and ngMaterial imported */
function showDialog() {
    $mdDialog.show({
        controller: 'YourControllerHere',
        templateUrl: 'HtmlTemplateToLoadHere.html',
        parent: angular.element(document.body), // or something else
        clickOutsideToClose: true,
        fullscreen: false
    });
}
