// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductContract {
    struct Product {
        uint id;
        string name;
        uint price; // stored in INR or USD (NOT ETH)
        address owner;
    }

    uint public productCount;
    mapping(uint => Product) public products;

    event ProductAdded(uint indexed id, string name, uint price, address indexed owner);

    function addProduct(string memory _name, uint _price) public {
        require(_price > 0, "Price must be greater than zero");

        products[productCount] = Product({
            id: productCount,
            name: _name,
            price: _price,
            owner: msg.sender
        });

        emit ProductAdded(productCount, _name, _price, msg.sender);
        productCount++;
    }

    function getProduct(uint _id) public view returns (string memory, uint, address) {
        Product memory p = products[_id];
        return (p.name, p.price, p.owner);
    }
}
