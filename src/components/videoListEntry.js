angular.module('video-player')
.directive('videoListEntry', function() {
  return {

    scope: {
      video: '<',
      onClick: '<'
    },
    restrict: 'E',
    controller: function() {},
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
