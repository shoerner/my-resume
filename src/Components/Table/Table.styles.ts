import { StyleSheet } from "aphrodite";

export const styles = StyleSheet.create({
	evenRow: {
		backgroundColor: "#f4f4f4",
	},
	headerRow: {
		fontWeight: 600,
		paddingBottom: "10px",
		"@media (max-width: 900px)": {
			display: "none",
		},
	},
	row: {
		display: "grid",
		gridAutoFlow: "column",
		gridGap: "10px",
		rowGap: "10px",
		"@media (max-width: 700px)": {
			display: "flex",
			flexDirection: "column",
			paddingBottom: "10px",
		},
	},
	table: {
		paddingTop: "20px",
	},
});
