import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

//Layouts
import RootLayout from "components/layouts/Root";
import MainLayout from "components/layouts/Main";
// import Persist from "./components/layouts/Persist";
import DashboardLayout from "./components/layouts/User";
import AuthLayout from "./components/layouts/Auth";
import { ProtectedRoute } from "components/layouts/ProtectedRoute";

//Misc
import Loader from "components/misc/Loader";

//Auth
const Login = lazy(() => import("containers/Auth/Login"));
const Signup = lazy(() => import("containers/Auth/Signup"));

//Items
const ItemLists = lazy(() => import("containers/Items/ItemList"));
const Item = lazy(() => import("containers/Items/Item"));
const Checkout = lazy(() => import("containers/Items/Checkout"));
const OrderReceived = lazy(() => import("containers/Items/OrderReceived"));

//Dashboard
const Dashboard = lazy(() => import("containers/Dashboard/Dashboard"));
const OrderHistory = lazy(() => import("containers/Orders/OrderHistory"));
const Profile = lazy(() => import("containers/Profile/Profile"));

// Info
import AccountCreated from "containers/Info/AccountCreated";
import NotFound from "containers/Info/NotFound";

const App = () => {
	return (
		<Routes>
			<Route element={<RootLayout />}>
				<Route element={<ProtectedRoute />}>
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
					<Route element={<AuthLayout />}>
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
						<Route
							path="account-successful"
							element={
								<Suspense fallback={<Loader />}>
									<AccountCreated />
								</Suspense>
							}
						/>
					</Route>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};

export default App;
