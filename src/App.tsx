import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

//Layouts
import RootLayout from "components/layouts/Root";
import MainLayout from "components/layouts/Main";
import Persist from "./components/layouts/Persist";
import DashboardLayout from "./components/layouts/User";

//Misc
import Loader from "components/misc/Loader";

//Auth
const Login = lazy(() => import("containers/Auth/Login"));
const Signup = lazy(() => import("containers/Auth/Signup"));

//Items
const ItemLists = lazy(() => import("containers/Items/itemList"));
const Item = lazy(() => import("containers/Items/item"));
const Checkout = lazy(() => import("containers/Items/checkout"));

//Dashboard
const Dashboard = lazy(() => import("containers/Dashboard/dashboard"));

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<RootLayout />}>
				<Route element={<Persist />}>
					<Route element={<DashboardLayout />}>
						<Route
							path="dashboard"
							element={
								<Suspense fallback={<div>Loading...</div>}>
									<Dashboard />
								</Suspense>
							}
						/>
					</Route>
				</Route>
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
					<Route
						path="auth/login"
						element={
							<Suspense fallback={<Loader />}>
								<Login />
							</Suspense>
						}
					/>
					<Route
						path="auth/signup"
						element={
							<Suspense fallback={<Loader />}>
								<Signup />
							</Suspense>
						}
					/>
				</Route>
			</Route>
		</Routes>
	);
};

export default App;
