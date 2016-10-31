// Application module
var crudApp = angular.module('crudApp', ['AdalAngular']).config([
    '$httpProvider',
    'adalAuthenticationServiceProvider',
    function ($httpProvider, adalAuthenticationServiceProvider) {
        adalAuthenticationServiceProvider.init({
            clientId: '3e139393-efa0-4522-9dea-2a1e92f04737',
            redirectUri: 'http://localhost/salespipelineportal'
            /*
            instance: 'https://login.microsoftonline.com/',
            tenant: 'common',
            clientId: '3e139393-efa0-4522-9dea-2a1e92f04737',
            extraQueryParameter: 'nux=1',
            cacheLocation: 'localStorage'
            */
        }, $httpProvider);
    }
]);

crudApp.controller("DbController", ['$scope', '$http', 'adalAuthenticationService', function ($scope, $http, adalAuthenticationService) {
    $scope.login = function () {
        adalAuthenticationService.login();
    };

    $scope.logout = function () {
        adalAuthenticationService.logOut();
    };

    // Function to get employee details from the database
    getInfo();
    function getInfo() {
        // Sending request to EmpDetails.php files 
        $http.post('databaseFiles/empDetails.php').success(function (data) {
            // Stored the returned data into scope 
            $scope.details = data;
        });
    }

    // Setting default value of Contributions 
    $scope.projInfo = { 'q2fy16': '0', 'statusq2fy16': '0', 'contributionq2fy16': '0', 'q3fy16': '0', 'statusq3fy16': '0', 'contributionq3fy16': '0', 'q4fy16': '0', 'statusq4fy16': '0', 'contributionq4fy16': '0', 'q1fy17': '0', 'statusq1fy17': '0', 'contributionq1fy17': '0' };


    // Enabling show_form variable to enable Add Projects button
    $scope.show_form = true;
    // Function to add toggle behaviour to form
    $scope.formToggle = function () {
        $('#projForm').slideToggle();
        $('#editForm').css('display', 'none');
    }
    $scope.insertInfo = function (info) {
        console.log( info);
        $http.post('databaseFiles/insertDetails.php', { "ru": info.ru, "solution": info.solu, "companyname": info.comp, "status": info.status, "q2fy16": info.q2fy16, "statusq2fy16": info.statusq2fy16, "contributionq2fy16": info.contributionq2fy16, "q3fy16": info.q3fy16, "statusq3fy16": info.statusq3fy16, "contributionq3fy16": info.contributionq3fy16, "q4fy16": info.q4fy16, "statusq4fy16": info.statusq4fy16, "contributionq4fy16": info.contributionq4fy16, "q1fy17": info.q1fy17, "statusq1fy17": info.statusq1fy17, "contributionq1fy17": info.contributionq1fy17, "dealsize": info.deal, "comm": info.comm, "userinfo":info.userinfo}).success(function (data) {
            if (data == true) {
                getInfo();
                $('#projForm').css('display', 'none');
            }
        });
    }
    $scope.deleteInfo = function (info) {
        $http.post('databaseFiles/deleteDetails.php', { "del_id": info.proj_id }).success(function (data) {
            if (data == true) {
                getInfo();
            }
        });
    }

    $scope.currentUser = {};
    $scope.editInfo = function (info) {
        $scope.currentUser = info;
        $('#projForm').slideUp();
        $('#editForm').slideToggle();
    }
    $scope.UpdateInfo = function (info) {
        console.log( info);
        info.userinfo = $scope.userInfo.profile.name;
        console.log('CURRENT USER: ',$scope.userInfo);
        $http.post('databaseFiles/updateDetails.php', { "id": info.proj_id, "ru": info.proj_ru, "solution": info.proj_solu, "companyname": info.proj_comp, "status": info.proj_status, "q2fy16": info.proj_q2fy16, "statusq2fy16": info.proj_statusq2fy16, "contributionq2fy16": info.proj_contributionq2fy16, "q3fy16": info.proj_q3fy16, "statusq3fy16": info.proj_statusq3fy16, "contributionq3fy16": info.proj_contributionq3fy16, "q4fy16": info.proj_q4fy16, "statusq4fy16": info.proj_statusq4fy16, "contributionq4fy16": info.proj_contributionq4fy16, "q1fy17": info.proj_q1fy17, "statusq1fy17": info.proj_statusq1fy17, "contributionq1fy17": info.proj_contributionq1fy17, "deal": info.proj_deal, "comm": info.proj_comm, "userinfo":info.userinfo}).success(function (data) {
            $scope.show_form = true;
            if (data == true) {
                getInfo();
            }
        });
    }
    $scope.updateMsg = function (proj_id) {
        console.log( proj_id);
        $('#editForm').css('display', 'none');
    }
}]);