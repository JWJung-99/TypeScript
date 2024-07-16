import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// setter 함수를 인자로 받아서 객체를 return
const useThemeStore = create(
  persist(
    (set) => ({
      // 객체 내부에는 상태와 상태를 바꾸는 메서드를 정의
      // OS가 다크모드인지 아닌지 확인하는 미디어쿼리
      isDarkMode: window.matchMedia("(prefers-color-scheme: dark)").matches
        ? true
        : false,
      // 이전 상태 값 state를 받아서 새로운 상태를 반환
      toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: "dark-mode",
      storage: createJSONStorage(() => localStorage), // default: localStorage
    }
  )
);

export default useThemeStore;
