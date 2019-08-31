import React from "react";
import { css } from "aphrodite";
import { jobEntries } from "../resume";
import { styles } from "./Jobs.styles";
import { Table } from "../Components/Table";

export const Jobs = () => {
	const rows = jobEntries.map((job, idx) => [
		job.Company,
		job.Dates,
		job.Title,
		<div key={idx} className={css(styles.descriptionContainer)}>
			{job.Description.Text}
			{job.Description.Badges && <div className={css(styles.badgeContainer)}>{job.Description.Badges}</div>}
		</div>,
	]);

	const columnHeader = ["Company", "Dates", "Title", "Description"];

	return (
		<Table tableSpec="repeat(3, 13%) auto" tableRows={rows} tableHeaders={columnHeader} tableTitle="Expierence" />
	);
};
