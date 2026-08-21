import Schedule from "./../components/Schedule";


export default function Home() {
	return (
		<section className="home-page">
			<h2> Home </h2>
			<div className="home-page-schedule-container"> <Schedule /> </div>
		</section>
	);
}
