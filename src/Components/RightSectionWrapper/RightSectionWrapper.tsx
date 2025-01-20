import styled from "@emotion/styled";
import { SecondHeader } from "../MakeHeader";

interface Props {
  children: React.ReactNode;
  title: string;
}

const StyledSectionContainer = styled.div`
  padding: 8px 0px;
`;

export const RightSectionWrapper = (props: Props) => {
  return (
    <StyledSectionContainer>
      <SecondHeader>{props.title}</SecondHeader>
      {props.children}
    </StyledSectionContainer>
  );
};
