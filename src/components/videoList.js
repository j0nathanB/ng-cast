angular.module('video-player')
.directive('videoList', function() {
  return {
    scope: {},
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function(){ //check & function binding
      this.videos = exampleVideoData;
      this.onClick = function () {};
    },
    templateUrl: 'src/templates/videoList.html'
  };
});
