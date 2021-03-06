pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/math/SafeMath.sol';
import './VoteToken.sol';


contract Voting is ERC223ReceivingContract {

  using SafeMath for uint256;

  VoteToken public voting_token;
  mapping(address => uint256) public votes;
  mapping(uint256 => address) public voters;

  bool public completed = false;
  uint public quorum;
  uint public voters_count = 0;
  uint public vote_result = 0;

  function Voting(VoteToken _voting_token, uint256 _quorum) {
     voting_token = _voting_token;
     quorum = _quorum;
  }

  function tokenFallback(address _from, uint _value, bytes _data) public {
      require(!completed);
      require(_value>0);
      require(msg.sender==address(voting_token));

      if(votes[_from]==0){
        voters[voters_count] = _from;
        voters_count += 1;
      }

      votes[_from] = votes[_from].add(_value);

      if(voters_count==quorum){
        finish();
      }
  }


  function finish() internal {

    uint sum = 0;
    for(uint i=0;i<voters_count;i++){

        address voter = voters[i];
        uint256 vote = votes[voter];
        sum.add(vote);

        voting_token.transfer(voter, vote);
    }

    vote_result = sum / voters_count;

    completed = true;
  }

}