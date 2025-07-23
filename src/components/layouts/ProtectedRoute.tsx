import { useAuth } from "contexts/authContext";
import { Navigate, Outlet } from "react-router";
import PageRoutes from "utils/pageRoutes";

export const ProtectedRoute = () => {
	const { authUser, isLoading } = useAuth();

	if (isLoading) return <div>Loading...</div>;
	return authUser ? <Outlet /> : <Navigate to={PageRoutes.itemLists} replace />;
};
