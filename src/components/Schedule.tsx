type Day = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";

type RecurringScheduleItem = {
  id: string;
	days: Day[];
  title: string;
  subtitle: string,
	start: string;
  end: string;
  color?: string;
};

const schedule: RecurringScheduleItem[] = [
  {
    id: "NumTheory",
		days: ["Mon", "Wed", "Fri"],
    title: "Number Theory",
    subtitle: "Class: MAT 4010",
		start: "11:00",
    end: "11:50",
    color: "#ff0000",
  },
  {
    id: "CompSys",
		days: ["Mon", "Wed", "Fri"],
    title: "Computer Systems II",
    subtitle: "Class: CS 3482",
		start: "12:00",
    end: "12:50",
    color: "#0000ff",
  },
	{
		id: "CompSysLab",
		days: ["Thu"],
		title: "Computer Systems II (Lab)",
		subtitle: "Class: CS 3482",
		start: "15:25",
		end: "17:50",
		color: "#0000ff"
	},
  {
    id: "RealAnalysis",
		days: ["Mon", "Wed", "Fri"],
    title: "Real Analysis",
		subtitle: "Class: MAT 3220",
    start: "13:00",
    end: "13:50",
    color: "#ff0000",
  },
	{
		id: "DemistifyingLLMs",
		days: ["Mon", "Wed", "Fri"],
		title: "Demistifying LLMs",
		subtitle: "Class: CS 5750",
		start: "14:00",
		end: "14:50",
		color: "#0000ff"
	},
	{
		id: "Database",
		days: ["Tue", "Thu"],
		title: "Database",
		subtitle: "Class: CS 3430",
		start: "14:00",
		end: "15:15",
		color: "#0000ff"
	},
	{
		id: "DatabaseRecitation",
		days: ["Thu"],
		title: "Database (Recitation)",
		subtitle: "Class: CS 3430",
		start: "10:00",
		end: "10:50",
		color: "#0000ff"
	},
	{
		id: "CSTutoring",
		days: ["Mon", "Wed"],
		title: "Computer Science Tutoring",
		subtitle: "Tutoring at the Student Learning Center",
		start: "17:00",
		end: "19:30",
		color: "#0000ff"
	}
];

const days: Day[] = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
];

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
      <div className="schedule-header">
        <div>
          <h2> My Schedule </h2>
        </div>
        <button className="view-button"> View calendar </button>
      </div>

      <div className="calendar">
        <div className="day-header">
          <div className="time-column" />
          {days.map((day) => (
            <div className="day" key={day}> {day} </div>
          ))}
        </div>

        <div className="calendar-body">
          <div className="time-column">
            {Array.from(
              { length: END_HOUR - START_HOUR },
              (_, i) => {
                const hour = START_HOUR + i;

                return (
                  <div
                    className="time-label"
                    key={hour}
                  >
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
                (_, i) => (
                  <div
                    className="hour-line"
                    key={i}
                  />
                )
              )}

              {schedule.filter((event) => event.days.includes(day)).map((event) => {
                  const style = getEventStyle(event.start, event.end);

                  return (
                    <div
                      className="event"
                      key={`${event.id}-${day}`}
                      style={{
                        ...style,
                        borderLeftColor: event.color ?? "#6366f1",
                      }}
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

