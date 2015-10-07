'use strict';

angular.module('trialsReportApp')
  .directive('armor', function() {
    return {
      restrict: 'A',
      scope: {
        exoticArmor: '=armor',
        hasExotic: '=hasExotic'
      },
      template: [
        '<div class="row">',
          '<div class="weapon armor col-xs-12">',
            '<div class="weapon__img">',
              '<img class="img-responsive" ng-src="{{\'https://www.bungie.net\' + exoticArmor.definition.icon}}" alt="{{exoticArmor.definition.name}}">',
            '</div>',
            '<div class="weapon__info">',
              '<div class="weapon__title">',
                '<span ng-bind="exoticArmor.definition.name"></span>',
              '</div>',
              '<div class="weapon__perks">',
                '<div class="weapon-perk" ng-repeat="node in exoticArmor.nodes track by $index" bs-popover="{title:node.name,content:node.description}">',
                  '<i class="weapon-perk__icon">',
                    '<img class="img-responsive" ng-src="{{node.icon}}" alt="{{node.name}}">',
                  '</i>',
                '</div>',
              '</div>',
              '<div class="weapon__label" ng-if="!hasExotic">',
                'No exotic armor equipped',
              '</div>',
            '</div>',
          '</div>',
        '</div>'
      ].join('')
    };
});
