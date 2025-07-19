export type CreateUser = {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	address: string;
	phone_number: string;
	country: string;
};

export type Login = {
	email: string;
	password: string;
};

export type User = {
	guid: string;
	first_name: string;
	last_name: string;
	email: string;
	phone_number: string;
	role: string;
	status: string;
	profile_image: string;
	is_email_verified: boolean;
	verify_code: string;
	referral_code: string;
	last_login: Date;
	gender: string;
	address: string;
	country: string;
	cart: [];
	created_at: Date;
	updated_at: Date;
};

export type ResetPassword = {
	encoded_email: string;
	encoded_token: string;
	password: string;
};

export type VerifyAccount = {
	encoded_email: string;
	encoded_token: string;
};
