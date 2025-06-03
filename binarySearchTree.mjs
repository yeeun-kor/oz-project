import { BinaryTree } from "./binaryTree.mjs";
//이진 탐색 트리 과정 (삽입)
//삽입 될 값이 null을 만날때 까지, 숫자를 비교하면서 자리 찾아가기임.
class BinarySearchTree {
    // 매개변수인 rootNode값을 처음에는 null
    constructor(rootNode = null) {
        this.root = rootNode;
    }

    insert(data) {
        if (this.root == null) {
            //1. 이진트리(노드)를 생성하면서, 매개변수 data초기화 . 즉 루트노드 설정
            this.root = new BinaryTree(data);
            return;
        }

        let currentNode = this.root;
        let parentNode = null; //삽입할 데이터를 부모와 연결해야해서, 부모노드 참조해야함.


        //루트노드부터 자식이 없을때까지 계속 비교하면서 내려가야하니 -> 반복문 필요 

        while (currentNode != null) {
            //currentNode가 null이면 자기 위치를 찾는것이니, null이 아닌 경우로 설정해서 계속 비교하여 내려가게끔 반복문 설정하기
            //현재 삽입하려는 데이터(13)

            parentNode = currentNode;
            //초기에는 부모노드(18)과 현재 노드값은 같게 설정. 부모노드로 해야하니깐



            if (currentNode.getData() > data) {
                //만약 삽입하려는값(data)이 현재노드값(getData) 보다 작으면, 왼쪽 노드로 가르키기
                currentNode = currentNode.getLeftSubTree();
            } else if (currentNode.getData() < data) {
                currentNode = currentNode.getRightSubTree();
            } else {
                //값이 같다면? 중복은 허용이 되지 않기 때문에 함수 중단하기
                return;
            }
        }
        //자리 찾았으니, parent노드가 새로 삽일할 데이터를 자식으로 가르키기만 하면 된다. 
        //데이터를 삽입할 새로운 노드 자리 만들기
        let newNode = new BinaryTree(data);

        //해당 자리의 부모노드와 현재 넣을 데이터값 비교하기 
        //비교
        if (parentNode.getData() > data) {
            parentNode.setLeftSubTree(newNode);
        } else {
            parentNode.setRightSubTree(newNode);
        }
    }

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
}

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

console.log("========== Search 6 ==========");
console.log(binarySearchTree.search(6));


console.log("========== Search 1 ==========");
console.log(binarySearchTree.search(1));