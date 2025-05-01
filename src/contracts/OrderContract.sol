// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract OrderContract {
    struct Purchase {
        address seller;
        uint amount;
        uint timestamp;
    }

    mapping(address => Purchase[]) public ordersByBuyer;

    event ProductPurchased(address indexed buyer, address indexed seller, uint amount);

    function buyProduct(address payable _seller) public payable {
        require(msg.value > 0, "Payment required");
        require(_seller != address(0), "Invalid seller");

        _seller.transfer(msg.value);
        emit ProductPurchased(msg.sender, _seller, msg.value);

        ordersByBuyer[msg.sender].push(Purchase({
            seller: _seller,
            amount: msg.value,
            timestamp: block.timestamp
        }));
    }

    function getMyOrders() external view returns (Purchase[] memory) {
        return ordersByBuyer[msg.sender];
    }
}
