import { TechBadge } from "./Components/TechBadge";
import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface JobDescriptions {
	Company: string;
	Dates: string;
	Title: string;
	Description: {
		Text?: React.ReactChild;
		Badges?: React.ReactChild;
	};
}

interface Contact {
	TitleType: string;
	Link: string;
	Icon: IconDefinition;
}

interface Person {
	Name: string;
	Title: string;
	ContactElements?: Contact[];
	Bio: string[];
}

export const aboutMe: Person = {
	Name: "Shawn Hoerner",
	Title: "Software Developer",
	ContactElements: [
		{
			TitleType: "E-Mail",
			Icon: faAt,
			Link: "mailto:resume@shoerner.net"
		},
		{
			TitleType: "GitHub",
			Icon: faGithub,
			Link: "https://github.com/shoerner"
		},
		{
			TitleType: "LinkedIn",
			Icon: faLinkedin,
			Link: "https://linkedin.com/in/shawnhoerner"
		}
	],
	Bio: [
		"I’m a developer trained as a systems administrator that can’t resist a good challenge. My \
		career has ranged from testing products for third-party companies to developing products to \
		enable productivity the world-over. This transition has enabled me to look at challenges \
		from a different light and compels me to find the best solution for unique problems.",

		"Outside of work, I'm on the leadership board for Triangle ReactJS - a Meetup group created \
		to help inspire the community to broaden their horizons when it comes to frontend \
		development."
	]
};

export const jobEntries: JobDescriptions[] = [
	{
		Company: "Citrix Systems",
		Dates: "March 2018 -​ Present",
		Title: "Senior Software Engineer",
		Description: {
			Text: (
				<>
					<p>
						{
							"This role has most recently had me acting as a technical lead for a team of six developing the \
				‘glue’ that binds Citrix Cloud to Citrix Content Collaboration. When my team acquired the product, \
				customer issues were high, unit tests low, and developer desirability to maintain it minimal. In \
				a period of six months, we reduced customer issues by implementing a more intelligible interface, \
				increased test coverage by 30%, and turned it into a repository the team was proud to work on. \
				Throughout this process, I’ve helped level up several developers – ranging not only in skill sets \
				from intern to seniors who wanted to change tech stacks but also from my direct team to other parts \
				of the world."
						}
					</p>
					<p>
						{
							"From a technical perspective, this role taught me more about Dynamo and ASP.NET (maintenance on the \
				React/TypeScript frontend was also necessary). While technical growth was required, I grew most from \
				a people perspective by being placed in a position where I was leading the product and making decisions \
				well before implementation started. Involvement with our design teams, product management teams, and \
				guiding the product to its future had previously been part of my job, but never to such a level. On \
				occasion, I’ve also been able to utilize and expand my knowledge by standing in as a scrum master for \
				my team."
						}
					</p>
					<p>
						{
							"Prior to this, my larger team worked on a number of initiatives that typically involved tech stack \
				migrations to React. The most recent of which was migrating the Citrix Workspace experience from the \
				previous design language into the new “Workspace Vision”"
						}
					</p>
				</>
			),
			Badges: (
				<>
					<TechBadge title="React" devIconName="react-original" backgroundColor="#61dafb" />
					<TechBadge title="TypeScript" devIconName="typescript-plain" backgroundColor="#294E80" />
					<TechBadge title="C#" devIconName="csharp-plain-wordmark" />
				</>
			)
		}
	},
	{
		Company: "Citrix Systems",
		Dates: "April 2017 -​ March 2018",
		Title: "Senior Software Test Engineer",
		Description: {
			Text: (
				<ul>
					<li>
						Successfully migrated 30,000+ test cases to a new Test Case Management system after performing
						evaluation and cost benefit analysis of solutions on the market and how they each fit our needs
					</li>
					<li>
						Performed development duties on ShareFile frontend products utilizing TypeScript React coupled
						with Redux
					</li>
					<li>Provided guidance and development support for the Jest/Enzyme test framework</li>
					<li>Acted as mentor to a number of new React developers, to include several members overseas</li>
				</ul>
			)
		}
	},
	{
		Company: "Citrix Systems",
		Dates: "November 2015 -​ April 2017",
		Title: "Software Test Engineer 2",
		Description: {
			Text: (
				<ul>
					<li>
						Acted as Lead QA Engineer for ShareFile StorageZones, managing the test process both internally
						and with external QA contractors
					</li>
					<li>
						Performed quality assurance testing on a slew of Citrix ShareFile products to include building
						of automated tests and manual test cases
					</li>
					<li>
						Contributed to a number of automated test suites, to include NUnit, Selenium, Jest, and UnitTest
					</li>
					<li>
						Created code contributions to our web application built upon React and Less (among other
						technologies)
					</li>
					<li>Added functionality and minor UX changes to ShareFile StorageZone Controller codebase</li>
					<li>
						Actively assist team members by acting as a knowledgebase, primarily focusing on Fiddler and
						PowerShell
					</li>
				</ul>
			)
		}
	},
	{
		Company: "United States Air Force",
		Dates: "September 2013 -​ November 2015",
		Title: "Computer Scientist",
		Description: {
			Text: (
				<ul>
					<li>
						Perform testing and evaluation on pre-release Microsoft products for implementation
						consideration within the Air Force Network (AFNET)
						<ul>
							<li>Some details fall under NDA and cannot be mentioned freely online</li>
						</ul>
					</li>
					<li>Test and submit bug/feature requests to Microsoft for remedy</li>
					<li>Build solutions with C# .NET 4.5 (WinForms) to help accomplish mission goals</li>
					<li>
						Provided design and decision support for implementation of Windows 10 on the AFNET for both SCCM
						2007 and 2012
					</li>
					<li>
						Managed a lab infrastructure running Microsoft Hyper-V to support testing activities including
						research and discovery into Microsoft VDI
					</li>
					<li>Acted as content manager for department SharePoint instance</li>
				</ul>
			)
		}
	}
];
