import styled from "styled-components";

export const SelectWrapper = styled.div`
	display: block;
	width: 100%;
	overflow: hidden;
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

export const SelectContainer = styled.div`
	position: relative;
`;

export const Select = styled.select`
	appearance: none;
	width: 100%;
	background-color: #f5f6fa;
	border-width: 0px;
	padding: 1.1rem 3.2rem 1.1rem 1.2rem;
	border-radius: 4px;
	cursor: pointer;
	margin-top: 1rem;
	font-size: 1.5rem;
	font-weight: 500;
	line-height: 1.25;

	&:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
		background-color: #f5f6fa;
		font-size: 1.5rem;
	}
`;

export const CaretWrap = styled.div`
	pointer-events: none;
	position: absolute;
	top: 1.8rem;
	right: 0;
	display: flex;
	align-items: center;
	padding: 0 0.8rem;
	color: #242424;
`;

export const CaretIcon = styled.svg`
	fill: currentColor;
	height: 2rem;
	width: 2rem;
`;
