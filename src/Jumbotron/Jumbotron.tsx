import React from "react";
import { aboutMe } from "../Resume";
import { css } from "aphrodite";
import { jumbotron } from "./Jumbotron.styles";
import { BodyText } from "../Components/BodyText";

export const Jumbotron = () => {
	return (
		<div className={css(jumbotron)}>
			{(aboutMe.Bio || []).map((description, idx) => (
				<BodyText key={idx} justifyText>{description}</BodyText>
			))}
		</div>
	);
};
