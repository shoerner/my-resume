import React from "react";
import { css } from "aphrodite";
import { jobEntries } from "../Resume";
import { styles } from "./Jobs.styles";
import { Table } from "../Components/Table";
import { BodyText } from "../Components/BodyText";

export const Jobs = () => {
	const rows = jobEntries.map((job, idx) => [
		job.Company,
		job.Dates,
		job.Title,
		<div key={idx} className={css(styles.descriptionContainer)}>
			{Array.isArray(job.Description.Text)
				? job.Description.Text.map((descriptionText, descriptionIdx) => (
						<BodyText key={`${idx}.${descriptionIdx}`}>{descriptionText}</BodyText>
				))
				: job.Description.Text}
			{job.Description.Badges && <div className={css(styles.badgeContainer)}>{job.Description.Badges}</div>}
		</div>,
	]);

	const columnHeader = ["Company", "Dates", "Title", "Description"];

	return (
		<Table tableSpec="repeat(3, 13%) auto" tableRows={rows} tableHeaders={columnHeader} tableTitle="Expierence" />
	);
};
