import React from "react";
import { aboutMe } from "../resume";
import { css } from "aphrodite";
import { jumbotron } from "./Jumbotron.styles";

export const Jumbotron = () => {
	return (
		<div className={css(jumbotron)}>
			{(aboutMe.Bio || []).map((description, idx) => (
				<p key={idx}>{description}</p>
			))}
		</div>
	);
};
