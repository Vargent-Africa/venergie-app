import React, { useState } from "react";
import { Link } from "react-router";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

import FormText from "components/forms/input/Text";
import { forgotPassword } from "api/users";

import * as styled from "./styles";
import * as pageStyled from "./styles/forgotPassword";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");

	const {
		isPending,
		mutate: forgetPassAction,
		data,
	} = useMutation({
		mutationFn: forgotPassword,
		onError: (err) => {
			if (isAxiosError(err)) {
				toast.error(err.response?.data.message);
			} else {
				toast.error("Unexpected error");
			}
		},
	});

	const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setEmail(value);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		forgetPassAction(email);
	};

	return (
		<styled.AuthWrapper>
			<styled.FormWrapper>
				<styled.Form onSubmit={handleSubmit}>
					{data && (
						<pageStyled.ErrorWrapper>
							Kindly check your email to continue.
						</pageStyled.ErrorWrapper>
					)}
					<styled.FormHeaderText>Forgot your Password?</styled.FormHeaderText>
					<styled.FormSubText>
						Enter your email and we'll send you a link to reset your password.
					</styled.FormSubText>
					<FormText
						label="Email"
						type="email"
						name="email"
						value={email}
						onChange={handleOnchange}
						placeholder="Enter your email address"
						required
						errorMessage="Must be a valid email"
						onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
							e.target.setCustomValidity("Must be a valid email")
						}
						onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
							e.target.setCustomValidity("")
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
							<styled.BtnContentText>Login to Venergie</styled.BtnContentText>
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

export default ForgotPassword;
