import styled from '@emotion/styled';

export const StyledJobsContainer = styled.div`
	break-before: avoid;
	position: relative;
`;

export const StyledJobRow = styled.div`
	display: flex;
	flex-direction: column;
	padding: 12px 8px 0px 8px;
	break-after: region;
	break-inside: avoid;
	position: relative;
`;

export const StyledJobHeader = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	flex-shrink: 0;
`;

export const StyledJobDescription = styled.div`
	display: flex;
	flex-direction: column;
	flex-shrink: 1;
	width: 96%;
	padding: 1% 2%;
	hyphens: auto;
	break-inside: avoid;
`;

export const StyledJobTitle = styled.div`
	display: flex;
	flex-direction: column;
`;

export const HideOnPrint = styled.div`
	@media print {
		display: none;
	}

	@media only screen and (max-width: 1100px) {
		display: none;
	}

	padding: 0 3px;
`;

export const StyledJobsecondaryInformation = styled.div`
	font-size: 0.8em;
	text-align: right;
	display: inline-flex;
	justify-content: space-evenly;

	@media print {
		display: flex;
		flex-direction: column;
	}

	@media only screen and (max-width: 1100px) {
		display: flex;
		flex-direction: column;
	}
`;

export const StyledJobDates = styled.span`
	color: rgb(106, 120, 139);
`;

export const StyledJobLocation = styled.span`
	color: rgb(106, 120, 139);
	font-size: 0.8em;
`;
