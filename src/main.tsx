import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import { CartProvider } from "contexts/cartContext";
import { GlobalStyle } from "styles";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<GlobalStyle />
			<CartProvider>
				<Routes>
					<Route path="/*" element={<App />} />
				</Routes>
			</CartProvider>
		</BrowserRouter>
	</StrictMode>
);
