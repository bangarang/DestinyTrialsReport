'use strict';

angular.module('trialsReportApp')
  .controller('HeaderCtrl', function ($scope, $location, currentAccount, $sce, locationChanger) {
    $scope.mapModal = {
      content: $sce.trustAsHtml(
        '<div class="map-modal">' +
          '<div class="map-modal__heatmap">' +
            '<img class="img-responsive" src="' + $scope.currentMap.heatmapImage + '" alt="Heatmap">' +
          '</div>' +
        '</div>'
      )
    };

    $scope.searchMainPlayerbyName = function (name, platform) {
      if (angular.isDefined(name)) {
        $location.path((platform ? '/ps/' : '/xbox/') + name);
      }
    };

    function updateUrl($scope, locationChanger) {
      if ($scope.fireteam[0] && $scope.fireteam[1] && $scope.fireteam[2]) {
        if ($scope.fireteam[2].membershipId) {
          var platformUrl = $scope.platformValue ? '/ps/' : '/xbox/';
          locationChanger.skipReload()
            .withoutRefresh(platformUrl + $scope.fireteam[0].name + '/' +
            $scope.fireteam[1].name + '/' + $scope.fireteam[2].name, true);
        }
      }
    }

    $scope.searchPlayerbyName = function (player, name, platform, index) {
      if (angular.isUndefined(name)) {
        return;
      }
      var url = '/Platform/Destiny/SearchDestinyPlayer/' + (platform ? 2 : 1) + '/' + name + '/';
      return currentAccount.getAccount(url)
        .then(function (player) {
          player.isTeammate = true;
          currentAccount.getPlayerCard(player).then(function (teammate) {
            $scope.$evalAsync( $scope.fireteam[index] = teammate );
            currentAccount.compareLastMatchResults($scope.fireteam[index], $scope.fireteam[0].activities.lastThree);
            updateUrl($scope, locationChanger)
          });
        });
    };

    $scope.refreshInventory = function (fireteam) {
      angular.forEach(fireteam, function (player, index) {
        currentAccount.refreshInventory($scope.fireteam[index]).then(function (teammate) {
          $scope.$evalAsync( $scope.fireteam[index] = teammate );
        });
      });
    };
  });
