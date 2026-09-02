export type Day =
	| "Monday"
	| "Tuesday"
	| "Wednesday"
	| "Thursday"
	| "Friday"
	| "Saturday"
	| "Sunday";

export type ScheduleEvent = {
	id: string;
	title: string;
	subtitle?: string;
	start: string;
	end: string;
	days: Day[];
	color?: string;
	overnight: boolean;
};

export type AvailabilityRule = {
	id: number;
	day_of_week: number;
	start_time: string;
	end_time: string;
	type: "available" | "busy";
	title?: string | null;
	subtitle?: string | null;
	color: string;
	active: boolean;
	overnight: boolean;
};

export type ScheduleException = {
	id: number;
	date: string;
	start_time: string;
	end_time: string;
	type: "available" | "busy";
	title?: string | null;
	subtitle?: string | null;
	notes?: string | null;
	color: string;
	overnight: boolean;
};

export type Appointment = {
	id: number;
	student_name: string;
	student_email: string;
	date: string;
	start_time: string;
	end_time: string;
	status: "pending" | "confirmed" | "cancelled";
	notes?: string | null;
	created_at: string;
};
