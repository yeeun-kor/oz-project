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

  //- 왼쪽 자식 노드 제거하는 함수
  removeLeftSubTree() {
    //제거하는 노드는 변수로 반환 필요
    let deletingNode = this.getLeftSubTree();
    //그리고 왼쪽 자식노드를 null로 설정해서 끊어내기
    this.getLeftSubTree(null);
    //제거된 노드는 리턴하기
    return deletingNode;
  }
  //- 오른쪽 자식 노드 제거하는 함수
  removeRightSubTree() {
    //제거하려는 노드는 변수로 반환 필요, 선택 해야하니깐
    let deletingNode = this.getRightSubTree();
    this.getRightSubTree(null);
    return deletingNode;
  }
}

export { BinaryTree };
