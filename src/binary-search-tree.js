const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  // constructor() {
  //   this.head = null;
  // }

  // root() {
  //   return this.head;
  // }

  // add(data) {
  //   this.head = this.addNode(this.head, data);
  // }
  
  // addNode(node, data) {
  //   if (!node) return new Node(data);
  //   if (data === node.data) return node;
  //   if (data < node.data) node.left = this.addNode(node.left, data);
  //   if (data > node.data) node.right = this.addNode(node.right, data);

  //   return node;
  // }

  // has(data) {
  //   return !!this.searchNode(this.head, data);
  // }

  // searchNode(node, data) {
  //   if (!node) return null;
  //   if (node.data === data) return node;

  //   if (data < node.data) return this.searchNode(node.left, data);
  //   return this.searchNode(node.right, data);
  // }

  // find(data) {
  //   return this.searchNode(this.head, data);
  // }

  // remove(data) {
  //   this.head = this.removeNode(this.head, data);
  // }

  // removeNode(node, data){
  //   if (!node) return null;
  //   if (data > node.data) {
  //     node.right = this.removeNode(node.right, data);
  //     return node;
  //   }
  //   if (data < node.data) {
  //     node.left = this.removeNode(node.left, data);
  //     return node;
  //   }
  //   if (!node.left && !node.right) return null;
  //   if (!node.left) {
  //     node = node.right;
  //     return node;
  //   }
  //   if (!node.right) {
  //     node = node.left;
  //     return node;
  //   }
  //   let min = node.right;
  //   while (min.left) min = min.left;
  //   node.data = min.data;
  //   node.right = this.removeNode(node.right, min.data);
  //   return node;
  // }

  // min() {
  //   let letter = this.head;
  //   while (letter.left) {
  //     letter = letter.left;
  //   }
  //   return letter.data;
  // }

  // max() {
  //   let letter = this.head;
  //   while (letter.right) {
  //     letter = letter.right;
  //   }
  //   return letter.data;
  // }
}

module.exports = {
  BinarySearchTree
};