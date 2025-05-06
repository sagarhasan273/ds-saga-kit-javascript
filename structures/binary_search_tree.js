class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return; // no duplicates
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  search(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  minValueNode(node = this.root) {
    while (node && node.left) {
      node = node.left;
    }
    return node;
  }

  delete(value, root = this.root) {
    if (!root) return null;

    if (value < root.value) {
      root.left = this.delete(value, root.left);
    } else if (value > root.value) {
      root.right = this.delete(value, root.right);
    } else {
      // Node to be deleted found
      if (!root.left) return root.right;
      if (!root.right) return root.left;

      // Node with two children
      const minLargerNode = this.minValueNode(root.right);
      root.value = minLargerNode.value;
      root.right = this.delete(minLargerNode.value, root.right);
    }

    return root;
  }

  inOrderTraversal(node = this.root, result = []) {
    if (!node) return result;
    this.inOrderTraversal(node.left, result);
    result.push(node.value);
    this.inOrderTraversal(node.right, result);
    return result;
  }

  preOrderTraversal(node = this.root, result = []) {
    if (!node) return result;
    result.push(node.value);
    this.preOrderTraversal(node.left, result);
    this.preOrderTraversal(node.right, result);
    return result;
  }

  postOrderTraversal(node = this.root, result = []) {
    if (!node) return result;
    this.postOrderTraversal(node.left, result);
    this.postOrderTraversal(node.right, result);
    result.push(node.value);
    return result;
  }
}

module.exports = BinarySearchTree;
