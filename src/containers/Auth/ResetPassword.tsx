import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

import FormText from "components/forms/input/Text";
import { resetPassword } from "api/users";
import PageRoutes from "utils/pageRoutes";

import * as styled from "./styles";
import * as pageStyled from "./styles/forgotPassword";

const ResetPassword = () => {
	const navigate = useNavigate();

	let { email } = useParams();
	let { token } = useParams();

	const [passwordInput, setPassword] = useState({
		password: "",
		showPassword: false,
	});

	const { password, showPassword } = passwordInput;

	const { isPending, mutate: resetPassAction } = useMutation({
		mutationFn: resetPassword,
		onSuccess: () => {
			navigate(PageRoutes.login);
			toast.success("Reset password was successful");
		},
		onError: (err) => {
			if (isAxiosError(err)) {
				toast.error("Something went wrong");
			} else {
				toast.error("Unexpected error");
			}
		},
	});

	const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setPassword((prev) => ({ ...prev, password: value }));
	};

	const toggleViewPass = () => {
		setPassword((prev) => ({ ...prev, showPassword: !prev.showPassword }));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const resetPass = {
			encoded_email: email || "",
			encoded_token: token || "",
			password,
		};
		resetPassAction(resetPass);
	};

	return (
		<styled.AuthWrapper>
			<styled.FormWrapper>
				<styled.Form onSubmit={handleSubmit}>
					<styled.FormHeaderText>Reset your Password</styled.FormHeaderText>
					<styled.FormSubText>
						Kindly enter your new password.
					</styled.FormSubText>
					<FormText
						label="Password"
						type={showPassword ? "text" : "password"}
						name="password"
						value={password}
						onChange={handleOnchange}
						placeholder="Enter your password"
						required
						showPassword={showPassword}
						errorMessage="Password is required"
						onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
							e.target.setCustomValidity("Password is required")
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
							<styled.BtnContentText>Submit</styled.BtnContentText>
						</styled.BtnContent>
					</styled.BtnSubmit>
					<pageStyled.BtnBack>
						<Link to="/">
							<b>Go back to shop</b>
						</Link>
					</pageStyled.BtnBack>
				</styled.Form>
			</styled.FormWrapper>
		</styled.AuthWrapper>
	);
};

export default ResetPassword;
