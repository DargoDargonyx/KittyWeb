import { days, schedule } from "./../../data/schedule.tsx";


const START_HOUR = 9;
const END_HOUR = 22;

function timeToMinutes(time: string) {
	const [hours, minutes] = time.split(":").map(Number);
	return hours * 60 + minutes;
}

function getEventStyle(start: string, end: string) {
	const startMinutes = timeToMinutes(start);
	const endMinutes = timeToMinutes(end);

	const calendarStart = 9 * 60;
	const calendarDuration = 13 * 60;

	const top = ((startMinutes - calendarStart) / calendarDuration) * 100;
	const height = ((endMinutes - startMinutes) / calendarDuration) * 100;

	return {
		top: `${top}%`,
		height: `${height}%`,
	};
}

export default function Schedule() {
	return (
		<section className="schedule">
			<div className="schedule-header"> <h2> My Schedule </h2> </div>

			<div className="calendar">
				<div className="day-header">
				<div className="time-column" />
				
				{days.map((day) => ( <div className="day" key={day}> {day} </div> ))}
			</div>

			<div className="calendar-body">
				<div className="time-column">
					{Array.from(
					{ length: END_HOUR - START_HOUR },
					(_, i) => {
						const hour = START_HOUR + i;

						return (
							<div className="time-label" key={hour}>
								<p>
									{hour > 12 ? hour - 12 : hour}:00{" "}
									{hour >= 12 ? "PM" : "AM"}
								</p>
							</div>
						);
					}
				)}
				</div>

				{days.map((day) => (
					<div className="day-column" key={day}>
						{Array.from(
							{ length: END_HOUR - START_HOUR },
							(_, i) => ( <div className="hour-line" key={i} /> )
						)}

						{schedule.filter((event) => event.days.includes(day)).map((event) => {
							const style = getEventStyle(event.start, event.end);

							return (
								<div
									className="event"
									key={`${event.id}-${day}`}
									style={{ ...style, borderLeftColor: event.color ?? "#6366f1", }}
								>
									<strong> {event.title} </strong>
									<div className="event-tooltip">
										<span> {event.subtitle} </span>
										<span> {event.start} – {event.end} </span>
									</div>
								</div>
							);
						})}
					</div>
				))}
				</div>
			</div>
		</section>
	);
}
