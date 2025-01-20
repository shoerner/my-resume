import React from "react";
import { ResumeContext } from "../Components/ResumeProvider";
import {
  StyledJobDescription,
  StyledJobHeader,
  StyledJobRow,
  StyledJobDates,
  StyledJobTitle,
  StyledJobsecondaryInformation,
  StyledJobLocation,
  HideOnPrint,
  StyledJobsContainer,
} from "./Jobs.styled";
import { SecondHeader } from "../Components/MakeHeader";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const Jobs = () => {
  const { Jobs } = React.useContext(ResumeContext);

  return (
    <StyledJobsContainer>
      <SecondHeader>Work Expierence</SecondHeader>
      {Jobs.map((job, idx) => {
        const startDate = new Date(job.StartDate);
        const endDate = job.EndDate ? new Date(job.EndDate) : undefined;

        const endDateString =
          endDate === undefined
            ? "Present"
            : `${monthNames[endDate!.getMonth()]} ${endDate!.getFullYear()}`;
        return (
          <StyledJobRow key={idx}>
            <StyledJobHeader>
              <StyledJobTitle>
                <strong>{job.Title}</strong>
                {job.Location && (
                  <StyledJobLocation>{job.Location}</StyledJobLocation>
                )}
              </StyledJobTitle>
              <StyledJobsecondaryInformation>
                <strong>{job.Company}</strong>
                <HideOnPrint>{" | "}</HideOnPrint>
                <StyledJobDates>
                  {monthNames[startDate.getMonth()]} {startDate.getFullYear()} -{" "}
                  {endDateString}
                </StyledJobDates>
              </StyledJobsecondaryInformation>
            </StyledJobHeader>
            <StyledJobDescription>
              {job.Description.map((desc, desc_idx) => (
                <li key={`desc_${desc_idx}`}>{desc}</li>
              ))}
            </StyledJobDescription>
          </StyledJobRow>
        );
      })}
    </StyledJobsContainer>
  );
};
