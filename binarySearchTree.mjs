import { BinaryTree } from "./binaryTree.mjs";

class BinarySearchTree {
  // 매개변수인 rootNode값을 처음에는 null
  constructor(rootNode = null) {
    this.root = rootNode;
  }

  //삽입하는 과정
  insert(data) {
    if (this.root == null) {
      this.root = new BinaryTree(data);
      return;
    }

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode != null) {
      parentNode = currentNode;

      if (currentNode.getData() > data) {
        currentNode = currentNode.getLeftSubTree();
      } else if (currentNode.getData() < data) {
        currentNode = currentNode.getRightSubTree();
      } else {
        return;
      }
    }

    let newNode = new BinaryTree(data);

    if (parentNode.getData() > data) {
      parentNode.setLeftSubTree(newNode);
    } else {
      parentNode.setRightSubTree(newNode);
    }
  }
  //검색하는 과정
  search(targetData) {
    let currentNode = this.root;

    while (currentNode != null) {
      if (currentNode.getData() == targetData) {
        return currentNode;
      } else if (currentNode.getData() > targetData) {
        currentNode = currentNode.getLeftSubTree();
      } else {
        currentNode = currentNode.getRightSubTree();
      }
    }

    return null;
  }
  //제거하는 과정(매개변수는 제거할 데이터인 targetData설정)
  remove(targetData) {
    //-1 함수에 사용될 변수 먼저 선언(페이크노드:루트노드를 제거하기 위함. 다른 애들은 다 부모노드가 있는데, 루트노드는 부모 )
    let fakeParentRootNode = new BinarySearchTree(0);
    let parentNode = fakeParentRootNode;
    let currentNode = this.root;
    let deletingNode = null;

    //-2 제거 해야할 데이터 찾기 (targetData찾기)
    while (currentNode != null && currentNode.getData() != targetData) {
      parentNode = currentNode;
      if (currentNode.getData() > targetData) {
        currentNode = currentNode.getLeftSubTree();
      } else {
        currentNode = currentNode.getRightSubTree();
      }
    }
    if (currentNode == null) {
      return;
    }

    //- 3. 제거할 노드 찾았으니, 그 제거노드를 제거하는 기능 구현
    //- 제거 할 노드 값 새로운 변수로 저장
    deletingNode = currentNode;
  }
}

//순서대로 데이터 꼭 맞추어서 넣어주기, 왼쪽으로 내려가는 식으로
//삽입하는 과정정
let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(18);
binarySearchTree.insert(15);
binarySearchTree.insert(10);
binarySearchTree.insert(6);
binarySearchTree.insert(3);
binarySearchTree.insert(8);
binarySearchTree.insert(12);
binarySearchTree.insert(11);
binarySearchTree.insert(31);
binarySearchTree.insert(27);
binarySearchTree.insert(24);
binarySearchTree.insert(20);
binarySearchTree.insert(33);
binarySearchTree.insert(35);
binarySearchTree.insert(37);
binarySearchTree.root.inOrderTraversal(binarySearchTree.root);

//검색기능
console.log("========== Search 6 ==========");
console.log(binarySearchTree.search(6));

console.log("========== Search 1 ==========");
console.log(binarySearchTree.search(1));
