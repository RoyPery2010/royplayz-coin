const RoyPlayzCoin = artifacts.require("./RoyPlayzCoin.sol");

contract("RoyPlayzCoin", function(accounts) {
	var tokenInstance;
	it("initializes the contract with the correct values", function() {
		return RoyPlayzCoin.deployed().then(function(instance) {
			tokenInstance = instance
			return tokenInstance.name();
		}).then(function(name) {
			assert.equal(name, "RoyPlayzCoin", "has the correct name");
			return tokenInstance.symbol();
		}).then(function(symbol) {
			assert.equal(symbol, "RPC", "has the correct symbol");
			return tokenInstance.standard();
		}).then(function(standard) {
			assert.equal(standard, "RoyPlayzCoin v1.0", "has the correct standard");
		});
	})

	it("allocates the initial supply upon deployment", function() {
		return RoyPlayzCoin.deployed().then(function(instance) {
			tokenInstance = instance;
		return tokenInstance.totalSupply();
		}).then(function(totalSupply) {
			assert.equal(totalSupply.toNumber(), 1000000000, "sets the total supply to 1,000,000,000");
			return tokenInstance.balanceOf(accounts[0]);
		}).then(function(adminBalance) {
			assert.equal(adminBalance.toNumber(), 1000000000, "it allocates the initial supply to the admin account");
		});
	});
	it("transfers token ownership", function() {
		return RoyPlayzCoin.deployed().then(function(instance) {
			tokenInstance = instance;
			return tokenInstance.transfer.call(accounts[1], 99999999999999999999999);
		}).then(assert.fail).catch(function(error) {
			assert(error.message.indexOf(" ") >= 0, "error message must contain revert");
		})
	});
});