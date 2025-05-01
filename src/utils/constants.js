export const productContractAddress = "0x29d81557b64A72Be03EE6a9c240E516351e4Dd5F";
export const productABI = [{
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "string",
            "name": "name",
            "type": "string"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }
    ],
    "name": "ProductAdded",
    "type": "event"
},
{
    "inputs": [
        {
            "internalType": "string",
            "name": "_name",
            "type": "string"
        },
        {
            "internalType": "uint256",
            "name": "_price",
            "type": "uint256"
        }
    ],
    "name": "addProduct",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
        }
    ],
    "name": "getProduct",
    "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        },
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        },
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "productCount",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "name": "products",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
        },
        {
            "internalType": "string",
            "name": "name",
            "type": "string"
        },
        {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
        },
        {
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }
    ],
    "stateMutability": "view",
    "type": "function"
}];

export const orderContractAddress = "0x84FE9AEf4a86b3113E756Bc3523cE1445cfD31A0";
export const orderABI = [{
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "buyer",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "seller",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }
    ],
    "name": "ProductPurchased",
    "type": "event"
},
{
    "inputs": [
        {
            "internalType": "address payable",
            "name": "_seller",
            "type": "address"
        }
    ],
    "name": "buyProduct",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
},
{
    "inputs": [],
    "name": "getMyOrders",
    "outputs": [
        {
            "components": [
                {
                    "internalType": "address",
                    "name": "seller",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "internalType": "struct OrderContract.Purchase[]",
            "name": "",
            "type": "tuple[]"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "name": "ordersByBuyer",
    "outputs": [
        {
            "internalType": "address",
            "name": "seller",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
}
];
