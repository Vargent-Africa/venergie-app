import styled from "styled-components";

export const Wrapper = styled.div`
	display: block;
	width: 100%;
`;

export const FormLabel = styled.label<{ required?: boolean }>`
	color: #888888;
	font-size: 1.3rem;
	padding: 1.2rem 1.2rem 0;
	display: block;

	${({ required }) =>
		required &&
		`
    &:after {
      content: "*";
      color: red;
      margin-left: 4px;
    }
  `}
`;

export const Input = styled.input<{ disabled?: boolean }>`
	appearance: none;
	border: 1px solid transparent;
	width: 100%;
	padding: 1rem 1.2rem;
	color: #242424;
	font-size: 1.5rem;
	font-weight: 500;
	line-height: 1.25;
	background-color: #f5f6fa;
	border-radius: 4px;
	margin-top: 1rem;

	&::placeholder {
		font-size: 1.3rem;
	}

	&:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}

	${({ disabled }) =>
		disabled &&
		`
    color: #888888;
  `}
`;
