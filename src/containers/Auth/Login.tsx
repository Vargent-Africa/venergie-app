import FormText from "components/forms/input/Text";
import CheckBox from "components/forms/checkbox";

import * as styled from "./styles";

const Login = () => {
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
					<styled.ForgotPassLink to="/forgot-password">
						Forgot Password?
					</styled.ForgotPassLink>
					<styled.BtnSubmit type="submit" disabled={false}>
						<styled.BtnContent>
							<styled.BtnContentIcon
								spinning={false}
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
					<styled.TermsText>
						By logging in, you agree to our{" "}
						<styled.TermsLink to="/" target="_blank">
							terms and conditions
						</styled.TermsLink>
						.
					</styled.TermsText>
					<styled.SignupText>
						Don't have a Venergie account yet?{" "}
						<styled.SignupLink to="/signup">
							Create an account
						</styled.SignupLink>
					</styled.SignupText>
				</styled.Form>
			</styled.FormWrapper>
		</styled.AuthWrapper>
	);
};

export default Login;
