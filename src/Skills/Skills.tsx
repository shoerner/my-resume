import React from 'react';
import { ResumeContext } from '../Components/ResumeProvider';
import { DoNothingUl, SkillListItem } from './Skills.styled';
import { RightSectionWrapper } from '../Components/RightSectionWrapper';

const BAR_WIDTH = '200';
const BAR_HEIGHT = '8';

export const Skills = () => {
	const {
		Person: { Skills },
	} = React.useContext(ResumeContext);

	const sortedSkills = [...Skills]
		.sort((a, b) => (b?.Level ?? 0) - (a?.Level ?? 0))
		.slice(0, 8);

	const shouldRenderProgressBars = sortedSkills.every((skill) => skill.Level);

	return (
		<RightSectionWrapper title="Skills">
			<DoNothingUl>
				{sortedSkills.map((skill) => (
					<SkillListItem key={skill.Name}>
						{skill.Name}
						{shouldRenderProgressBars && (
							<svg width={BAR_WIDTH} height={BAR_HEIGHT}>
								<g>
									<rect
										height={BAR_HEIGHT}
										width={BAR_WIDTH}
										fill="#a1a1a1"
										rx="4"
									/>
									<rect
										height={BAR_HEIGHT}
										width={skill.Level! * 2}
										fill="darkblue"
										rx="4"
									/>
								</g>
							</svg>
						)}
					</SkillListItem>
				))}
			</DoNothingUl>
		</RightSectionWrapper>
	);
};
