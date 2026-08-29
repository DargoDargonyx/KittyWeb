import { useState } from "react";

import TutoringClassNav from "./../../components/TutoringClassNav";
import { cs_classes } from "./../../data/classes";


export default function CSTutoring() {
	const [selectedClass, setSelectedClass] = useState(() => {
		const saved = localStorage.getItem("selectedClass");
		return saved ? Number(saved) : 0;
	});
	
	function selectClass(index: number) {
		localStorage.setItem("selectedClass", index.toString());
		setSelectedClass(index);
	}
	
	const currentClass = cs_classes[selectedClass];

	return (
		<section className="tutoring-page">
			<div className="page-header">
				<h1> Computer Science Tutoring </h1>
			</div>

			<div className="tutoring-page-body">
				<TutoringClassNav 
					classes={cs_classes}
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
