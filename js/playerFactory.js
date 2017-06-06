angular.module('app.services')

.factory('playerFactory', function () {

    /*********************************************************************************************/
    /******************************     PLAYER OBJECT DEFINITION          ************************/
    /*********************************************************************************************/
    function Player(name) {
        // PUBLIC PROPERTIES
        this.name = name || "new player";
        this.pseudo = "";
        this.avatar = "";
    }

    var service = {
        //Object declarations
        Player: Player,
        //function declarations
    };

    return service;
});