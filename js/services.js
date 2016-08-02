app
.service('Authentication', function($http) {
    return {
        login: function(email, password) {
            return $http.get('data/details.json').then(function(data) {
                var status = false;
                angular.forEach(data.data, function(obj) {
                    if(obj.email === email) {
                        console.log(email);
                        if(obj.pass === password) {
                            console.log(password);
                            status = true;
                        }
                    }
                });
                return status;
            });
        },
        signup: function(email, password) {
            if(email == "" || password == "") {
                return false;
            }
            else {
                console.log('Signup Successfull for '+email);
                console.log(email);
                console.log(password); 
                return true;
            }
        },
        emailChange: function(oldEmail, newEmail) {
            return $http.get('data/details.json').then(function(data) {
                var status = false;
                angular.forEach(data.data, function(obj) {
                    if(obj.email == oldEmail) {
                        status = true;
                    }
                });
                return status;
            });
        }
    }
})
.service('testService', function() {
    var temp = {
        asd: "asd",
        zxc: "zxc"
    };
    console.log('Service');
    return temp;
})
;
