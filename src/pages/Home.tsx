import Schedule from "./../components/Schedule";


export default function Home() {
	return (
		<section className="home-page">
			<div className="page-header">
				<h1> Website Homepage </h1>
			</div>
			<div className="home-page-schedule-container"> <Schedule /> </div>
		</section>
	);
}
