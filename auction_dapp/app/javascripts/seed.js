Eutil = require('ethereumjs-util');
EcommerceStore = artifacts.require("./Store_Contract.sol");
module.exports = function(callback) {
 current_time = Math.round(new Date() / 1000);
 web3.eth.sendTransaction({
 	from:web3.eth.coinbase,
 	to: '0x4416002797Ba68e4b3C238796A85c50ECD7E5a68',
 	value: web3.toWei(10, "ether")
 })
 //EcommerceStore.deployed().then(function(i) {i.addProductToStore('iphone 5', 'Cell Phones & Accessories', 'QmbcdaAofzCAtkcvzvQZekzFWij63REpG9BRRh2BTgMNx1', 'QmbcdaAofzCAtkcvzvQZekzFWij63REpG9BRRh2BTgMNx1', current_time, current_time + 200, 2*amt_1, 0).then(function(f) {console.log(f)})});
 //EcommerceStore.deployed().then(function(i) {i.addProductToStore('iphone 5s', 'Cell Phones & Accessories', 'QmbcdaAofzCAtkcvzvQZekzFWij63REpG9BRRh2BTgMNx1', 'QmbcdaAofzCAtkcvzvQZekzFWij63REpG9BRRh2BTgMNx1', current_time, current_time + 400, 3*amt_1, 1).then(function(f) {console.log(f)})});
 //EcommerceStore.deployed().then(function(i) {i.addProductToStore('iphone 6', 'Cell Phones & Accessories', 'QmbcdaAofzCAtkcvzvQZekzFWij63REpG9BRRh2BTgMNx1', 'QmbcdaAofzCAtkcvzvQZekzFWij63REpG9BRRh2BTgMNx1', current_time, current_time + 14, amt_1, 0).then(function(f) {console.log(f)})}); 
 //EcommerceStore.deployed().then(function(i) {i.addProductToStore('iphone 6s', 'Cell Phones & Accessories', 'QmbcdaAofzCAtkcvzvQZekzFWij63REpG9BRRh2BTgMNx1', 'QmbcdaAofzCAtkcvzvQZekzFWij63REpG9BRRh2BTgMNx1', current_time, current_time + 86400, 4*amt_1, 1).then(function(f) {console.log(f)})});
 //EcommerceStore.deployed().then(function(i) {i.addProductToStore('iphone 7', 'Cell Phones & Accessories', 'QmbcdaAofzCAtkcvzvQZekzFWij63REpG9BRRh2BTgMNx1', 'QmbcdaAofzCAtkcvzvQZekzFWij63REpG9BRRh2BTgMNx1', current_time, current_time + 86400, 5*amt_1, 1).then(function(f) {console.log(f)})});
 //EcommerceStore.deployed().then(function(i) {i.addProductToStore('Jeans', 'Clothing, Shoes & Accessories', 'QmbcdaAofzCAtkcvzvQZekzFWij63REpG9BRRh2BTgMNx1', 'QmbcdaAofzCAtkcvzvQZekzFWij63REpG9BRRh2BTgMNx1', current_time, current_time + 86400 + 86400 + 86400, 5*amt_1, 1).then(function(f) {console.log(f)})});
 //EcommerceStore.deployed().then(function(i) {i.productIndex.call().then(function(f){console.log(f)})});

}