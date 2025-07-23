import React, { useState, createContext, useContext, useEffect } from "react";

import { User } from "api/types/user";
import { currentUser } from "api/users";

export type AuthContextType = {
	isLoading: boolean;
	isAuthenticated: boolean;
	authUser: User | null;
	persist: boolean;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
	setPersist: React.Dispatch<React.SetStateAction<boolean>>;
	setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextType | undefined>({
	isLoading: true,
	isAuthenticated: false,
	authUser: null,
	persist: false,
	setUser: () => {},
	setPersist: () => {},
	setIsAuthenticated: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [authUser, setUser] = useState<User | null>(null);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [persist, setPersist] = useState<boolean>(() => {
		const getPersist: string | null = JSON.parse(
			localStorage.getItem("persist") || "null"
		);
		if (!getPersist) return false;
		return true;
	});

	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		let isMounted = true;
		authUser === null ? getCurrentUser(isMounted) : setLoading(false);

		return () => {
			isMounted = false;
		};
	}, []);

	const getCurrentUser = async (isMounted: boolean) => {
		try {
			const user = await currentUser();
			setUser(user);
			setIsAuthenticated(true);
		} catch (err) {
			setUser(null);
			setIsAuthenticated(false);
		} finally {
			isMounted && setLoading(false);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				isLoading,
				isAuthenticated,
				authUser,
				persist,
				setIsAuthenticated,
				setUser,
				setPersist,
			}}
		>
			{isLoading ? <div>Loading...</div> : children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error("useAuth must be used within an AuthProvider");
	return context;
};
