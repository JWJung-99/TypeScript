import Spinner from "@/components/Spinner";
import router from "@/routes";
import useThemeStore from "@/zustand/themeStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

function App() {
  // const { isDarkMode } = useThemeStore();
  // 불필요한 구독 => 렌더링 방지
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  // html에 접근
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <React.Suspense fallback={<Spinner.FullScreen />}>
          <RouterProvider router={router} />
        </React.Suspense>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
