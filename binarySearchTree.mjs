import { BinaryTree } from "./binaryTree.mjs";

class BinarySearchTree{
    // 매개변수인 rootNode값을 처음에는 null
    constructor(rootNode = null){
        this.root = rootNode;
    }

    insert(data){
        if(this.root == null){
            this.root = new BinaryTree(data);
            return;
        }

        let currentNode = this.root;
        let parentNode = null;

        while(currentNode != null){
            parentNode = currentNode;

            if(currentNode.getData() > data){
                currentNode = currentNode.getLeftSubTree();
            } else if(currentNode.getData() < data){
                currentNode = currentNode.getRightSubTree();
            }else{
                return;
            }
        }

        let newNode = new BinaryTree(data);

        if(parentNode.getData() > data){
            parentNode.setLeftSubTree(newNode);
        } else {
            parentNode.setRightSubTree(newNode);
        }
    }

    search(targetData){
        let currentNode = this.root;

        while(currentNode != null){
            if(currentNode.getData() == targetData){
                return currentNode;
            } else if(currentNode.getData() > targetData){
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