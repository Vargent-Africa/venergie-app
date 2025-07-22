import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CartProvider } from "contexts/cartContext";
import { AuthProvider } from "contexts/authContext.tsx";
import { GlobalStyle } from "styles";

import App from "./App.tsx";
import { disableReactDevTools } from "./disableReactDevTools";

if (process.env.NODE_ENV === "production") {
	disableReactDevTools();
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 0,
		},
	},
});

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<BrowserRouter>
					<GlobalStyle />
					<CartProvider>
						<Routes>
							<Route path="/*" element={<App />} />
						</Routes>
					</CartProvider>
					<ToastContainer
						theme="dark"
						position="top-right"
						hideProgressBar={false}
						transition={Zoom}
					/>
					<ReactQueryDevtools />
				</BrowserRouter>
			</AuthProvider>
		</QueryClientProvider>
	</StrictMode>
);
