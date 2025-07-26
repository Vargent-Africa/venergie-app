import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";

import { createUser } from "api/users";
import FormText from "components/forms/input/Text";
import { sanitizeErrorMsg } from "utils/helpers";

import * as styled from "./styles";
import * as custom from "./styles/signup";

type UserFormInput = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	phoneNumber: string;
	country: string;
	address: string;
	showPassword: boolean;
};

type UserInputError = {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	phone_number: string;
	country: string;
	address: string;
};

const Signup = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState<UserFormInput>({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		phoneNumber: "",
		country: "",
		address: "",
		showPassword: false,
	});

	const {
		firstName,
		lastName,
		email,
		password,
		phoneNumber,
		country,
		address,
		showPassword,
	} = formData;

	const [errorMsg, setErrorMsg] = useState<UserInputError>({
		first_name: "",
		email: "",
		last_name: "",
		password: "",
		phone_number: "",
		country: "",
		address: "",
	});

	const {
		first_name: eFirstName,
		last_name: eLastName,
		email: eEmail,
		password: ePassword,
		phone_number: ePhoneNumber,
		country: eCountry,
		address: eAddress,
	} = errorMsg;

	const toggleViewPass = () => {
		setFormData((prev) => ({ ...prev, showPassword: !prev.showPassword }));
	};

	const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const { isPending, mutate: registerUser } = useMutation({
		mutationFn: createUser,
		onSuccess: (data) => {
			navigate("/account-successful", {
				replace: true,
				state: {
					email: data.email,
				},
			});
		},
		onError: (err) => {
			if (isAxiosError(err)) {
				setErrorMsg({
					first_name: "",
					email: "",
					last_name: "",
					password: "",
					phone_number: "",
					country: "",
					address: "",
				});

				const errorMsgs = sanitizeErrorMsg(
					err.response?.data.message
				) as Record<string, string>;

				setErrorMsg((prev) => ({ ...prev, ...errorMsgs }));
			} else {
				console.log("unexpected", err);
			}
		},
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newUser = {
			first_name: firstName,
			last_name: lastName,
			email,
			password,
			country,
			address,
			phone_number: phoneNumber,
		};

		registerUser(newUser);
	};

	return (
		<styled.AuthWrapper>
			<styled.FormWrapper>
				<custom.Form onSubmit={handleSubmit}>
					<styled.FormHeaderText>Glad to have you</styled.FormHeaderText>
					<styled.FormSubText>
						Register now to enjoy more on Venergie
					</styled.FormSubText>
					<styled.FormContainer>
						<FormText
							label="First Name"
							type="text"
							name="firstName"
							value={firstName}
							onChange={handleOnchange}
							pattern="^[a-zA-Z]+$"
							placeholder="Enter your first name"
							hasError={eFirstName == "" ? false : true}
							errorMessage={
								eFirstName !== ""
									? eFirstName
									: "First name is required and should contain only letters"
							}
							onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
								e.target.setCustomValidity(
									"First name is required and should contain only letters"
								)
							}
							onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
								e.target.setCustomValidity("")
							}
							required
						/>
						<FormText
							label="Last Name"
							type="text"
							name="lastName"
							value={lastName}
							onChange={handleOnchange}
							placeholder="Enter your last name"
							pattern="^[a-zA-Z]+$"
							hasError={eLastName == "" ? false : true}
							errorMessage={
								eLastName !== ""
									? eLastName
									: "Last name is required and should contain only letters"
							}
							onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
								e.target.setCustomValidity(
									"Last name is required and should contain only letters"
								)
							}
							onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
								e.target.setCustomValidity("")
							}
							required
						/>
					</styled.FormContainer>
					<styled.FormContainer>
						<FormText
							label="Email"
							type="email"
							name="email"
							value={email}
							onChange={handleOnchange}
							placeholder="Enter your email address"
							required
							hasError={eEmail == "" ? false : true}
							errorMessage={eEmail !== "" ? eEmail : "Must be a valid email"}
							onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
								e.target.setCustomValidity("Must be a valid email")
							}
							onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
								e.target.setCustomValidity("")
							}
						/>
						<FormText
							label="Password"
							type={showPassword ? "text" : "password"}
							name="password"
							value={password}
							onChange={handleOnchange}
							placeholder="Enter your password"
							required
							pattern="^.{8,20}$"
							hasError={ePassword == "" ? false : true}
							showPassword={showPassword}
							errorMessage={
								ePassword !== ""
									? "Password must be longer than or equal to 8 characters"
									: "Password is required and should be a minimum of 8 and maximum of 20 characters"
							}
							onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
								e.target.setCustomValidity(
									"Password is required and should be a minimum of 8 and maximum of 20 characters"
								)
							}
							onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
								e.target.setCustomValidity("")
							}
							rightIcon={
								<styled.InputIconWrapper onClick={toggleViewPass}>
									{showPassword ? (
										<styled.InputIcon
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</styled.InputIcon>
									) : (
										<styled.InputIcon
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
											/>
										</styled.InputIcon>
									)}
								</styled.InputIconWrapper>
							}
						/>
					</styled.FormContainer>
					<styled.FormContainer>
						<FormText
							label="Mobile"
							type="tel"
							name="phoneNumber"
							value={phoneNumber}
							onChange={handleOnchange}
							placeholder="Enter your phone number"
							required
							hasError={ePhoneNumber == "" ? false : true}
							errorMessage={
								ePhoneNumber !== ""
									? ePhoneNumber
									: "Please enter a valid phone number"
							}
							onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
								e.target.setCustomValidity("Please enter a valid phone number")
							}
							onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
								e.target.setCustomValidity("")
							}
						/>
						<FormText
							label="Country"
							type="text"
							name="country"
							value={country}
							onChange={handleOnchange}
							placeholder="Enter your country"
							required
							hasError={eCountry == "" ? false : true}
							errorMessage={eCountry !== "" ? eCountry : "Country is required"}
							onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
								e.target.setCustomValidity("Country is required")
							}
							onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
								e.target.setCustomValidity("")
							}
						/>
					</styled.FormContainer>
					<styled.FormContainer>
						<FormText
							label="Address"
							type="text"
							name="address"
							value={address}
							onChange={handleOnchange}
							placeholder="Enter your address"
							required
							hasError={eAddress == "" ? false : true}
							errorMessage={address !== "" ? address : "Address is required"}
							onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
								e.target.setCustomValidity("Address is required")
							}
							onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
								e.target.setCustomValidity("")
							}
						/>
					</styled.FormContainer>
					<styled.BtnSubmit type="submit" disabled={isPending}>
						<styled.BtnContent>
							<styled.BtnContentIcon
								$spinning={isPending}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<styled.IconCircle
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								></styled.IconCircle>
								<styled.IconPath
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></styled.IconPath>
							</styled.BtnContentIcon>
							<styled.BtnContentText>Create an account</styled.BtnContentText>
						</styled.BtnContent>
					</styled.BtnSubmit>
					<styled.TermsText>
						By continuing, you agree to our{" "}
						<Link to="/" target="_blank">
							<styled.TermsLink>terms and conditions</styled.TermsLink>
						</Link>
						.
					</styled.TermsText>
					<styled.SignupText>
						Already have a Venergie account?{" "}
						<Link to="/auth/login">
							<styled.SignupLink>Log in here</styled.SignupLink>
						</Link>
					</styled.SignupText>
				</custom.Form>
			</styled.FormWrapper>
		</styled.AuthWrapper>
	);
};

export default Signup;
