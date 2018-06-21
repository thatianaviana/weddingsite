angular
.module('app')
.component('rsvp', {
    controller: 'RsvpController',
    templateUrl: '/app/components/rsvp/rsvp.html',
    bindToController: true //required for $scope to work
})
.controller('RsvpController',function($scope, UserFactory){
    $scope.user = UserFactory;
});
