import { useState } from "react";

import TutoringClassNav from "./../../components/tutoring/TutoringClassNav";
import TutoringClassSectionNav from "./../../components/tutoring/TutoringClassSectionNav";
import { cs_classes } from "./../../data/classes";


export default function CSTutoring() {
	const [selectedClass, setSelectedClass] = useState(() => {
		const saved = localStorage.getItem("selectedClass");
		return saved ? Number(saved) : 0;
	});
	function selectClass(index: number) {
		localStorage.setItem("selectedClass", index.toString());
		localStorage.setItem("selectedSection", "0");
		if (selectedClass != index) setSelectedSection(0);
		setSelectedClass(index);
	}
	const currentClass = cs_classes[selectedClass];


	const sections: string[] = [ "Learning Materials", "Demos" ];
	const [selectedSection, setSelectedSection] = useState(() => {
		const saved = localStorage.getItem("selectedSection");
		return saved ? Number(saved) : 0;
	});
	function selectSection(index: number) {
		localStorage.setItem("selectedSection", index.toString());
		setSelectedSection(index);
	}
	const currentSection = sections[selectedSection];

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
					<TutoringClassSectionNav 
						sections={sections}
						selected={selectedSection}
						onSelect={selectSection}
					/>

					{(currentSection == "Demos") ?
							(currentClass.demos.map((demo) => (
								<div className="tutoring-demo" key={demo.id}>
									<h2> {demo.id} </h2>
									{demo.component}
								</div>
							)))
						:
							(currentClass.materials.map((material) => (
								<div className="tutoring-material" key={material.title}>
									<p> <strong> Type: {material.type} </strong> </p>
									<p> <strong> Title: {material.title} </strong> </p>
									<p> Content: {material.content} </p>
								</div>
							)))
					}
				</div>
			</div>
		</section>
	);
}
