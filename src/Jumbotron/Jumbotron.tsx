import React from "react";
import { aboutMe } from "../resume";
import { css } from "aphrodite";
import { maxJumboWidth } from "./Jumbotron.styles";

export const Jumbotron = () => {
	return (
		<div className={css(maxJumboWidth)}>
			{(aboutMe.Bio || []).map((description, idx) => (
				<p key={idx}>{description}</p>
			))}
		</div>
	);
};
