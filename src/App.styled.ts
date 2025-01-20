import styled from '@emotion/styled';

export const BaseDocument = styled.div`
	/* display: grid;
  grid-template-columns: 1fr 0.35fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px; */
	border: 1px solid rgb(106, 120, 139);
	margin: 5% 10%;
	padding: 1% 2%;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	@media print {
		border: none;
		margin: 0;
		padding: 0;
		break-inside: avoid-page;
	}

	@media only screen and (max-width: 1100px) {
		border: none;
		margin: 0;
		padding: 2%;
	}
`;

export const MainBodyContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 0.33fr;
	grid-template-rows: 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	break-before: avoid;

	@media only screen and (max-width: 600px) {
		display: flex;
		flex-direction: column;
	}
`;

export const MiscInfo = styled.div`
	padding-left: 10px;
	grid-area: 1 / 2 / 2 / 3;
`;

export const MainInfo = styled.div`
	grid-area: 1 / 1 / 2 / 2;
	padding-right: 8px;
	border-right: 2px solid rgb(190, 190, 190);

	@media only screen and (max-width: 600px) {
		border-right: none;
	}
`;
