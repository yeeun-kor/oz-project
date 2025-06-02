import { BinaryTree } from "./binaryTree.mjs";

//1부터~7까지 꽉 차있는, 포화 이진 트리 만들 예정
//1. 7개의 노드(트리)만들기
let tree1 = new BinaryTree(1);
let tree2 = new BinaryTree(2);
let tree3 = new BinaryTree(3);
let tree4 = new BinaryTree(4);
let tree5 = new BinaryTree(5);
let tree6 = new BinaryTree(6);
let tree7 = new BinaryTree(7);

//2. 연결하기
tree1.setLeftSubTree(tree2);
tree1.setRightSubTree(tree3);
tree2.setLeftSubTree(tree4);
tree2.setRightSubTree(tree5);
tree3.setLeftSubTree(tree6);
tree3.setRightSubTree(tree7);

//3. 트리 출력하기
console.log("루트노드의 오른쪽 자식 : " + tree1.getRightSubTree().getData());

console.log(
  "루트도의 오른쪽 자식의, 왼쪽 노드 : " +
    tree1.getRightSubTree().getLeftSubTree().getData()
);

//* 전위순회 호출
console.log("전위 순회 호출");
tree1.preOrderTraversal(tree1);

//* 중위순회 호출
console.log("중위 순회 호출 ");
tree1.inorderTraversal(tree1);

//* 후후위순회 호출
console.log("후위 순회 호출 ");
tree1.postorderTraversal(tree1);
