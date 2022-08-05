var Users = artifacts.require("Users")
var PropertyRegistry = artifacts.require("PropertyRegistry")

module.exports = function(deployer, network, accounts) {
  deployer.deploy(PropertyRegistry, {from: accounts[0]});
  deployer.deploy(Users, {from: accounts[0]});
};

