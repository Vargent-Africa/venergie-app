import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

//Layouts
import RootLayout from "components/layouts/Root";
import MainLayout from "components/layouts/Main";

//Misc
import Loader from "components/misc/Loader";

//Items
const ItemLists = lazy(() => import("containers/Items/itemList"));
const Item = lazy(() => import("containers/Items/item"));
const Checkout = lazy(() => import("containers/Items/checkout"));

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<RootLayout />}>
				<Route element={<MainLayout />}>
					<Route
						path="/"
						element={
							<Suspense fallback={<Loader />}>
								<ItemLists />
							</Suspense>
						}
					/>
					<Route
						path="items/:id"
						element={
							<Suspense fallback={<Loader />}>
								<Item />
							</Suspense>
						}
					/>
					<Route
						path="items/checkout"
						element={
							<Suspense fallback={<Loader />}>
								<Checkout />
							</Suspense>
						}
					/>
				</Route>
			</Route>
		</Routes>
	);
};

export default App;
