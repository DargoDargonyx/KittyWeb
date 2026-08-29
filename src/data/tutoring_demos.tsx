import BinaryDemo from "./../components/tutoring_demos/cs/BinaryDemo";
import BinaryOpsDemo from "./../components/tutoring_demos/cs/BinaryOpsDemo";


export type TutoringDemo = {
	id: string,
	component: React.ReactNode;
};

export const cs_1100_demos: TutoringDemo[] = [
	{
		id: "BinaryDemo",
		component: <BinaryDemo />
	},
	{
		id: "BinaryOpsDemo",
		component: <BinaryOpsDemo />
	},
];

export const cs_1440_demos: TutoringDemo[] = [
	{
		id: "BinaryDemo",
		component: <BinaryDemo />
	},
	{
		id: "BinaryOpsDemo",
		component: <BinaryOpsDemo />
	},
];

export const cs_2440_demos: TutoringDemo[] = [];

export const cs_2490_demos: TutoringDemo[] = [];

export const cs_2450_demos: TutoringDemo[] = [];

export const cs_3481_demos: TutoringDemo[] = [];

export const cs_3667_demos: TutoringDemo[] = [];

export const cs_3460_demos: TutoringDemo[] = [];

export const cs_3490_demos: TutoringDemo[] = [];
