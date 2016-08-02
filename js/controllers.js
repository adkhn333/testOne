app
.controller('mainCtrl', function($scope, Authentication) {  
    $scope.user = {
        email: "",
        password: "",
        newEmail: "",
        oldEmail: ""
    };
    $scope.operation = 'Select Any Value...';
    $scope.submit = function() {
        console.log($scope.user);
        if($scope.operation == 'login') {
            Authentication.login($scope.user.email, $scope.user.password).then(function(data) {
                console.log(data);
                if(data) {
                    $scope.status = 'Successfully Login';
                }
                else {
                    $scope.status = 'Incorrect Username or Password';
                }
            });
        }
        else if($scope.operation == 'signup') {
            if(Authentication.signup($scope.user.email, $scope.user.password)) {
                $scope.status = 'Successfully Registered';
            }
            else {
                $scope.status = 'Registeration Failed';
            }
        }
        else if($scope.operation == 'emailChange') {
            Authentication.emailChange($scope.user.oldEmail, $scope.user.newEmail).then(function(data) {
                if(data) {
                    $scope.status = 'Successfully Change Email';
                }
                else {
                    $scope.status = 'No Such Email Exists';
                }
            });
        }
        else {
            $scope.status = 'First Select The Operation From The Dropdown';
        }
    }

    $scope.clearFields = function() {
        $scope.user = {
            email: "",
            password: "",
            newEmail: "",
            oldEmail: ""
        };
        $scope.status = "";
    }

    $scope.showP = function(value) {
        console.log(value);
    }

})
.controller('testCtrlOne', function(testService) {
    console.log(testService);
})
.controller('testCtrlTwo', function(testService) {
    console.log(testService);
})

;