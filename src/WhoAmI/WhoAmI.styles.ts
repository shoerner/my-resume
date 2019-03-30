import { StyleSheet } from "aphrodite";

export const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		textAlign: "center",

		"@media (max-width: 700px)": {
			flexDirection: "row",
			textAlign: "left",
		},
	},
	me: {
		paddingBottom: "40px",
	},
});
