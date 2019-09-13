import { StyleSheet } from "aphrodite";

export const { defaultStyle } = StyleSheet.create({
	defaultStyle: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		margin: "10px 0",
		minWidth: "375px",
		padding: "20px 40px",
		"@media print": {
			backgroundColor: "transparent",
			color: "black",
		},
		"@media (max-width: 700px)": {
			boxSizing: "content-box",
			margin: 0,
			minWidth: "375px",
			padding: "20px",
			width: "100%",
		}
	},
});
