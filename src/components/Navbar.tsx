import { Link } from "react-router-dom";


export default function NavBar() {
	return (
		<nav className="main-navbar">
			<Link to="/">					Home			</Link>
			<Link to="/tutoring"> Tutoring	</Link>
			<Link to="/projects"> Projects	</Link>
			<Link to="/settings"> Settings	</Link>
			<Link to="/about">		About			</Link>
		</nav>
	);
}
