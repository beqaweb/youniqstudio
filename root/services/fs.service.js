app.factory('fs', function ($rootScope) {
    $rootScope.fsData = {
        section: []
    };
    var $scope = $rootScope.data;

    var FS = {};
    var firestore = firebase.firestore();

    FS.getAllSections = function () {
        let sections = [];
        // firestore.collection('section'));
    };

    return FS;
});