import React from "react";
import { aboutMe } from "../resume";
import { css } from "aphrodite";
import { styles } from "./Contacts.styles";
import { TitledIcon } from "../Components/TitledIcon";

export const Contacts = () => {
	return (
		<div className={css(styles.contacts)}>
			{(aboutMe.ContactElements || []).map((contact, idx) => (
				<TitledIcon title={contact.TitleType} faIcon={contact.Icon} target={contact.Link} key={idx} />
			))}
		</div>
	);
};
