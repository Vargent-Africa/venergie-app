import * as styled from "./styles/avatar";

type ProfileName = {
	firstName?: string;
	lastName?: string;
};

const Avatar = ({ firstName, lastName }: ProfileName) => {
	return (
		<styled.Avatar>
			{firstName && firstName.charAt(0)}
			{lastName && lastName.charAt(0)}
		</styled.Avatar>
	);
};

export default Avatar;
