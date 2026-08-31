import type { Class } from "./../../data/classes";


interface Props {
	classes: Class[],
	selected: number,
	onSelect: (index: number) => void;
};

export default function TutoringClassNav({ classes, selected, onSelect, }: Props) {
	return (
		<aside className="tutoring-class-nav">
			{classes.map((class_, index) => (
				<button
					key={class_.id}
					className={selected === index ? "active" : ""}
					onClick={() => onSelect(index)}
				>
					{class_.title}
				</button>
			))}
		</aside>
	);
}
