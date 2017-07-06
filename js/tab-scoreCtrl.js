angular.module('app.controllers')

.controller('tab-scoreCtrl', function ($state, playerFactory) {
    var vm = this;

    vm.playerList = [];
    vm.gameList = [];
    vm.selGame = GAME_LIST[0];
    vm.nbPlayerList = [];
    vm.nbPlayer = 4;
    vm.newGame = true;
    var avatarList = [];

    /******************************      FUNCTION DECLARATION            ************************/
    vm.goScoring = goScoring;
    vm.reset = reset;

    /******************************         INITIALISATION               ************************/
    _initGameList();
    _initNbPlayer();
    _initAvatarList();

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

    /******************************         GO SCORING               ****************************/
    function goScoring() {

        if (vm.newGame) {
            // reset playList
            vm.playerList = [];

            //reset avatar List
            _initAvatarList();

            // create player list
            for (var i = 1; i <= vm.nbPlayer; i++) {
                addPlayer();
            }
            vm.newGame = false;
        }

        var params = {
            gameType: vm.selGame,
            playerList: vm.playerList,

        };
        $state.go('score-sheet', params);

    }

    /******************************         RESET                     ***************************/
    function reset() {
        vm.newGame = true;
    }

    /******************************         INIT GAME LIST             **************************/
    function _initGameList() {
        vm.gameList = GAME_LIST;
    }

    /******************************         INIT NB PLAYER LIST        **************************/
    function _initNbPlayer() {
        for (var i = 1; i <= NB_MAX_PLAYER; i++)
            vm.nbPlayerList.push(i);
    }

    /******************************         INIT AVATAR LIST        *****************************/
    function _initAvatarList() {
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
    }
});