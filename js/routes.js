angular.module('app.routes', [])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.home', {
        url: '/home',
        views: {
            'tab-home': {
                templateUrl: 'templates/tab-home.html',
                controller: 'tab-homeCtrl'
            }
        }
    })

    .state('tab.score', {
        url: '/score',
        views: {
            'tab-score': {
                templateUrl: 'templates/tab-score.html',
                controller: 'tab-scoreCtrl',
                controllerAs: 'tabScrVM'
            }
        }
    })

    .state('tab.chats', {
        url: '/chats',
        views: {
            'tab-chats': {
                templateUrl: 'templates/tab-chats.html',
                controller: 'ChatsCtrl'
            }
        }
    })

    .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
            'tab-chats': {
                templateUrl: 'templates/chat-detail.html',
                controller: 'ChatDetailCtrl'
            }
        }
    })

    .state('score-sheet', {
        cache: true,
        url: '/scoring',
        templateUrl: 'templates/score-sheet.html',
        controller: 'score-sheetCtrl',
        controllerAs: 'scrVM',
        params: {
            gameType: GAME_LIST[0],
            playerList: [],
        }

    });



    $urlRouterProvider.otherwise(function ($injector, $location) {
        var $state = $injector.get("$state");
        $state.go("tab.score");
    });
  }]);

/************************************** TEMPLATES **********************************************
    .state('tabsController.eventSceneList', {
        cache: false,
        url: '/EventSceneList',
        views: {
            'tab6': {
                templateUrl: 'templates/eventSceneList.html',
                controller: 'eventSceneListCtrl',
                controllerAs: 'evtScnLVM'
            }
        }
    })
    
    .state('add_editGroup', {
        url: '/AddEditGroup',
        templateUrl: 'templates/add_editGroup.html',
        controller: 'add_editGroupCtrl',
        controllerAs: 'add_edtGrpVM',
        params: {
            create: false,
            uid: -1
        }
*/