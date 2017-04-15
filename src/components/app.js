angular.module('video-player', [])
.directive('app', function() {
  return {
    scope: {},
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      //console.log(window.exampleVideoData)
      this.selectVideo = function () {};
      this.searchResults = function () {};
      this.currentVideo = {};
      this.videos = [];//exampleVideoData;
    },
    templateUrl: 'src/templates/app.html'
  };
});
