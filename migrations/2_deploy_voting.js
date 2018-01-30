
var VoteToken = artifacts.require("VoteToken");
var Voting = artifacts.require("Voting");

module.exports = function(deployer, network, accounts) {

    var token, voting;

    deployer.deploy(VoteToken).then(function() {
        return VoteToken.deployed();
    }).then(function(instance) {
        token = instance;
        return deployer.deploy(Voting, token.address, 6);
    }).then(function() {
        return Voting.deployed();
    }).then(function(instance) {
        voting = instance;
        console.log("Deployed Voting at " + voting.address + " with token at " + token.address);
    });

};
