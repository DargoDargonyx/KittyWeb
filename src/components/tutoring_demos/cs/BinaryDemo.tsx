import { useState } from "react";


export default function BinaryDemo() {
		const [number, setNumber] = useState("");
		const decimal = Number(number) || 0;
		const binary = decimal >= 1 && decimal <= 3999 ? decimal.toString(2) : "0";


	return (
		<div className="binary-demo">
			<h1 className={decimal >= 0 && decimal <= 3999 ? 
				"binary-demo-header" : "binary-demo-header invalid"}> 
				Please type a number between 1 and 3999
			</h1>

			<input
				type="number"
				min="0"
				placeholder="0"
				value={number}
				onChange={(e) => setNumber(e.target.value)}
			/>

			<div className="binary-demo-display">
				{binary.split("").map((bit, index) => (
					<span 
						key={index} 
						className={bit === "1" ? "binary-demo-bit active" : "binary-demo-bit"}
					>
						{bit}
					</span>
				))}
			</div>
		</div>
	);
}
