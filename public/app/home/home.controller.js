angular
.module('app.home')
.controller('HomeController', function($scope, $firebaseArray, Notification){
  var ref = firebase.database().ref('attendance');
  $scope.attending = $firebaseArray(ref);
  console.log("is this working?");
  $scope.rsvp = {
    name: '',
    email: ''
  }

  $scope.submit = function() {
    ref.push($scope.attending);
    $scope.attending = {}
    Notification.success({message: "Thanks for the Reply!"})
  },
