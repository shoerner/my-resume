import React from "react";
import { Contacts } from "../Contacts";
import { css } from "aphrodite";
import { styles } from "./WhoAmI.styles";

export const WhoAmI = () => {
	return (
		<div className={css(styles.container)}>
			<div className={css(styles.me)}>
				<h1>Shawn Hoerner</h1>
				<h2>Software Developer</h2>
			</div>
			<Contacts />
		</div>
	);
};
