app.controller('adminSectionCtrl', function ($scope, fs) {
    $scope.sections = [];

    fs.getAllSections();
});