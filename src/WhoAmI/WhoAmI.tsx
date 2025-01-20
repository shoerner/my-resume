import React from 'react';
import { ResumeContext } from '../Components/ResumeProvider';
import {
	Name,
	StyledContactBody,
	StyledContactImage,
	StyledContactTable,
	StyledNoneAnchor,
	StyledPersonDescription,
	StyledSpacerRule,
	Title,
	WhoAmIHeader,
} from './WhoAmI.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const WhoAmI = () => {
	const { Person } = React.useContext(ResumeContext);

	return (
		<>
			<WhoAmIHeader>
				<div>
					<Name>{Person.Name}</Name>
					<Title>{Person.Title}</Title>
				</div>
				<div>
					{Person.ContactElements.map((element) => {
						let text: React.ReactNode = '';
						if (element.Target) {
							text = (
								<StyledNoneAnchor href={element.Target}>
									{element.Body}
								</StyledNoneAnchor>
							);
						} else {
							text = <span>{element.Body}</span>;
						}

						return (
							<StyledContactTable key={`${element.Name}`}>
								<StyledContactImage>
									<FontAwesomeIcon
										icon={element.Icon as any}
									/>
								</StyledContactImage>
								<StyledContactBody aria-label={element.Name}>
									{text}
								</StyledContactBody>
							</StyledContactTable>
						);
					})}
				</div>
			</WhoAmIHeader>
			<StyledSpacerRule />
			{Person.Description && (
				<>
					{Person.Description.map((descr, idx) => (
						<StyledPersonDescription key={idx}>
							{descr}
						</StyledPersonDescription>
					))}
					<StyledSpacerRule />
				</>
			)}
		</>
	);
};
