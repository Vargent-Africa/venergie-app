import { useNavigate } from "react-router";

import * as styled from "./styles/notFound";

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<styled.Wrapper id="error-page">
			<styled.HeadText>Oops!</styled.HeadText>
			<p>Sorry, page not found.</p>

			<styled.Btn onClick={() => navigate(-1)}>Go back</styled.Btn>
		</styled.Wrapper>
	);
};

export default NotFound;
