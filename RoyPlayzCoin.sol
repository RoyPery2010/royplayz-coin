pragma solidity ^0.5.1;

contract RoyPlayzCoin {
	string public name = "RoyPlayzCoin";
	string public symbol = "RPC";
	string public standard = "RoyPlayzCoin v1.0";
	uint256 public totalSupply;

	 mapping(address => uint256) public balanceOf;

	constructor(uint256 _initialSupply) public {
		balanceOf[msg.sender] = _initialSupply;
		totalSupply = _initialSupply;
	}
	function transfer(address _to, uint256 _value) public returns (bool success) {
		require(balanceOf[msg.sender] >= _value);
	}
}