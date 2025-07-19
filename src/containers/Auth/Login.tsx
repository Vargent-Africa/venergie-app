import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { isAxiosError } from "axios";

import FormText from "components/forms/input/Text";
import CheckBox from "components/forms/checkbox";
import useAuth from "hooks/useAuth";

import * as styled from "./styles";
import { currentUser, signIn } from "api/users";
import { toast } from "react-toastify";

type LoginInput = {
	uemail: string;
	upassword: string;
	showPassword: boolean;
};

const Login = () => {
	const { persist, setAuth, setPersist } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/dashboard";

	const [formData, setFormData] = useState<LoginInput>({
		uemail: "",
		upassword: "",
		showPassword: false,
	});

	const { uemail, upassword, showPassword } = formData;

	const {
		isPending,
		mutate: loginUser,
		data: loginData,
	} = useMutation({
		mutationFn: signIn,
		onError: (err) => {
			if (isAxiosError(err)) {
				toast.error(err.response?.data.message);
			} else {
				console.log("unexpected", err);
			}
		},
	});

	const toggleViewPass = () => {
		setFormData((prev) => ({ ...prev, showPassword: !prev.showPassword }));
	};

	useQuery({
		queryKey: ["current-user"],
		queryFn: () => currentUser(),
		onSuccess: (data) => {
			setAuth(data);
			navigate(from, { replace: true });
			toast.success("Login successful");
		},
		enabled: !!loginData,
	});

	const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const loginInput = {
			email: uemail,
			password: upassword,
		};
		loginUser(loginInput);
	};

	const togglePersist = () => {
		setPersist((prev) => !prev);
	};

	useEffect(() => {
		localStorage.setItem("persist", JSON.stringify(persist));
	}, [persist]);

	return (
		<styled.AuthWrapper>
			<styled.FormWrapper>
				<styled.Form onSubmit={() => {}}>
					<styled.FormHeaderText>You are welcome</styled.FormHeaderText>
					<styled.FormSubText>
						Enter your registered email address and password to continue.
					</styled.FormSubText>
					<FormText
						label="Email"
						type="email"
						name="email"
						placeholder="Enter your email address"
						required
					/>
					<FormText
						label="Password"
						type="password"
						name="password"
						placeholder="Enter your password"
						required
					/>
					<CheckBox label="Trust this device?" />
					<Link to="/forgot-password">
						<styled.ForgotPassLink>Forgot Password?</styled.ForgotPassLink>
					</Link>
					<styled.BtnSubmit type="submit" disabled={false}>
						<styled.BtnContent>
							<styled.BtnContentIcon
								$spinning={false}
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
							<styled.BtnContentText onClick={navigateToDash}>
								Login to Venergie
							</styled.BtnContentText>
						</styled.BtnContent>
					</styled.BtnSubmit>
					<styled.TermsText>
						By logging in, you agree to our{" "}
						<Link to="/" target="_blank">
							<styled.TermsLink>terms and conditions</styled.TermsLink>
						</Link>
						.
					</styled.TermsText>
					<styled.SignupText>
						Don't have a Venergie account yet?{" "}
						<Link to="/auth/signup">
							<styled.SignupLink>Create an account</styled.SignupLink>
						</Link>
					</styled.SignupText>
				</styled.Form>
			</styled.FormWrapper>
		</styled.AuthWrapper>
	);
};

export default Login;
