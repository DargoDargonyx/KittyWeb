import type { TutoringDemo } from "./tutoring_demos";

import { cs_1100_demos, cs_1440_demos, cs_2440_demos, 
	cs_2490_demos, cs_2450_demos, cs_3481_demos, cs_3667_demos, 
	cs_3460_demos, cs_3490_demos } from "./tutoring_demos";

import { mat_0010_demos, mat_1001_demos, mat_1020_demos, 
	mat_1110_demos, mat_1120_demos, mat_2110_demos, mat_2240_demos, 
	mat_3110_demos } from "./tutoring_demos";

type ClassMaterials = {
	type: string;
	title: string;
	content: string;
};

export type Class = {
	id: number;
	title: string;
	materials: ClassMaterials[];
	demos: TutoringDemo[];
};

export const cs_classes: Class[] = [
	{
		id: 1100,
		title: "Discrete Math",
		materials: [{
			type: "N/A",
			title: "NONE",
			content: ""
		}],
		demos: cs_1100_demos
	},
	{
		id: 1440,
		title: "Computer Science I",
		materials: [{
			type: "N/A",
			title: "NONE",
			content: ""
		}],
		demos: cs_1440_demos
	},
	{
		id: 2440,
		title: "Computer Science II",
		materials: [{
			type: "N/A",
			title: "NONE",
			content: ""
		}],
		demos: cs_2440_demos
	},
	{
		id: 2490,
		title: "Intro to Theoretical Computer Science",
		materials: [{
			type: "N/A",
			title: "NONE",
			content: ""
		}],
		demos: cs_2490_demos
	},
	{
		id: 2450,
		title: "Intro to Computer Systems",
		materials: [{
			type: "N/A",
			title: "NONE",
			content: ""
		}],
		demos: cs_2450_demos
	},
	{
		id: 3481,
		title: "Computer Systems I",
		materials: [{
			type: "N/A",
			title: "NONE",
			content: ""
		}],
		demos: cs_3481_demos
	},
	{
		id: 3667,
		title: "Software Engineering",
		materials: [{
			type: "N/A",
			title: "NONE",
			content: ""
		}],
		demos: cs_3667_demos
	},
	{
		id: 3460,
		title: "Data Structures",
		materials: [{
			type: "N/A",
			title: "NONE",
			content: ""
		}],
		demos: cs_3460_demos
	},
	{
		id: 3490,
		title: "Programming Languages",
		materials: [{
			type: "N/A",
			title: "NONE",
			content: ""
		}],
		demos: cs_3490_demos
	},
];

export const math_classes: Class[] = [
	{
		id: 10,
		title: "Developmental Mathematics",
		materials: [{
			type: "N/A",
			title: "NONE",
			content: ""
		}],
		demos: mat_0010_demos
	},
	{
		id: 1001,
		title: "Foundations in Mathematics and Mindsets",
		materials: [{
			type: "N/A",
			title: "NONE",
			content: ""
		}],
		demos: mat_1001_demos
	},
	{
		id: 1020,
		title: "College Algebra with Applications",
		materials: [{
			type: "N/A",
			title: "NONE",
			content: ""
		}],
		demos: mat_1020_demos
	},
	{
		id: 1110,
		title: "Calculus with Analytical Geometry I",
		materials: [{
			type: "N/A",
			title: "NONE",
			content: ""
		}],
		demos: mat_1110_demos
	},
	{
		id: 1120,
		title: "Calculus with Analytical Geometry II",
		materials: [{
			type: "N/A",
			title: "NONE",
			content: ""
		}],
		demos: mat_1120_demos
	},
	{
		id: 2110,
		title: "Techniques of Proof",
		materials: [{
			type: "N/A",
			title: "NONE",
			content: ""
		}],
		demos: mat_2110_demos
	},
	{
		id: 2240,
		title: "Intro to Linear Algebra",
		materials: [{
			type: "N/A",
			title: "NONE",
			content: ""
		}],
		demos: mat_2240_demos
	},
	{
		id: 3110,
		title: "Modern Algebra",
		materials: [{
			type: "N/A",
			title: "NONE",
			content: ""
		}],
		demos: mat_3110_demos
	}
];
