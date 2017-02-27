angular.module('directivePractice').service('mainService' ,function($http){

this.getSchedule = function(){
  return $http.get('schedule.json');
}

})
