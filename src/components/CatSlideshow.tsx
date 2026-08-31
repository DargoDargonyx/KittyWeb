import { useEffect, useState } from "react";
import { mistyImages, marcyImages } from "./../data/images";


export default function CatSlideshow() {
	const [currentMisty, setCurrentMisty] = useState(0);
	const [currentMarcy, setCurrentMarcy] = useState(0);

	useEffect(() => {
		const mistyInterval = setInterval(() => {
			setCurrentMisty(
				(prev) => (prev + 1) % mistyImages.length
			);
		}, 10000);

		const marcyInterval = setInterval(() => {
			setCurrentMarcy(
				(prev) => (prev + 1) % marcyImages.length
			);
		}, 10000);

		return () => {
			clearInterval(mistyInterval);
			clearInterval(marcyInterval);
		};
	}, []);


	const previousMisty = () => {
		setCurrentMisty((prev) => prev === 0 ? mistyImages.length - 1 : prev - 1);
	};

	const nextMisty = () => {
		setCurrentMisty((prev) => prev === mistyImages.length - 1 ? 0 : prev + 1);
	};

	const previousMarcy = () => {
		setCurrentMarcy((prev) => prev === 0 ? marcyImages.length - 1 : prev - 1);
	};

	const nextMarcy = () => {
		setCurrentMarcy((prev) => prev === marcyImages.length - 1 ? 0 : prev + 1);
	};

	return (
		<section className="cat-slideshow">
			<div>
				<div className="cat-header">
					<div>
						<p className="eyebrow"> Introducing the Explorer </p>
						<h2> Misty </h2>
					</div>

					<span> { currentMisty + 1 } / { mistyImages.length } </span>
				</div>

				<div className="cat-image-container">
					<img
						src={ mistyImages[currentMisty] }
						alt="Image not found"
						className="cat-image"
					/>

					<button
						className="slide-button previous"
						onClick={ previousMisty }
						aria-label="Previous photo"
					>
						Prev
					</button>

					<button
						className="slide-button next"
						onClick={ nextMisty }
						aria-label="Next photo"
					>
						Next
					</button>
				</div>

				<div className="slide-dots">
					{mistyImages.map((_, index) => (
						<button
							key={index}
							className={ `dot ${index === currentMisty ? "active" : ""}` }
							onClick={ () => setCurrentMisty(index) }
							aria-label={ `Show photo ${index + 1}` }
						/>
					))}
				</div>
			</div>

			<div>
				<div className="cat-header">
					<div>
						<p className="eyebrow"> Introducing the Goober </p>
						<h2> Marcy </h2>
					</div>

					<span> { currentMarcy + 1 } / { marcyImages.length } </span>
				</div>

				<div className="cat-image-container">
					<img
						src={ marcyImages[currentMarcy] }
						alt="Image not found"
						className="cat-image"
					/>

					<button
						className="slide-button previous"
						onClick={ previousMarcy }
						aria-label="Previous photo"
					>
						Prev
					</button>

					<button
						className="slide-button next"
						onClick={ nextMarcy }
						aria-label="Next photo"
					>
						Next
					</button>
				</div>

				<div className="slide-dots">
					{marcyImages.map((_, index) => (
						<button
							key={index}
							className={ `dot ${index === currentMarcy ? "active" : ""}` }
							onClick={ () => setCurrentMarcy(index) }
							aria-label={ `Show photo ${index + 1}` }
						/>
					))}
				</div>
			</div>
		</section>
	);
}
