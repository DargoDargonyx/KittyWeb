export type Day = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";

export const days: Day[] = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
];

export type RecurringScheduleItem = {
  id: string;
	days: Day[];
  title: string;
  subtitle: string,
	start: string;
  end: string;
  color?: string;
};

export const schedule: RecurringScheduleItem[] = [
  {
    id: "NumTheory",
		days: ["Mon", "Wed", "Fri"],
    title: "Number Theory",
    subtitle: "Class: MAT 4010",
		start: "11:00",
    end: "11:50",
    color: "#f87171",
  },
  {
    id: "CompSys",
		days: ["Mon", "Wed"],
    title: "Computer Systems II",
    subtitle: "Class: CS 3482",
		start: "12:00",
    end: "12:50",
    color: "#60a5fa",
  },
	{
		id: "CompSysLab",
		days: ["Thu"],
		title: "Computer Systems II (Lab)",
		subtitle: "Class: CS 3482",
		start: "15:25",
		end: "17:50",
		color: "#60a5fa"
	},
  {
    id: "RealAnalysis",
		days: ["Mon", "Wed", "Fri"],
    title: "Real Analysis",
		subtitle: "Class: MAT 3220",
    start: "13:00",
    end: "13:50",
    color: "#f87171",
  },
	{
		id: "DemistifyingLLMs",
		days: ["Mon", "Wed", "Fri"],
		title: "Demistifying LLMs",
		subtitle: "Class: CS 5750",
		start: "14:00",
		end: "14:50",
		color: "#60a5fa"
	},
	{
		id: "Database",
		days: ["Tue", "Thu"],
		title: "Database",
		subtitle: "Class: CS 3430",
		start: "14:00",
		end: "15:15",
		color: "#60a5fa"
	},
	{
		id: "DatabaseRecitation",
		days: ["Thu"],
		title: "Database (Recitation)",
		subtitle: "Class: CS 3430",
		start: "10:00",
		end: "10:50",
		color: "#60a5fa"
	},
	{
		id: "CSTutoring",
		days: ["Mon", "Wed"],
		title: "Computer Science Tutoring",
		subtitle: "Tutoring at the Student Learning Center",
		start: "17:00",
		end: "19:30",
		color: "#60a5fa"
	}
];
