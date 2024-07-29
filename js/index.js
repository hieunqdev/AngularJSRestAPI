// Tạo 1 module angularjs mới tên là myApp
var app = angular.module('myApp', []);

app.controller('MainController', function($scope, $http){
    // GET: lấy dữ liệu
    $http.get('http://localhost:8080/users')
        .then(function(response) {
            $scope.students = response.data;
        })

    $scope.student = {
        id: 1,
        maSv: 1,
        ten: "",
        tuoi: 24
    }

    // POST
    $scope.submitData = function() {
        $http.post('http://localhost:8080/user', $scope.student)
            .then(function(response) {
                console.log('tao thanh cong');
            })
    }

    // PUT
    $scope.updateData = function() {
        $http.put('http://localhost:8080/user', $scope.student)
        console.log('sua thanh cong');
    }

    // DELETE
    $scope.deleteData = function(id) {
        $http({
            method: 'DELETE',
            url: 'http://localhost:8080/user',
            params: { id: id }
        })
        console.log('xoa thanh cong');
    }

})