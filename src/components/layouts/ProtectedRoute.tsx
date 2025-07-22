import { useAuth } from "contexts/authContext";
import { Navigate, Outlet } from "react-router";
import PageRoutes from "utils/pageRoutes";

export const ProtectedRoute = () => {
	const { authUser } = useAuth();
	return authUser ? <Outlet /> : <Navigate to={PageRoutes.itemLists} replace />;
};
