import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";

import { signOut } from "api/users";

import useAuth from "./useAuth";

export const useLogout = () => {
	const { setAuth } = useAuth();
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	return useMutation({
		mutationFn: signOut,
		onSuccess: () => {
			setAuth(null);
			navigate("/", { replace: true });
			toast.success("Logout successful");
			queryClient.setQueryData(["current-user"], null);
		},
		onError: (err) => {
			if (isAxiosError(err)) {
				toast.error(err.response?.data.message);
			} else {
				console.log("unexpected", err);
			}
		},
	});
};
