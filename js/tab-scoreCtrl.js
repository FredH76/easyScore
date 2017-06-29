angular.module('app.controllers')

.controller('tab-scoreCtrl', function ($state, playerFactory) {
    var vm = this;

    vm.playerList = [];
    vm.gameList = [];
    vm.selGame = GAME_LIST[0];
    vm.nbPlayerList = [];
    vm.nbPlayer = 4;
    var avatarList = [];

    /******************************      FUNCTION DECLARATION            ************************/
    vm.startScoring = startScoring;

    /******************************         INITIALISATION               ************************/
    _initGameList();
    _initNbPlayerList();
    avatarList = ["avatar1.jpg",
                    "avatar2.jpg",
                    "avatar3.jpg",
                    "avatar4.jpg",
                    "avatar5.jpg",
                    "avatar6.jpg",
                    "avatar7.jpg",
                    "avatar8.jpg",
                    "avatar9.jpg",
                    "avatar10.jpg",
                    "avatar11.jpg"];

    /********************************************************************************************/
    /*                              PUBLIC FUNCTIONS DECLARATION
    /********************************************************************************************/

    /******************************         ADD NEW PLAYER               ************************/
    function addPlayer() {
        var player = new playerFactory.Player("player_" + vm.playerList.length);
        var randomIndex = Math.floor(Math.random() * (avatarList.length));
        player.avatar = avatarList[randomIndex];
        avatarList.splice(randomIndex, 1); // remove the selected avatar from list

        // add player in list
        player.num = vm.playerList.length;
        player.score = [];
        vm.playerList.push(player);
    }

    /******************************         START SCORING               *************************/
    function startScoring() {
        // reset playList
        vm.playerList = [];

        // create player list
        for (var i = 1; i <= vm.nbPlayer; i++) {
            addPlayer();
        }

        var params = {
            gameType: vm.selGame,
            playerList: vm.playerList,

        };
        $state.go('score-sheet', params);
    }

    /******************************         INIT GAME LIST             *************************/
    function _initGameList() {
        vm.gameList = GAME_LIST;
    } /******************************         INIT NB PLAYER LIST        *************************/
    function _initNbPlayerList() {
        for (var i = 1; i <= NB_MAX_PLAYER; i++)
            vm.nbPlayerList.push(i);
    }

});