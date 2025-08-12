import { getData, patchData, postData } from "utils/api";
import {
	CreateUser,
	Login,
	ResetPassword,
	UpdateUser,
	User,
	VerifyAccount,
} from "./types/user";

export function createUser(input: CreateUser): Promise<User> {
	return postData("/users", input);
}

export function signIn(input: Login): Promise<MessageResponse> {
	return postData("/auth/login", input);
}

export function currentUser(): Promise<User> {
	return getData("/auth/profile");
}

export function signOut(): Promise<MessageResponse> {
	return postData("/auth/logout", {});
}

export function verifyCode({
	encoded_email,
	encoded_token,
}: VerifyAccount): Promise<boolean> {
	return getData(`/users/email-verify/${encoded_email}/${encoded_token}`);
}

export function forgotPassword(email: string): Promise<boolean> {
	return postData("/auth/forgot/password", { email });
}

export function resetPassword(input: ResetPassword): Promise<boolean> {
	return postData("/auth/reset/password", input);
}

export function updateUser(input: UpdateUser): Promise<User> {
	return patchData("/users", input);
}
