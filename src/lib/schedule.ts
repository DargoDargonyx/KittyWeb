import { supabase } from "./supabase";

import type {
	Appointment,
	AvailabilityRule,
	Day,
	ScheduleEvent,
	ScheduleException,
} from "../types/schedule";

export const DAYS: Day[] = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

function formatTime(time: string) {
	return time.slice(0, 5);
}

export async function getScheduleForWeek(
	startDate: string
): Promise<ScheduleEvent[]> {
	
	const start = new Date(`${startDate}T00:00:00`);
	const end = new Date(start);
	end.setDate(start.getDate() + 6);
	const endDate = end.toISOString().split("T")[0];
	const { data: rules, error: rulesError } = await supabase
		.from("availability_rules")
		.select("*")
		.eq("active", true);

	if (rulesError) {
		console.error("Error loading availability rules:", rulesError);
		throw rulesError;
	}

	const { data: exceptions, error: exceptionsError } =
		await supabase
			.from("schedule_exceptions")
			.select("*")
			.gte("date", startDate)
			.lte("date", endDate);

	if (exceptionsError) {
		console.error("Error loading schedule exceptions:", exceptionsError);
		throw exceptionsError;
	}

	const { data: appointments, error: appointmentsError } =
		await supabase
			.from("appointments")
			.select("*")
			.gte("date", startDate)
			.lte("date", endDate)
			.neq("status", "cancelled");

	if (appointmentsError) {
		console.error("Error loading appointments:", appointmentsError);
		throw appointmentsError;
	}

	const events: ScheduleEvent[] = [];
	for (let i = 0; i < 7; i++) {
		const date = new Date(start);
		date.setDate(start.getDate() + i);
		const dateString = date
			.toISOString()
			.split("T")[0];

		const dayOfWeek = date.getDay();
		const day = DAYS[dayOfWeek];
		const dayRules = (rules as AvailabilityRule[]).filter(
			(rule) => rule.day_of_week === dayOfWeek
		);

		for (const rule of dayRules) {
			events.push({
				id: `${rule.id}-${dateString}`,
				title: rule.title ?? 
					(rule.type === "available" ? "Available" : "Unavailable"),
				subtitle: rule.subtitle ?? undefined,
				start: formatTime(rule.start_time),
				end: formatTime(rule.end_time),
				days: [day],
				color: rule.color,
			});
		}
	}

	for (const exception of exceptions as ScheduleException[]) {
		const date = new Date(`${exception.date}T00:00:00`);
		const day = DAYS[date.getDay()];

		events.push({
			id: `exception-${exception.id}`,
			title: exception.title ??
				(exception.type === "available" ? "Available" : "Unavailable"),
			subtitle: exception.notes ?? undefined,
			start: formatTime(exception.start_time),
			end: formatTime(exception.end_time),
			days: [day],
			color: exception.type === "available" ? "#22c55e" : "#ef4444",
		});
	}

	for (const appointment of appointments as Appointment[]) {
		const date = new Date(`${appointment.date}T00:00:00`);
		const day = DAYS[date.getDay()];

		events.push({
			id: `appointment-${appointment.id}`,
			title: "Tutoring Appointment",
			start: formatTime(appointment.start_time),
			end: formatTime(appointment.end_time),
			days: [day],
			color: "#f59e0b",
		});
	}

	return events;
}
