interface Props {
	sections: string[],
	selected: number,
	onSelect: (index: number) => void;
};

export default function TutoringClassSectionNav({ sections, selected, onSelect, }: Props) {
	return (
		<aside className="tutoring-class-section-nav">
			{sections.map((section, index) => (
				<button
					key={section}
					className={selected === index ? "active" : ""}
					onClick={() => onSelect(index)}
				>
					{section}
				</button>
			))}
		</aside>
	);
}
