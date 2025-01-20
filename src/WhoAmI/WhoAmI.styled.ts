import styled from "@emotion/styled";

export const WhoAmIHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  break-after: avoid;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Name = styled.h1`
  text-transform: uppercase;
  color: darkblue;
  font-size: 3em;
  margin: 0px;

  @media only screen and (max-width: 600px) {
    font-size: 2em;
  }
`;

export const Title = styled.h2`
  font-weight: 300;
  margin-top: -10px;
  margin-bottom: 10px;
`;

export const SkillsStyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: repeat(3, 1fr); */
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  place-items: center;
`;

export const StyledContactTable = styled.div`
  display: grid;
  grid-template-columns: 0.25fr 2fr;
  grid-column-gap: 4px;
  padding-bottom: 3px;
`;

export const StyledContactImage = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;
export const StyledContactBody = styled.div`
  grid-area: 1 / 2 / 2 / 3;

  @media print {
    text-align: right;
    width: 100%;
  }
`;

export const StyledNoneAnchor = styled.a`
  text-decoration: none;
  color: rgb(106, 120, 139);

  @media print {
    text-align: right;
    width: 100%;
  }
`;

export const StyledPersonDescription = styled.p``;

export const StyledSpacerRule = styled.hr`
  color: rgb(190, 190, 190);
  background-color: rgb(190, 190, 190);
  border: 1px solid rgb(190, 190, 190);
  break-after: avoid;
  width: 100%;
`;
