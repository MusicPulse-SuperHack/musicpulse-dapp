// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// @dev https://github.com/OpenZeppelin/openzeppelin-contracts/tree/release-v4.7/contracts/token/ERC721
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "erc6551/src/interfaces/IERC6551Registry.sol";

/**
 * @dev MusicPulseNFT token with storage based token URI management.
 */
contract MusicPulseNFT is ERC721URIStorage {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  address public musicPulseERC6551AccountAddress;
  address public erc6551RegisterAddress;
  address public unlockAddress;
  address public chainId;
  address internal seed;

  constructor(
    address musicPulseERC6551AccountAddress_,
    address erc6551RegisterAddress_,
    address unlockAddress_,
    uint256 chainId_,
    uint256 seed_
  ) ERC721("MusicPulseNFT", "MPN") {
    musicPulseERC6551AccountAddress = musicPulseERC6551AccountAddress_;
    erc6551RegisterAddress = erc6551RegisterAddress_;
    unlockAddress = unlockAddress_;
    chainId = chainId_;
    seed = seed_;
  }

  /**
   * @dev mint a MusicPulseNFT token with tokenURI_ and assign ownership to to_ address.
   * @dev IERC721 Transfer event will be emitted
   * @dev IERC6551Registry AccountCreated event will be emitted
   * @param to_ address to assign ownership to.
   * @param tokenURI_ token URI to assign to the minted token.
   * @return uint256 of the minted token id.
   */
  function mint(
    address to_,
    string memory tokenURI_
  ) public returns (uint256, address) {
    uint256 newItemId = _tokenIds.current();
    _mint(to_, newItemId);
    _setTokenURI(newItemId, tokenURI_);
    _tokenIds.increment();

    // ERC6551
    address accAddress = IERC6551Registry(erc6551RegisterAddress).createAccount(
      musicPulseERC6551AccountAddress,
      chainId,
      address(this),
      newItemId,
      seed,
      ""
    );
    require(
      accAddress != address(0),
      "MusicPulseNFT: ERC6551 account creation failed"
    );

    return (newItemId, accAddress);
  }
}
