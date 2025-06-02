class BinaryTree {
  constructor(data, leftTree = null, rightTree = null) {
    (this.data = data),
      (this.leftSubTree = leftTree),
      (this.rightSubTree = rightTree);
  }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
  }

  getLeftSubTree() {
    return this.leftSubTree;
  }

  getRightSubTree() {
    return this.rightSubTree;
  }

  setLeftSubTree(tree) {
    this.leftSubTree = tree;
  }

  setRightSubTree(tree) {
    this.rightSubTree = tree;
  }
  // 전위순회
  preOrderTraversal(tree) {
    //기저조건
    if (tree == null) return;
    //1. 노드호출
    console.log(tree.data);
    //2. 왼쪽 호출출
    this.preOrderTraversal(tree.getLeftSubTree());
    //3. 오른쪽 호출
    this.preOrderTraversal(tree.getRightSubTree());
  }

  //중위순회
  inorderTraversal(tree) {
    if (tree == null) return;
    //1. 왼쪽 방문
    this.inorderTraversal(tree.getLeftSubTree());
    //2. 루트노드 방문
    console.log(tree.data);
    //3. 오른쪽 방문
    this.inorderTraversal(tree.getRightSubTree());
  }

  //후위순회
  postorderTraversal(tree) {
    if (tree == null) return;
    //1. 왼쪽방문
    this.postorderTraversal(tree.getLeftSubTree());
    //2. 오른쪽방문
    this.postorderTraversal(tree.getRightSubTree());
    //3. 루트노드방문
    console.log(tree.data);
  }
}

export { BinaryTree };
