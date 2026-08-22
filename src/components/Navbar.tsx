import { Link } from "react-router-dom";


export default function NavBar() {
	return (
		<nav className="main-navbar">
			<Link to="/KittyWeb">					 Home			</Link>
			<Link to="/KittyWeb/tutoring"> Tutoring	</Link>
			<Link to="/KittyWeb/projects"> Projects	</Link>
			<Link to="/KittyWeb/settings"> Settings	</Link>
			<Link to="/KittyWeb/about">		 About		</Link>
		</nav>
	);
}
