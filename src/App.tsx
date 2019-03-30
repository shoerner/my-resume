import React from "react";
import { css } from "aphrodite";
import { styles } from "./App.styles";
import { WhoAmI } from "./WhoAmI";
import { Jobs } from "./Jobs";
import { Jumbotron } from "./Jumbotron";
import { Section } from "./Components/Section";

export class App extends React.Component {
	public render() {
		return (
			<div className={css(styles.mainConatiner)}>
				<Section>
					<WhoAmI />
				</Section>
				<Section styles={{ backgroundColor: "#1277BA", color: "white" }}>
					<Jumbotron />
				</Section>
				<Section>
					<Jobs />
				</Section>
				<div className="presentations" />
			</div>
		);
	}
}
