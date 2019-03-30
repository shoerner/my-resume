import React from "react";
import { Color } from "csstype";
import { css } from "aphrodite/no-important";
import { styles } from "./TechBadge.styles";
import { blackLuminance, getLuminance, whiteLuminance } from "../../lib/getLuminance";

export interface Props {
	title: string;
	devIconName: string;
	backgroundColor?: Color;
}

interface State {
	isPrinting: boolean;
}

export class TechBadge extends React.Component<Props, State> {
	public state: State = {
		isPrinting: window.matchMedia("print").matches,
	};
	private htmlFor = Math.random().toString();

	public componentDidMount() {
		window.matchMedia("print").addListener(this.setMediaPrinting);
	}

	public render() {
		const backgroundColor = this.props.backgroundColor || "#FFFFFF";
		const contrastRatios = {
			black: (getLuminance(backgroundColor) + 0.05) / (blackLuminance + 0.05),
			white: (whiteLuminance + 0.05) / (getLuminance(backgroundColor) + 0.05),
		};
		const forceWhiteContrast = contrastRatios.white > contrastRatios.black && contrastRatios.white > 4.51;
		let iconQuery = this.props.devIconName;

		if ((this.state.isPrinting || backgroundColor.toUpperCase() === "#FFFFFF") && !iconQuery.includes("colored")) {
			iconQuery += " colored";
		}

		return (
			<div
				className={css(styles.iconContainer, forceWhiteContrast && styles.forceWhite)}
				style={{ backgroundColor: this.props.backgroundColor }}
			>
				<label className={css(styles.iconLabel)} htmlFor={this.htmlFor}>
					{this.props.title}
				</label>
				<i className={`devicon-${iconQuery}`} id={this.htmlFor} role="presentation" />
			</div>
		);
	}

	public componentWillUnmount() {
		window.matchMedia("print").removeListener(this.setMediaPrinting);
	}

	private setMediaPrinting = (listener: MediaQueryListEvent) => this.setState({ isPrinting: listener.matches });
}
