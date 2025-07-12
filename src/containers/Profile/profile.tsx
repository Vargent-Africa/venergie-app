import FormText from "components/forms/input/Text";
import FormSelect from "components/forms/select";

import * as styled from "./styles/profile";

const sex = [
	{ name: "Male", id: 1 },
	{ name: "Female", id: 2 },
	{ name: "Others", id: 3 },
];

let genderOptions: SelectOptions[] = sex.map(({ name, id }) => ({
	key: id.toString(),
	value: name,
	opt: name,
}));

const Profile = () => {
	return (
		<styled.ProfileWrapper>
			<styled.ProfileHeader>Profile</styled.ProfileHeader>
			<styled.ProfileContainer>
				<styled.ProfileForm>
					<div>
						<styled.SectionText>Personal Details</styled.SectionText>
						<styled.FormContainer>
							<FormText
								label="First Name"
								type="text"
								name="firstname"
								placeholder="Enter your first name"
								required
							/>
							<FormText
								label="Last Name"
								type="text"
								name="lastname"
								placeholder="Enter your last name"
								required
							/>
						</styled.FormContainer>
						<styled.FormContainer>
							<FormText
								label="Date of Birth"
								type="date"
								name="dob"
								placeholder="Enter your date of birth"
							/>
							<FormSelect
								label="Gender"
								value=""
								options={genderOptions}
								errorMessage=""
							/>
						</styled.FormContainer>
					</div>
					<styled.SectionBlock>
						<styled.SectionText>Contact Details</styled.SectionText>
						<styled.FormContainer>
							<FormText
								label="Email"
								type="email"
								name="email"
								placeholder="Enter your email"
								required
							/>
							<FormText
								label="Phone"
								type="tel"
								name="phone"
								placeholder="Enter your phone number"
								required
							/>
						</styled.FormContainer>
						<styled.FormContainer>
							<FormText
								label="City"
								type="text"
								name="address"
								placeholder="Enter your city"
							/>
							<FormText
								label="Country"
								type="text"
								name="country"
								placeholder="Enter your country"
							/>
						</styled.FormContainer>
					</styled.SectionBlock>
				</styled.ProfileForm>
			</styled.ProfileContainer>
		</styled.ProfileWrapper>
	);
};

export default Profile;
