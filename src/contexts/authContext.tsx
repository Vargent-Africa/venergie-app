import React, { useState, createContext, useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { User } from "api/types/user";
import { currentUser } from "api/users";

export type AuthContextType = {
	authUser: User | null;
	persist: boolean;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
	setPersist: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextType>({
	authUser: null,
	persist: false,
	setUser: () => {},
	setPersist: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [authUser, setUser] = useState<User | null>(null);
	const [persist, setPersist] = useState<boolean>(() => {
		const getPersist: string | null = JSON.parse(
			localStorage.getItem("persist") || "null"
		);
		if (!getPersist) return false;
		return true;
	});

	// Fetch current user only if user is null
	const { data, isSuccess, isLoading } = useQuery({
		queryKey: ["current-user"],
		queryFn: currentUser,
		enabled: authUser === null, // don't refetch if already set
		retry: false,
		staleTime: 0,
	});

	useEffect(() => {
		if (isSuccess && data) {
			setUser(data);
		}
	}, [isSuccess, data]);

	return (
		<AuthContext.Provider value={{ authUser, persist, setUser, setPersist }}>
			{isLoading ? <div>Loading...</div> : children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
