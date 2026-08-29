import { Link } from "react-router-dom";


export default function NavBar() {
	return (
		<nav className="main-navbar">
			<Link to="/">	Home </Link>
			
			<div className="main-navbar-dropdown"> 
				<Link to="/tutoring"> Tutoring </Link>
			
				<div className="main-navbar-dropdown-menu">  
					<Link to="/tutoring/cs"> Computer Science </Link>
					<Link to="/tutoring/math"> Math </Link>
				</div>
			</div>
			

			<Link to="/projects"> Projects </Link>
			<Link to="/settings"> Settings </Link>
			<Link to="/about"> About </Link>
		</nav>
	);
}
