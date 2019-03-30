import { StyleSheet } from "aphrodite/no-important";

export const styles = StyleSheet.create({
	forceWhite: {
		color: "white",
	},
	iconContainer: {
		backgroundColor: "white",
		alignItems: "center",
		border: "1px solid #EEE",
		borderRadius: "4px",
		display: "flex",
		flexDirection: "row-reverse",
		fontSize: ".8rem",
		justifyContent: "space-between",
		margin: "0 2px",
		padding: "1px 5px",
		"@media print": {
			color: "black !important",
			backgroundColor: "white !important",
		},
	},
	iconLabel: {
		paddingLeft: "4px",
	},
});
