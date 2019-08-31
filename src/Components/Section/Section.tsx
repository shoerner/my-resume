import React from "react";
import { css } from "aphrodite";
import { defaultStyle } from "./Section.styles";

export const Section = ({ children, styles }: { children: React.ReactChild; styles?: React.CSSProperties }) => (
	<section className={css(defaultStyle)} style={styles}>
		{children}
	</section>
);
