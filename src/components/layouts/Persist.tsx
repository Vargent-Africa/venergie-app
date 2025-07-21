import { useEffect } from "react";
import { Outlet } from "react-router";
import { useQuery } from "@tanstack/react-query";

import useAuth from "hooks/useAuth";
import { currentUser } from "api/users";

const Persist = () => {
	const { authUser, setAuth } = useAuth();

	const {
		data: userData,
		isSuccess,
		isError,
	} = useQuery({
		queryKey: ["current-user"],
		queryFn: currentUser,
		enabled: authUser === null,
		retry: false,
	});

	// Set auth only once after successful query
	useEffect(() => {
		if (isSuccess && userData) {
			setAuth(userData);
		}
		if (isError) {
			setAuth(null);
		}
	}, [isSuccess, isError, userData, setAuth]);

	return <Outlet />;
};

export default Persist;
