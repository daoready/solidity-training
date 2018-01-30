
var VoteToken = artifacts.require("VoteToken");

module.exports = function(deployer, network, accounts) {

    var token;

    var voters = [
        '0x278929A8F0d3fa1Dd56c65a2AbB920026E7AD593',
        '0x236F4449719C6f14F626475376fba934a3Cdc49c',
        '0x39ceeef61304af20969656c9fdb90ffd6d9f963d',
        '0xD11450d46a5A9851adc7317bE68158f7BBCb2d70',
        '0x990ee64cC48E93BCF8844FDB13060E620BD70FDD',
        '0x46b7aca9b4604bb58b549e796ca51078f34760cc'
    ]

    deployer.then(function() {
       return VoteToken.deployed();
    }).then(function(instance) {
        token = instance;
        return token.transfer(voters[0], 1000);
    }).then(function(result) {
        return token.transfer(voters[1], 1000);
    }).then(function(result) {
        return token.transfer(voters[2], 1000);
    }).then(function(result) {
        return token.transfer(voters[3], 1000);
    }).then(function(result) {
        return token.transfer(voters[4], 1000);
    }).then(function(result) {
        return token.transfer(voters[5], 1000);
    }).then(function(result) {
        console.log('Transfers done');
    });

};
