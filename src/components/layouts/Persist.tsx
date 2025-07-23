import { useEffect } from "react";
import { Outlet } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { currentUser } from "api/users";
import { useAuth } from "contexts/authContext";

const Persist = () => {
	const { authUser, persist, setUser } = useAuth();

	const {
		data: userData,
		isLoading,
		isSuccess,
		isError,
	} = useQuery({
		queryKey: ["current-user"],
		queryFn: currentUser,
		enabled: authUser === null,
	});

	// Set auth only once after successful query
	useEffect(() => {
		if (isSuccess && userData) {
			setUser(userData);
		}
		if (isError) {
			setUser(null);
		}
	}, [isSuccess, isError, userData]);

	return !persist ? <Outlet /> : isLoading ? <div>Loading...</div> : <Outlet />;
};

export default Persist;
