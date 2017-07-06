angular.module('app.controllers')

.controller('score-sheetCtrl', function ($stateParams, $ionicHistory, $timeout, playerFactory) {
    var vm = this;

    vm.playerList = [];
    vm.nbRound = [];
    vm.curGame = null;

    /******************************      FUNCTION DECLARATION            ************************/
    vm.goBack = goBack;
    //vm.addPlayer = addPlayer;
    //vm.deletePlayer = deletePlayer;
    vm.addRound = addRound;
    vm.setFocus = setFocus;
    vm.updateScore = updateScore;
    vm.resetScore = resetScore;

    /******************************         INITIALISATION               ************************/
    vm.curGame = $stateParams.gameType;
    vm.playerList = $stateParams.playerList;
    resetScore();


    /********************************************************************************************/
    /*                              PUBLIC FUNCTIONS DECLARATION
    /********************************************************************************************/

    /*********************                  GO BACK                             *****************/
    function goBack() {
        $backView = $ionicHistory.backView();
        $backView.go();
    }


    /******************************         DELETE PLAYER         *******************************
    function deletePlayer(item, index) {
        // reintroduce avatar at the proper position
        var avatIndex = parseInt(item.avatar.slice(6)) - 1;
        avatarList.splice(avatIndex, 0, item.avatar);

        // remove player from the list
        vm.playerList.splice(index, 1);

        //remove player Score
        //vm.player

    }*/


    /******************************         ADD ROUND                ***************************/
    function addRound() {

        // add an empty score for each player
        for (var playerNum = 0; playerNum < vm.playerList.length; playerNum++) {
            vm.playerList[playerNum].score[vm.nbRound.length] = {};
            vm.playerList[playerNum].score[vm.nbRound.length].point = 0;
            vm.playerList[playerNum].score[vm.nbRound.length].total = vm.playerList[playerNum].score[vm.nbRound.length - 1].total;
        }

        vm.nbRound.push(vm.nbRound.length);
    }

    /******************************         SET FOCUS                ***************************/
    function setFocus(round, playerNum) {
        var scrID = round + "_" + playerNum;
        //document.getElementById(scrID).focus();
        $timeout(function () {
            document.getElementById(scrID).focus();
        }, 100);
        document.getElementById(scrID).select();
    }

    /******************************         UPDATE SCORE             ***************************/
    function updateScore(round, playerNum) {
        for (var i = round; i < vm.nbRound.length; i++) {
            vm.playerList[playerNum].score[i].total = parseFloat(vm.playerList[playerNum].score[i - 1].total) + parseFloat(vm.playerList[playerNum].score[i].point);
        }
    }


    /******************************         CLEAR ROUND                *************************/
    function resetScore() {
        vm.nbRound = [];
        vm.nbRound[0] = 0;

        // create empty score for round 0
        for (var playerNum = 0; playerNum < vm.playerList.length; playerNum++) {
            vm.playerList[playerNum].score[0] = {};
            vm.playerList[playerNum].score[0].point = 0;
            vm.playerList[playerNum].score[0].total = 0;
        }
    }

});