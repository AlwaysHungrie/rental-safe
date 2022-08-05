var Users = artifacts.require("Users")
var PropertyRegistry = artifacts.require("PropertyRegistry")

module.exports = function(deployer) {
  deployer.deploy(PropertyRegistry);
  deployer.deploy(Users);
};

