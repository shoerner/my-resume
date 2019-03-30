import React from "react";
import { css } from "aphrodite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { styles } from "./TitledIcon.styles";

export const TitledIcon = ({
	title,
	devIconName,
	faIcon,
	target,
	forcePassedCase,
}: {
	title: string;
	devIconName?: string;
	faIcon?: IconProp;
	target: string;
	forcePassedCase?: boolean;
}) => {
	const htmlFor = Math.random().toString();
	return (
		<a
			className={css(styles.verticalIconLayout, !forcePassedCase && styles.forceCaps)}
			href={target}
			rel="noopener"
			target="_blank"
		>
			<label htmlFor={htmlFor} className={css(styles.accessibleLabel)}>
				{title}
			</label>
			{devIconName && <i className={`devicon-${devIconName}`} id={htmlFor} />}
			{faIcon && (
				<div id={htmlFor}>
					<FontAwesomeIcon icon={faIcon} />
				</div>
			)}
		</a>
	);
};
