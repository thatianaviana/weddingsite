angular
.module('app.home',[])
.config(function($stateProvider){
  $stateProvider
  .state({
    name: 'home',
    url: '/',
    controller: 'HomeController',
    templateUrl: 'app/home/home.html'
  })
  .state({
    name: 'home.attending',
    url: '/attending',
    controller: 'HomeController',
    templateUrl: 'app/home/atending.html'
  })

})
