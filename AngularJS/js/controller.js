angular.module('AngularApp', [])
    .controller('IndexController', ['$scope','Members', function ($scope, Members){
//  .controller('IndexController', function ($scope, Members){
        $scope.msg = 'こんにちは。';
        $scope.name = 'たぢさん。';
        $scope.members = Members();
    }])
    .value('Members', function () {
        return [
            {
                first_name: '啓之',
                last_name: '田島',
                birth_place: '群馬',
                gender: '男',
                email: 'tajihiro@jd6.so-net.ne.jp',
                passwd: '123'
            },{
                first_name: '啓介',
                last_name: '轟',
                birth_place: '神奈川',
                gender: '男',
                email: 'ksk@falcons.com',
                passwd: '123'
            },{
                first_name: '修平',
                last_name: '小川',
                birth_place: '青森',
                gender: '男',
                email: 'shuhei@falcons.com',
                passwd: '123'
            },{
                first_name: '克将',
                last_name: '伊原',
                birth_place: '東京',
                gender: '男',
                email: 'katsu@falcons.com',
                passwd: '123'
            }];
    }
);