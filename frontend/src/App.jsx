import { RouterProvider } from "react-router-dom";
import router from "./router";
import GlobalStyles from "./styles/Global";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 60 * 1000,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />

            <Toaster
                position="bottom-center"
                gutter={12}
                containerStyle={{ margin: "8px" }}
                toastOptions={{
                    success: {
                        duration: 1500,
                    },
                    error: {
                        duration: 2000,
                    },
                    style: {
                        fontSize: "14px",
                        maxWidth: "500px",
                        padding: "16px 24px",
                        backgroundColor: "var(--color-bg-3)",
                        color: "var(--color-text-2)",
                    },
                }}
            />
        </QueryClientProvider>
    );
}

export default App;
