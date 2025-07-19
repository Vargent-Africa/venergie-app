import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { CartProvider } from "contexts/cartContext";
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
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<GlobalStyle />
				<CartProvider>
					<Routes>
						<Route path="/*" element={<App />} />
					</Routes>
				</CartProvider>
			</QueryClientProvider>
		</BrowserRouter>
	</StrictMode>
);
