export const heroHighlights = [
	'350K+ downloads across published mobile apps',
	'Experience in enterprise systems and high-traffic applications',
	'Strong background in APIs, microservices, and real-time features',
];

export const metrics = [
	{ value: '350K+', label: 'mobile app downloads across published products' },
	{ value: '6+', label: 'years building production web and mobile systems' },
	{ value: '2020-2026', label: 'senior engineering track at Enapsys' },
];

export const keyAchievements = [
	'Built mobile apps with 350K+ downloads',
	'Led development of enterprise applications',
	'Designed scalable backend systems with real-time features',
	'Published apps in production environments',
	'Co-authored an INIFAP-published research article tied to a production mobile app',
	'Mentored junior developers',
];

export const skillGroups = [
	{
		title: 'Core',
		description: 'Primary technologies used to build production-grade mobile, frontend, and backend systems.',
		items: ['Flutter', 'React Native', 'React', 'NestJS', 'TypeScript'],
	},
	{
		title: 'Architecture & Backend',
		description: 'System design and backend capabilities used in scalable, integration-heavy products.',
		items: ['Microservices', 'GraphQL', 'REST APIs', 'Real-time systems (WebSockets)'],
	},
	{
		title: 'Other',
		description: 'Additional tools used across delivery, deployment, and modern frontend workflows.',
		items: ['Laravel', 'Astro', 'Svelte', 'Docker', 'AWS'],
	},
];

export const experience = [
	{
		period: '2026-Present',
		company: 'Freelance',
		role: 'Senior Fullstack Developer',
		summary:
			'Delivered production backend systems for clients needing real-time behavior, reliable payments, and resilient infrastructure.',
		points: [
			'Designed and implemented scalable backend services with Laravel to support production workflows, operational reliability, and long-term maintainability.',
			'Built real-time features using WebSockets and Pusher, enabling live product behavior where responsiveness directly affected user experience.',
			'Integrated Stripe and Stripe Connect payment systems, supporting transactional flows and marketplace-style payment distribution.',
			'Improved push notification reliability and deployment workflows on AWS EC2, reducing operational friction and strengthening delivery confidence.',
		],
	},
	{
		period: '2020-2026',
		company: 'Enapsys',
		role: 'Senior JavaScript Developer',
		summary:
			'Contributed to enterprise-grade applications where frontend architecture, backend API design, and team-level engineering quality all mattered.',
		points: [
			'Led development of enterprise applications with React and NestJS, shipping systems built for complexity, scale, and long-lived product evolution.',
			'Designed and implemented GraphQL and REST APIs that supported demanding business workflows while contributing to architecture decisions across the stack.',
			'Built reusable UI systems and worked on Astro microfrontends to improve consistency, delivery speed, and maintainability across products.',
			'Mentored junior developers and helped raise engineering standards across implementation quality, architecture thinking, and day-to-day execution.',
		],
	},
	{
		period: '2020',
		company: 'Blackstone Studio',
		role: 'Fullstack Developer',
		summary:
			'Built product-facing web platforms that combined modern frontend delivery, data visualization, and cloud-backed architecture.',
		points: [
			'Built real estate platforms with Next.js and React, delivering user-facing experiences tied closely to business presentation and usability.',
			'Implemented D3.js-based data visualization features that turned complex information into clearer product insight for end users.',
			'Worked with AWS and serverless architectures to support scalable deployments and lean operational workflows.',
		],
	},
	{
		period: '2019-2020',
		company: 'GOB TI',
		role: 'Lead Mobile Engineer',
		summary:
			'Led mobile delivery for public-sector and campaign products where architectural direction, execution speed, and team coordination were critical.',
		points: [
			'Led mobile application development across Ionic and Flutter projects, owning delivery for products serving government and campaign use cases.',
			'Defined architecture decisions that shaped how applications were structured, scaled, and maintained across multiple initiatives.',
			'Guided developers while shipping user-facing mobile products, combining technical leadership with practical execution under real delivery constraints.',
		],
	},
];

export const publishedApps = [
	{
		name: 'Truth Tables Calculator',
		downloads: '350K+ downloads',
		purpose:
			'Built to help students and technical users generate and validate truth tables quickly through a dedicated mobile-first learning tool.',
		impact:
			'Reached hundreds of thousands of users and became a widely used educational app for logic-focused workflows.',
		tech: 'Flutter, Android, Mobile Product Design',
		link: 'https://play.google.com/store/apps/details?id=com.jovannyrch.tablasdeverdad',
	},
	{
		name: 'Karnaugh Maps',
		downloads: '15K+ downloads',
		purpose:
			'Created to simplify Karnaugh map solving and make digital-logic study faster, clearer, and more accessible on mobile.',
		impact:
			'Delivered meaningful adoption in a specialized educational niche, helping learners reduce manual work and improve study efficiency.',
		tech: 'Flutter, Android, Mobile Product Design',
		link: 'https://play.google.com/store/apps/details?id=com.jovannyrch.kmaps',
	},
];
