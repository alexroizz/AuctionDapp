var Store_Contract = artifacts.require("contracts/Store_Contract.sol");

module.exports = function(deployer) {
 deployer.deploy(Store_Contract);
};