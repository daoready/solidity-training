pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/DetailedERC20.sol';
import 'zeppelin-solidity/contracts/token/MintableToken.sol';
import './ERC233Token.sol';

contract VoteToken is ERC233Token, MintableToken, DetailedERC20 {

    function VoteToken() public DetailedERC20('Voting token', 'VOTE', 0){
        mint(msg.sender, 6000);
        finishMinting();
    }

}