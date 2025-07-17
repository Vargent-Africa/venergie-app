import { Link } from "react-router";

import FormText from "components/forms/input/Text";

import * as styled from "./styles";
import * as custom from "./styles/signup";

const Signup = () => {
	return (
		<styled.AuthWrapper>
			<styled.FormWrapper>
				<custom.Form onSubmit={() => {}}>
					<styled.FormHeaderText>Glad to have you</styled.FormHeaderText>
					<styled.FormSubText>
						Register now to enjoy more on Venergie
					</styled.FormSubText>
					<styled.FormContainer>
						<FormText
							label="First Name"
							type="text"
							name="firstName"
							placeholder="Enter your first name"
							required
						/>
						<FormText
							label="Last Name"
							type="text"
							name="lastName"
							placeholder="Enter your last name"
							required
						/>
					</styled.FormContainer>
					<styled.FormContainer>
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
					</styled.FormContainer>
					<styled.FormContainer>
						<FormText
							label="Location"
							type="text"
							name="location"
							placeholder="Enter your location"
							required
						/>
						<FormText
							label="Mobile"
							type="tel"
							name="mobile"
							placeholder="Enter your mobile number"
							required
						/>
					</styled.FormContainer>
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
