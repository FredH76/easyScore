angular.module('app.controllers')

.controller('scoreCtrl', function (playerFactory) {
    var vm = this;

    vm.playerList = [];
    vm.playerScores = [];
    var score = {
        point: null,
        total: null
    };
    vm.nbRound = [];



    /******************************      FUNCTION DECLARATION             ************************/
    vm.reset = reset;
    vm.addPlayer = addPlayer;
    vm.deletePlayer = deletePlayer;
    vm.addRound = addRound;
    vm.updateScore = updateScore;

    scoreInit = {
        point: 0,
        total: 0
    };
    vm.nbRound[0] = 0;

    /******************************         INITIALISATION                ************************/
    // create avatar list
    var avatarList = ["avatar1.jpg",
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
        var player = new playerFactory.Player("new player");
        var randomIndex = Math.floor(Math.random() * (avatarList.length));
        player.avatar = avatarList[randomIndex];
        avatarList.splice(randomIndex, 1); // remove the selected avatar from list

        // add player in list
        player.num = vm.playerList.length;
        player.score = [];
        vm.playerList.push(player);

        // create empty playerScore for each round
        for (var round = 0; round <= vm.nbRound.length; round++) {
            vm.playerList[player.num].score[round] = {};
            vm.playerList[player.num].score[round].point = 0;
            vm.playerList[player.num].score[round].total = 0;
        }
    }

    /******************************         DELETE PLAYER                ************************/
    function deletePlayer(item, index) {
        // reintroduce avatar at the proper position
        var avatIndex = parseInt(item.avatar.slice(6)) - 1;
        avatarList.splice(avatIndex, 0, item.avatar);

        // remove player from the list
        vm.playerList.splice(index, 1);

        //remove player Score
        //vm.player

    }


    /******************************         ADD ROUND                ************************/
    function addRound() {

        // add an empty score for each player
        for (var playerNum = 0; playerNum < vm.playerList.length; playerNum++) {
            vm.playerList[playerNum].score[vm.nbRound.length] = {};
            vm.playerList[playerNum].score[vm.nbRound.length].point = 0;
            vm.playerList[playerNum].score[vm.nbRound.length].total = 0;
        }

        vm.nbRound.push(vm.nbRound.length);
    }


    /******************************         UPDATE SCORE                ************************/
    function updateScore(round, playerNum) {
        var coucou = "coucou";
    }


    /******************************         CLEAR ROUND                ************************/
    function reset() {
        vm.playerList = [];
        vm.nbRound = [];
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