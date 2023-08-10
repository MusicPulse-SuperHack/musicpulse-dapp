// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// @dev https://github.com/OpenZeppelin/openzeppelin-contracts/tree/release-v4.7/contracts/token/ERC721
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/**
 * @dev MusicPulseNFT token with storage based token URI management.
 */
contract MusicPulseNFT is ERC721URIStorage {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  constructor() ERC721("MusicPulseNFT", "MPN") {}

  /**
   * @dev mint a MusicPulseNFT token with tokenURI_ and assign ownership to to_ address.
   * @param to_ address to assign ownership to.
   * @param tokenURI_ token URI to assign to the minted token.
   * @return uint256 of the minted token id.
   */
  function mint(address to_, string memory tokenURI_) public returns (uint256) {
    uint256 newItemId = _tokenIds.current();
    _mint(to_, newItemId);
    _setTokenURI(newItemId, tokenURI_);

    _tokenIds.increment();
    return newItemId;
  }
}
