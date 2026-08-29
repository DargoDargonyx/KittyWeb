import type { TutoringDemo } from "./tutoring_demos";

import { cs_1100_demos, cs_1440_demos, cs_2440_demos, 
	cs_2490_demos, cs_2450_demos, cs_3481_demos, cs_3667_demos, 
	cs_3460_demos, cs_3490_demos } from "./tutoring_demos";


export type Class = {
	id: number,
	title: string,
	demos: TutoringDemo[]
};

export const cs_classes: Class[] = [
	{
		id: 1100,
		title: "Discrete Math",
		demos: cs_1100_demos
	},
	{
		id: 1440,
		title: "Computer Science I",
		demos: cs_1440_demos
	},
	{
		id: 2440,
		title: "Computer Science II",
		demos: cs_2440_demos
	},
	{
		id: 2490,
		title: "Intro to Theoretical Computer Science",
		demos: cs_2490_demos
	},
	{
		id: 2450,
		title: "Intro to Computer Systems",
		demos: cs_2450_demos
	},
	{
		id: 3481,
		title: "Computer Systems I",
		demos: cs_3481_demos
	},
	{
		id: 3667,
		title: "Software Engineering",
		demos: cs_3667_demos
	},
	{
		id: 3460,
		title: "Data Structures",
		demos: cs_3460_demos
	},
	{
		id: 3490,
		title: "Programming Languages",
		demos: cs_3490_demos
	},
];

export const math_classes: Class[] = [];
