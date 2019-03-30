import { StyleSheet } from "aphrodite";

export const { defaultStyle } = StyleSheet.create({
	defaultStyle: {
		padding: "20px 40px",
		margin: "10px 0",
		display: "flex",
		justifyContent: "center",
		"@media print": {
			backgroundColor: "transparent",
			color: "black",
		},
	},
});
