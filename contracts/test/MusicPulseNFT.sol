// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import {Utils} from "./utils/Utils.sol";
import "../src/MusicPulseNFT.sol";

contract MusicPulseNFTTest is Test {
  Utils internal utils;
  MusicPulseNFT internal mpNFT;

  address payable[] internal users;
  address internal owner;
  address internal creator;

  function setUp() public {
    utils = new Utils();
    users = utils.createUsers(2);
    owner = users[0];
    creator = users[1];
    mpNFT = new MusicPulseNFT();
  }

  function testMint() public {
    uint256 newTokenId = mpNFT.mint(creator, "tokenURI");
    assertEq(newTokenId, 0);
  }
}
