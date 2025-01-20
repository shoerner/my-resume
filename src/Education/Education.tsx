import React from "react";
import { ResumeContext } from "../Components/ResumeProvider";
import { DoNothingUl, EducationListItem, EducationSubListItem } from "./Education.styled";
import { RightSectionWrapper } from "../Components/RightSectionWrapper";

export const Education = () => {
  const {
    Person: { Education },
  } = React.useContext(ResumeContext);

  return (
    <RightSectionWrapper title="Education">
      <DoNothingUl>
        {Education.map((school) => (
          <EducationListItem key={`${school.StartYear}${school.EndYear}`}>
            <strong>{school.Degree}</strong>
            <DoNothingUl>
              <EducationSubListItem>{school.Name}</EducationSubListItem>
              <EducationSubListItem>
                {school.StartYear} - {school.EndYear}
              </EducationSubListItem>
            </DoNothingUl>
          </EducationListItem>
        ))}
      </DoNothingUl>
    </RightSectionWrapper>
  );
};
