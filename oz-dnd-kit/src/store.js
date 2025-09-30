import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useBoardStore = create(
  persist(
    (set) => ({
      data: [],
      addBoard: (newBoard) => set((state) => ({ data: [...state.data, newBoard] })),
      removeBoard: (id) => set((state) => ({ data: state.data.filter((item) => item.id !== id) })),
      updateBoard: (updatedBoard) =>
        set((state) => ({
          data: state.data.map((item) => (item.id === updatedBoard.id ? updatedBoard : item)),
        })),
      updateBoardType: (id, newType) =>
        set((state) => ({ data: state.data.map((item) => (item.id === id ? { ...item, type: newType } : item)) })),
      reorderItems: (newData) => set({ data: newData }), //????? state왜 안해줌? 그동안의 패턴이랑 다르네
    }),
    {
      name: 'board-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
