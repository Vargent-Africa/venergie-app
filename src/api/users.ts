import { getData, postData } from "utils/api";
import { CreateUser, Login, User } from "./types/user";

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
