import * as common from "styles/ui";

import * as styled from "./styles";
import FormText from "components/forms/input/Text";
import { Link } from "react-router";
import CheckBox from "components/forms/checkbox";

const Login = () => {
	return (
		<styled.AuthWrapper>
			<common.Container>
				<styled.FormWrapper>
					<form className="w-full" onSubmit={() => {}}>
						<h3 className="text-xl font-medium">You are welcome</h3>
						<p className="text-xs mt-6">
							Enter your registered email address and password to continue.
						</p>
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
						<Link
							to="/forgot-password"
							className="text-xs text-green-color mt-5 inline-block"
						>
							Forgot Password?
						</Link>
						{/* <div className="mt-3">
              <Button type="submit" disabled={true}>
                <div className="bg-green-color py-3 px-4 rounded-md flex items-center justify-center">
                  {true &&
                    <svg className="mr-4 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  }
                  <span className="font-medium"> {t('button.loginText')} </span>
                </div>
              </Button>
            </div> */}
						<p className="text-xs mt-5">
							By logging in, you agree to our{" "}
							<Link to="/" target="_blank" className="text-green-color">
								terms and conditions
							</Link>
							.
						</p>
						<p className="text-xs mt-2">
							Don't have a Vargent account yet?{" "}
							<Link to="/signup" className="text-green-color">
								Create an account
							</Link>
						</p>
					</form>
				</styled.FormWrapper>
			</common.Container>
		</styled.AuthWrapper>
	);
};

export default Login;
