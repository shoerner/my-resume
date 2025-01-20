import styled from '@emotion/styled';

interface Props {
	children: React.ReactNode;
}

const StyledH2 = styled.h2`
	text-transform: uppercase;
	color: darkblue;
	margin: 0px;
`;

export const SecondHeader = ({ children }: Props) => {
	return <StyledH2>▌{children}</StyledH2>;
};
