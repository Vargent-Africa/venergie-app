import * as styled from "./styles/error";

const ErrorPage: React.FC = () => {
	return (
		<styled.Wrapper>
			<styled.ErrorText>Oops!</styled.ErrorText>
			<p>Unexpected Error.</p>
		</styled.Wrapper>
	);
};

export default ErrorPage;
