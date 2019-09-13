import React from "react";
import { css, StyleSheet } from "aphrodite";

const { pStyle, justify } = StyleSheet.create({
	pStyle: {
		marginBottom: "10px",
		"@media (max-width: 700px)": {
			margin: "5px 0",
			textAlign: "justify",
			":last-child": {
				marginBottom: "20px",
			}
		},
	},
	justify: {
		textAlign: "justify",
	},
});

export const BodyText = ({ children, justifyText }: { children: React.ReactChild; justifyText?: boolean }) => {
	return <p className={css(pStyle, justifyText && justify)}>{children}</p>;
};
