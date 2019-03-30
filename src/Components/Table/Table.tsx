import React from "react";
import { css } from "aphrodite";
import { styles } from "./Table.styles";

export interface Props {
	tableRows: React.ReactChild[][];
	tableHeaders?: string[];
	tableSpec: string;
}

export class Table extends React.Component<Props> {
	public render() {
		return (
			<>
				<h3>Expierence</h3>
				<div role="table" className={css(styles.table)}>
					{this.props.tableHeaders && (
						<div
							className={css(styles.row, styles.headerRow)}
							role="row"
							style={{ gridTemplateColumns: this.props.tableSpec }}
						>
							{this.props.tableHeaders.map((col, colIdx) => (
								<div key={colIdx} role="cell">
									{col}
								</div>
							))}
						</div>
					)}
					{this.props.tableRows.map((row, index) => {
						const isEvenRow = !!(index % 2);
						return (
							<div
								className={css(styles.row, isEvenRow && styles.evenRow)}
								key={index}
								role="row"
								style={{ gridTemplateColumns: this.props.tableSpec }}
							>
								{row.map((col, colIdx) => (
									<div key={colIdx} role="cell">
										{col}
									</div>
								))}
							</div>
						);
					})}
				</div>
			</>
		);
	}
}
