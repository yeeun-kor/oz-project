import { AVLTree } from "./avlTree.mjs";

class GabageCollector {
  constructor() {
    // AVLTree 인스턴스 생성
    this.tree = new AVLTree();
  }

  // 빈 메모리 크기 삽입
  insertFreeMemory(size) {
    this.tree.insert(size);
  }

  // 요청한 크기 이상 중 가장 작은 크기의 메모리 찾기 (lower bound)
  searchFreeMemory(requestSize) {
    let node = this.tree.root;
    let candidate = null;

    // 이진 탐색 트리에서 lower bound 탐색 알고리즘
    while (node) {
      if (node.data === requestSize) {
        candidate = node;
        break;
      } else if (node.data > requestSize) {
        // 현재 노드가 요청 크기보다 크면 후보로 저장하고 왼쪽 서브트리 탐색
        candidate = node;
        node = node.left;
      } else {
        // 현재 노드가 요청 크기보다 작으면 오른쪽 서브트리 탐색
        node = node.right;
      }
    }

    if (candidate) {
      // 찾은 후보 노드를 트리에서 삭제
      this.tree.remove(candidate.data);
    }

    return candidate;
  }

  // 사용 후 빈 메모리 재추가
  releaseFreeMemory(size) {
    this.insertFreeMemory(size);
  }
}

const gc = new GabageCollector();
console.log("========== 빈 메모리 영역 초기화 ==========");
gc.insertFreeMemory(64); // 빈 64바이트 삽입
gc.insertFreeMemory(48); // 빈 48바이트 삽입
gc.insertFreeMemory(87); // 빈 87바이트 삽입
gc.insertFreeMemory(13); // 빈 13바이트 삽입
gc.insertFreeMemory(102); // 빈 102바이트 삽입
gc.insertFreeMemory(34); // 빈 34바이트 삽입
gc.insertFreeMemory(61); // 빈 61바이트 삽입
gc.insertFreeMemory(40); // 빈 40바이트 삽입
gc.insertFreeMemory(6); // 빈 6바이트 삽입

let freeMemory1 = gc.searchFreeMemory(64); // 64바이트 메모리
console.log(freeMemory1);
if (freeMemory1) {
  gc.releaseFreeMemory(freeMemory1.data);
}

let freeMemory2 = gc.searchFreeMemory(42); // 48바이트 메모리 획득
console.log(freeMemory2);
if (freeMemory2) {
  gc.releaseFreeMemory(freeMemory2.data);
}
