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
const Login = lazy(() => import("containers/Auth/login"));
const Signup = lazy(() => import("containers/Auth/signup"));

//Items
const ItemLists = lazy(() => import("containers/Items/itemList"));
const Item = lazy(() => import("containers/Items/item"));
const Checkout = lazy(() => import("containers/Items/checkout"));
const OrderReceived = lazy(() => import("containers/Items/orderReceived"));

//Dashboard
const Dashboard = lazy(() => import("containers/Dashboard/dashboard"));
const OrderHistory = lazy(() => import("containers/Orders/orderHistory"));
const Profile = lazy(() => import("containers/Profile/profile"));

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
						<Route
							path="order-history"
							element={
								<Suspense fallback={<div>Loading...</div>}>
									<OrderHistory />
								</Suspense>
							}
						/>
						<Route
							path="profile"
							element={
								<Suspense fallback={<div>Loading...</div>}>
									<Profile />
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
						path="items/order-received"
						element={
							<Suspense fallback={<Loader />}>
								<OrderReceived />
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
