pragma solidity >=0.7.0 <0.9.0;

import "./Property.sol";
contract PropertyRegistry {
    mapping(address => address) public userToContract;
  
    function deploy() public {
        Property contractAddress = new Property(msg.sender);
        userToContract[msg.sender] = address(contractAddress);
    }
}