import { useState } from "react";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import FormText from "components/forms/input/Text";
import FormSelect from "components/forms/select";
import SubmitButton from "components/misc/Button/SubmitButton";
import { useAuth } from "contexts/authContext";
import { updateUser } from "api/users";
import { sanitizeErrorMsg } from "utils/helpers";

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

type EditProfileState = {
	firstName: string;
	lastName: string;
	gender: string;
	phoneNumber: string;
	dob: string;
	country: string;
	address: string;
};

type UserInputError = {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	phone_number: string;
	country: string;
	address: string;
	gender: string;
	dob: string;
};

const Profile = () => {
	const queryClient = useQueryClient();
	const { authUser, setIsAuthenticated, setUser } = useAuth();

	const [editData, setEditData] = useState<EditProfileState>({
		firstName: authUser?.first_name || "",
		lastName: authUser?.last_name || "",
		gender: authUser?.gender || "",
		address: authUser?.address || "",
		phoneNumber: authUser?.phone_number || "",
		country: authUser?.country || "",
		dob: authUser?.dob || "",
	});

	const [errorMsg, setErrorMsg] = useState<UserInputError>({
		first_name: "",
		email: "",
		last_name: "",
		password: "",
		phone_number: "",
		country: "",
		address: "",
		gender: "",
		dob: "",
	});

	const { firstName, lastName, gender, address, phoneNumber, country, dob } =
		editData;

	const {
		first_name: eFirstName,
		last_name: eLastName,
		email: eEmail,
		password: ePassword,
		phone_number: ePhoneNumber,
		country: eCountry,
		address: eAddress,
		gender: eGender,
		dob: eDob,
	} = errorMsg;

	const handleOnchangeEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setEditData((prev) => ({ ...prev, [name]: value }));
	};

	const handleEditSelectChange =
		(name: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
			const { value } = e.target;
			setEditData((prev) => ({
				...prev,
				[name]: value,
			}));
		};

	const { isPending, mutate: updateAccount } = useMutation({
		mutationFn: updateUser,
		onSuccess: (data) => {
			setUser(data);
			setIsAuthenticated(true);
			queryClient.setQueryData(["current-user"], data);
			toast.success("Profile Updated!");
		},
		onError: (err) => {
			if (isAxiosError(err)) {
				setErrorMsg({
					first_name: "",
					email: "",
					last_name: "",
					password: "",
					phone_number: "",
					country: "",
					address: "",
					gender: "",
					dob: "",
				});

				const errorMsgs = sanitizeErrorMsg(err.response?.data.message);

				if (typeof errorMsgs === "string") {
					toast.error(errorMsgs);
				} else {
					setErrorMsg((prev) => ({ ...prev, ...errorMsgs }));
				}
			} else {
				return false;
			}
		},
	});

	const handleUpdateAccountSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		const updateAcct = {
			first_name: firstName,
			last_name: lastName,
			gender,
			address,
			phone_number: phoneNumber,
			country,
			dob,
		};

		setTimeout(() => {
			updateAccount(updateAcct);
		}, 2000);
	};

	return (
		<styled.ProfileWrapper>
			<styled.ProfileHeader>Profile</styled.ProfileHeader>
			<styled.ProfileContainer>
				<styled.ProfileForm onSubmit={handleUpdateAccountSubmit}>
					<div>
						<styled.SectionText>Personal Details</styled.SectionText>
						<styled.FormContainer>
							<FormText
								label="First Name"
								type="text"
								name="firstName"
								value={firstName}
								onChange={handleOnchangeEdit}
								pattern="^[a-zA-Z]+$"
								placeholder="Enter your first name"
								hasError={eFirstName == "" ? false : true}
								errorMessage={
									eFirstName !== ""
										? eFirstName
										: "First name is required and should contain only letters"
								}
								onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
									e.target.setCustomValidity(
										"First name is required and should contain only letters"
									)
								}
								onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
									e.target.setCustomValidity("")
								}
								required
							/>
							<FormText
								label="Last Name"
								type="text"
								name="lastName"
								value={lastName}
								onChange={handleOnchangeEdit}
								placeholder="Enter your last name"
								pattern="^[a-zA-Z]+$"
								hasError={eLastName == "" ? false : true}
								errorMessage={
									eLastName !== ""
										? eLastName
										: "Last name is required and should contain only letters"
								}
								onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
									e.target.setCustomValidity(
										"Last name is required and should contain only letters"
									)
								}
								onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
									e.target.setCustomValidity("")
								}
								required
							/>
						</styled.FormContainer>
						<styled.FormContainer>
							<FormText
								label="Date of Birth"
								type="date"
								name="dob"
								value={dob}
								onChange={handleOnchangeEdit}
							/>
							<FormSelect
								label="Gender"
								value={gender}
								options={genderOptions}
								onChange={handleEditSelectChange("gender")}
								errorMessage={eGender !== "" ? eGender : ""}
							/>
						</styled.FormContainer>
					</div>
					<styled.SectionBlock>
						<styled.SectionText>Contact Details</styled.SectionText>
						<styled.FormContainer>
							<FormText
								label="Email"
								type="email"
								value={authUser?.email}
								disabled
							/>
							<FormText
								label="Mobile"
								type="tel"
								name="phoneNumber"
								value={phoneNumber}
								onChange={handleOnchangeEdit}
								placeholder="Enter your phone number"
								required
								hasError={ePhoneNumber == "" ? false : true}
								errorMessage={
									ePhoneNumber !== ""
										? ePhoneNumber
										: "Please enter a valid phone number"
								}
								onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
									e.target.setCustomValidity(
										"Please enter a valid phone number"
									)
								}
								onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
									e.target.setCustomValidity("")
								}
							/>
						</styled.FormContainer>
						<styled.FormContainer>
							<FormText
								label="Country"
								type="text"
								name="country"
								value={country}
								onChange={handleOnchangeEdit}
								placeholder="Enter your country"
								required
								hasError={eCountry == "" ? false : true}
								errorMessage={
									eCountry !== "" ? eCountry : "Country is required"
								}
								onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
									e.target.setCustomValidity("Country is required")
								}
								onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
									e.target.setCustomValidity("")
								}
							/>
							<FormText
								label="Address"
								type="text"
								name="address"
								value={address}
								onChange={handleOnchangeEdit}
								placeholder="Enter your address"
								required
								hasError={eAddress == "" ? false : true}
								errorMessage={address !== "" ? address : "Address is required"}
								onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
									e.target.setCustomValidity("Address is required")
								}
								onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
									e.target.setCustomValidity("")
								}
							/>
						</styled.FormContainer>
						<styled.SubmitBtnContainer>
							<styled.BtnSubmit type="submit" disabled={isPending}>
								<SubmitButton disabled={isPending} />
							</styled.BtnSubmit>
						</styled.SubmitBtnContainer>
					</styled.SectionBlock>
				</styled.ProfileForm>
			</styled.ProfileContainer>
		</styled.ProfileWrapper>
	);
};

export default Profile;
