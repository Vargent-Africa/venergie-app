import { postData } from "utils/api";
import { CreateUser, User } from "./types/user";

export function createUser(input: CreateUser): Promise<User> {
	return postData("/users", input);
}
