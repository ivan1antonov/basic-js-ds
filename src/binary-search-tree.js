const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this._createNode(this.rootNode, newNode);
    }
  }

  _createNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this._createNode(node.left, newNode);
      }
    } else if (newNode.data > node.data) {
      if (!node.right) {
        node.right = newNode;
      } else {
        this._createNode(node.right, newNode);
      }
    }
  }

  _search(node, value) {
    if (!node) {
      return null;
    }
    if (node.data === value) {
      return node;
    } else if (value < node.data) {
      return this._search(node.left, value);
    } else {
      return this._search(node.right, value);
    }
  }

  has(data) {
    return !!this._search(this.rootNode, data);
  }

  find(data) {
    return this._search(this.rootNode, data);
  }

  _deleteNode(node, value) {
    if (!node) return null;

    if (value < node.data) {
      node.left = this._deleteNode(node.left, value);
      return node;
    } else if (value > node.data) {
      node.right = this._deleteNode(node.right, value);
      return node;
    } else {
      // Node with only one child or no child
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }

      // Node with two children: Get the inorder successor (smallest in the right subtree)
      const minValue = this._findMinValue(node.right);
      node.data = minValue;

      // Delete the inorder successor
      node.right = this._deleteNode(node.right, minValue);
      return node;
    }
  }

  _findMinValue(node) {
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  remove(data) {
    this.rootNode = this._deleteNode(this.rootNode, data);
  }

  min() {
    if (!this.rootNode) return null;

    let current = this.rootNode;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (!this.rootNode) return null;

    let current = this.rootNode;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};
