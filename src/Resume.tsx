import { TechBadge } from "./Components/TechBadge";
import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faAt as fontAwesomeAtSymbol } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface JobDescriptions {
	Company: string;
	Dates: string;
	Title: string;
	Description: {
		Text?: string[] | React.ReactChild;
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
			Icon: fontAwesomeAtSymbol,
			Link: "mailto:resume+2019@shoerner.net",
		},
		{
			TitleType: "GitHub",
			Icon: faGithub,
			Link: "https://github.com/shoerner",
		},
		{
			TitleType: "LinkedIn",
			Icon: faLinkedin,
			Link: "https://linkedin.com/in/shawnhoerner",
		},
	],
	Bio: [
		"I’m a developer trained as a systems administrator that can’t resist a good challenge. My \
		career has ranged from testing products for third-party companies to developing products to \
		enable productivity the world-over. This transition has enabled me to look at challenges \
		from a different light and compels me to find the best solution for unique problems.",

		"Outside of work, I'm on the leadership board for Triangle ReactJS - a Meetup group created \
		to help inspire the community to broaden their horizons when it comes to frontend \
		development.",
	],
};

export const jobEntries: JobDescriptions[] = [
	{
		Company: "Citrix Systems",
		Dates: "March 2018 -​ Present",
		Title: "Senior Software Engineer",
		Description: {
			Text: [
				"This role has most recently had me acting as a technical lead for a team of six developing the \
				‘glue’ that binds Citrix Cloud to Citrix Content Collaboration. When my team acquired the product, \
				customer issues were high, unit tests low, and developer desirability to maintain it minimal. In \
				a period of six months, we reduced customer issues by implementing a more intelligible interface, \
				increased test coverage by 30%, and turned it into a repository the team was proud to work on. \
				Throughout this process, I’ve helped level up several developers – ranging not only in skill sets \
				from intern to seniors who wanted to change tech stacks but also from my direct team to other parts \
				of the world.",
				"From a technical perspective, this role taught me more about Dynamo and ASP.NET (maintenance on the \
				React/TypeScript frontend was also necessary). While technical growth was required, I grew most from \
				a people perspective by being placed in a position where I was leading the product and making decisions \
				well before implementation started. Involvement with our design teams, product management teams, and \
				guiding the product to its future had previously been part of my job, but never to such a level. On \
				occasion, I’ve also been able to utilize and expand my knowledge by standing in as a scrum master for \
				my team.",
				"Prior to this, my larger team worked on a number of initiatives that typically involved tech stack \
				migrations to React. The most recent of which was migrating the Citrix Workspace experience from the \
				previous design language into the new “Workspace Vision”",
			],
			Badges: (
				<>
					<TechBadge title="React" devIconName="react-original" backgroundColor="#61dafb" />
					<TechBadge title="TypeScript" devIconName="typescript-plain" backgroundColor="#294E80" />
					<TechBadge title="C#" devIconName="csharp-plain-wordmark" />
					<TechBadge title="AWS" devIconName="amazonwebservices-original" backgroundColor="#F7A80D" />
					<TechBadge title="BitBucket" devIconName="bitbucket-plain" backgroundColor="#0049B0" />
				</>
			),
		},
	},
	{
		Company: "Citrix Systems",
		Dates: "April 2017 -​ March 2018",
		Title: "Senior Software Test Engineer",
		Description: {
			Text: [
				"Continuing in the capacity of Lead QA for StorageZones, this position also saw me take on the task of \
				evaluating and adopting a new test case management system. Vendor discovery and selection were performed, \
				ultimately resulting in migrating 30,000 test cases with no outages for QA or our external testing team.",
				"This role transitioned shortly thereafter to a development role where I was part of a team of three who \
				built the ShareFile Custom Workflows feature from the ground up. During this time, I provided content \
				knowledge to a team unfamiliar with React, TypeScript, and Jest. Throughout this project, I trained several \
				developers how to use this particular stack – including two recent college graduates with minimal frontend web \
				development experience.",
			],
			Badges: (
				<>
					<TechBadge title="React" devIconName="react-original" backgroundColor="#61dafb" />
					<TechBadge title="TypeScript" devIconName="typescript-plain" backgroundColor="#294E80" />
				</>
			),
		},
	},
	{
		Company: "Citrix Systems",
		Dates: "November 2015 -​ April 2017",
		Title: "Software Test Engineer 2",
		Description: {
			Text: [
				"Acting as the Lead QA engineer for ShareFile StorageZones, I was responsible for testing the product, directing our \
				external testers, and the final quality stamp prior to releasing our product to customers. Creating comprehensive test \
				suites in this role required me to become intimately familiar with how Fiddler and how to apply PowerShell to create \
				complete solutions.",
				"It was while I was in this role that I began contributing minor UI changes to the front-end for the StorageZone \
				codebase and the related web application pages in the main ShareFile application.",
			],
			Badges: (
				<>
					<TechBadge title="Windows Server" devIconName="windows8-original" backgroundColor="#00adef" />
					<TechBadge title="C#" devIconName="csharp-plain-wordmark" />
					<TechBadge title="BitBucket" devIconName="bitbucket-plain" backgroundColor="#0049B0" />
				</>
			),
		},
	},
	{
		Company: "United States Air Force",
		Dates: "September 2013 -​ November 2015",
		Title: "Computer Scientist",
		Description: {
			Text: [
				"On a team of three, we were responsible for testing pre-release Microsoft products for potential use on the Air \
				Force Network (AFNET). Test plans were formed for “expected adoption” cases within the network and appropriate \
				bug/feature requests were created for areas that the product could more closely assist mission needs. My day-to-day \
				involved testing and acting as a liaison between my team and the Microsoft QA/development team(s).",
				"The scope of work quickly moved me to a generalist in a number of regards: network requirements placed my team in the \
				unique position of providing design and decision support for Windows 10 task sequences in SCCM 2007 and 2010. This \
				naturally fed into a lab manager role managing ten servers running HyperV for general team usage, with the capacity \
				to deploy to a lab environment of 100+ clients. Towards the end of my time here, I was dedicated to developing \
				common scripts in PowerShell and ultimately full applications using C# .NET 4.5 (WinForms) for distribution \
				within the Air Force.",
			],
			Badges: (
				<>
					<TechBadge title="Windows Server" devIconName="windows8-original" backgroundColor="#00adef" />
					<TechBadge title="C#" devIconName="csharp-plain-wordmark" />
				</>
			),
		},
	},
];
