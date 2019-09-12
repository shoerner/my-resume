import { StyleSheet } from "aphrodite";

export const styles = StyleSheet.create({
	badgeContainer: {
		display: "inline-flex",
		justifyContent: "flex-end",
	},
	descriptionContainer: {
		display: "flex",
		flexDirection: "column",
		":first-child": {
			marginBlockStart: 0,
		},
		":last-child": {
			marginBlockEnd: 0,
		},
	},
});
