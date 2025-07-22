import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";

import { signOut } from "api/users";
import { useAuth } from "contexts/authContext";

export const useLogout = () => {
	const { setUser } = useAuth();
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	return useMutation({
		mutationFn: signOut,
		onSuccess: () => {
			setUser(null);
			queryClient.removeQueries({ queryKey: ["current-user"] });
			navigate("/", { replace: true });
			toast.success("Logout successful");
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
