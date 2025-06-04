import styled, { css } from "styled-components";

export const Container = styled.div`
	max-width: 120rem;
	padding: 0 2rem;
	margin: auto;
	overflow: hidden;
	height: 100%;
`;

export const PageTitleWrapper = styled.section`
	margin-top: 4rem;
`;

export const PageTitle = styled.h2`
	font-size: 2rem;
	letter-spacing: 0.1rem;
`;

export const PageTitleDescription = styled.span`
	padding-top: 1rem;
`;

export const Btn = css`
	display: inline-block;
	transition: all 0.5s;
	cursor: pointer;
	text-decoration: none !important;
	box-shadow: none;
	font-style: normal;
	border: none;
	text-align: center;
`;
