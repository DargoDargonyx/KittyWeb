import { useState } from "react";

import TutoringClassNav from "./../../components/tutoring/TutoringClassNav";
import { math_classes } from "./../../data/classes";


export default function MathTutoring() {
	const [selectedClass, setSelectedClass] = useState(() => {
		const saved = localStorage.getItem("selectedClass");
		return saved ? Number(saved) : 0;
	});
	
	function selectClass(index: number) {
		localStorage.setItem("selectedClass", index.toString());
		setSelectedClass(index);
	}
	
	const currentClass = math_classes[selectedClass];

	return (
		<section className="tutoring-page">
			<div className="page-header">
				<h1> Computer Science Tutoring </h1>
			</div>

			<div className="tutoring-page-body">
				<TutoringClassNav 
					classes={math_classes}
					selected={selectedClass}
					onSelect={selectClass}
				/>

				<div className="tutoring-page-class-body">
					<h1> {currentClass.title} </h1>
				</div>
			</div>
		</section>
	);
}
