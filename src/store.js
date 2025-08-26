import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useBoardStore = create(
  persist((set) => ({
    data: [],

    /** @method addBoard */
    // newTask값을 인자로 받아서 배열에 추가하는 구조
    addBoard: (newTask) => set((state) => ({ data: [...state.data, newTask] })),
    /** @method updateBoard */
    // item값을 인자로 받아서 배열에 추가하는 구조
    updateBoard: (editTask) =>
      set((state) => ({ data: state.data.map((item) => (item.id === editTask.id ? editTask : item)) })),
    removeBoard: (id) => set((state) => ({ data: state.data.filter((item) => item.id !== id) })),
  })),
  {
    name: 'board-storage', // localStorage key 이름
    storage: createJSONStorage(() => localStorage), // JSON 형식으로 저장
  }
);
