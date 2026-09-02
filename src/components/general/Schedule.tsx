import { useEffect, useState } from "react";
import { getScheduleForWeek, DAYS } from "../../lib/schedule";
import type { ScheduleEvent } from "../../types/schedule";

const START_HOUR = 9;
const END_HOUR = 24;

function timeToMinutes(time: string) {
	const [hours, minutes] = time.split(":").map(Number);

	return hours * 60 + minutes;
}

function getEventStyle(start: string, end: string, overnight: boolean) {
	const startMinutes = timeToMinutes(start);
	let endMinutes = timeToMinutes(end);
	if (overnight && endMinutes <= startMinutes) endMinutes += 24 * 60;
	if (endMinutes > END_HOUR * 60) endMinutes = END_HOUR * 60 - 10;
	const calendarStart = START_HOUR * 60;
	const calendarDuration = (END_HOUR - START_HOUR) * 60;
	const top = ((startMinutes - calendarStart) / calendarDuration) * 100;
	const height = ((endMinutes - startMinutes) / calendarDuration) * 100;

	return { top: `${top}%`, height: `${height}%`, };
}

function getMonday(date: Date) {
	const day = date.getDay();
	const difference = day === 0 ? -6 : 1 - day;
	const monday = new Date(date);
	monday.setDate(date.getDate() + difference);
	return monday;
}

function formatWeekLabel(startDate: string) {
	const start = new Date(`${startDate}T00:00:00`);
	const end = new Date(start);
	end.setDate(start.getDate() + 6);
	const startMonth = start.toLocaleDateString("en-US", { month: "short", });
	const endMonth = end.toLocaleDateString("en-US", { month: "short", });
	const startDay = start.getDate();
	const endDay = end.getDate();
	const year = end.getFullYear();

	if (startMonth === endMonth) {
		return `${startMonth} ${startDay}–${endDay}, ${year}`;
	}

	return `${startMonth} ${startDay}–${endMonth} ${endDay}, ${year}`;
}

function formatDateLocal(date: Date) {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");

	return `${year}-${month}-${day}`;
}

export default function Schedule() {
	const [schedule, setSchedule] = useState<ScheduleEvent[]>([]);
	const [selectedWeek, setSelectedWeek] = useState(() => {
		const monday = getMonday(new Date());
		return formatDateLocal(monday);
	});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function loadSchedule() {
			try {
				setLoading(true);
				setError(null);
				const events = await getScheduleForWeek(selectedWeek);
				setSchedule(events);
			} catch (error) {
				console.error("Failed to load schedule:", error);
				setError("Unable to load schedule.");
			} finally {
				setLoading(false);
			}
		}

		loadSchedule();
	}, [selectedWeek]);

	function changeWeek(amount: number) {
		const date = new Date(`${selectedWeek}T00:00:00`);
		date.setDate(date.getDate() + amount * 7);
		setSelectedWeek(formatDateLocal(date));
	}

	function goToCurrentWeek() {
		const monday = getMonday(new Date());
		setSelectedWeek(formatDateLocal(monday));
	}

	return (
		<section className="schedule">
			<div className="schedule-header">
				<h2>My Schedule</h2>
				{loading && (<p className="schedule-status"> Loading schedule... </p>)}
				
				<div className="schedule-navigation">
					<div className="week-controls">
						<button type="button" onClick={() => changeWeek(-1)}>
							Previous
						</button>
						<button type="button" onClick={goToCurrentWeek}>
							Today
						</button>
						<button type="button" onClick={() => changeWeek(1)}>
							Next
						</button>
					</div>

					<p className="week-label"> {formatWeekLabel(selectedWeek)} </p>
				</div>
			</div>

			{error && (<p className="schedule-error"> {error} </p>)}

			{!error && (
				<div className="calendar">
					<div className="day-header">
						<div className="time-column" />
						{DAYS.map((day) => (<div className="day" key={day}> {day} </div>))}
					</div>

					<div className="calendar-body">
						<div className="time-column">
							{Array.from({ length: END_HOUR - START_HOUR, }, (_, i) => {
								const hour = START_HOUR + i;

								return (
									<div className="time-label" key={hour}>
										<p> {hour > 12 ? hour - 12 : hour}:00</p>
										<p> {hour >= 12 ? "PM" : "AM"} </p>
									</div>
								);
							})}
						</div>

						{DAYS.map((day) => (
							<div className="day-column" key={day}>
								{Array.from({ length: END_HOUR - START_HOUR, }, (_, i) => (
									<div className="hour-line" key={i} />
								))}

								{schedule.filter((event) => event.days.includes(day)).map((event) => {
									const style = getEventStyle(event.start, event.end, event.overnight);

									return (
										<div
											className="event"
											key={`${event.id}-${day}`}
											style={{ ...style, borderLeftColor: event.color ?? "#6366f1", }}
										>
											<strong> {event.title} </strong>
											<div className="event-tooltip">
												{event.subtitle && (<span> {event.subtitle} </span>)}
												<span> {event.start}{" "}–{" "}{event.end} </span>
											</div>
										</div>
									);
								})}
							</div>
						))}
					</div>
				</div>
			)}
		</section>
	);
}
