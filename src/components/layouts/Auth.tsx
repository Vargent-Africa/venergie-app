import { Navigate, Outlet } from "react-router";

import { useAuth } from "contexts/authContext";

const AuthLayout = () => {
	const { authUser } = useAuth();
	if (authUser) return <Navigate to="/" />;

	return <Outlet />;
};

export default AuthLayout;
