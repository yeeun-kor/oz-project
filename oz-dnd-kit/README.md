# dnd-kit 문제풀이

<br/>
<br/>

## 1. Zustand - store.js의 전역상태 업데이트

### updateBoardType: () => set() 함수 만들기

- 드래그&드랍 기능을 사용하기위해 우리는 `type` 이 바뀌는 형식으로 드래그&드랍 사용
- 해당 보드의 **새로 이동이 되는** `type` 과 보드의 id를 인자로 받아와서 변경해야한다.

<br/>

#### updateBoard : set 함수 동작 구현

```jsx
//기본문법
set((state)=>({}))

//활용
      set((state) => ({ data: state.data.map((item) => (item.id === id ? { ...item, type: newType } : item)) })),
```

- 인자로 기존의 상태인 `state` 를 받아온다.
- 여기에서 `state` 는 전역관리저장소에 보관되어 있는 넓은 상태값이다.

<br/>

### reorderItems : () => set() 생성

```jsx
  reorderItems: (newData) => set({ data: newData }), //????? state왜 안해줌? 그동안의 패턴이랑 다르네
```

<br/>
<br/>

## 2. App.jsx : dnd-kit로직 구현

1. `dnd-kit library`를 사용하려면 `DndContext` 로 범위 감싸주기.

```jsx
import { DndContext } from '@dnd-kit/core';

function App() {
  return (
  <DndContext>
  {...app의 기존 요소들}
  </DndContext>
  );
}
```

1. DndContext 기능 생성 `sensors`, `collisionDetection`, `onDragStart`, `onDragEnd`, `onDragOver`

   ```jsx
   //sensors
   const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

   //드래그 시작,끝,오버 하는 핸들링 함수 생성
   const handleDragStart = (e) => {
     console.log('dragStart');
   };
   const handleDragEnd = (e) => {
     console.log('dragEnd ');
   };
   const handleDragOver = (e) => {
     console.log('dragOver');
   };
   ```

2.DndContext 에 기능 할당하기

```jsx
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={rectIntersection}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
    >
 (...)

```

## 3. Board.jsx : useDroppable 리액트훅 사용 (반환값은 객체)

```jsx
const { setNodeRef, isOver } = useDroppable();
```

- 칸반보드의 드롭을 허용하기 위해 useDroppable을 사용합니다:
