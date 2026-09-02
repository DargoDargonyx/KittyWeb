import { Link } from "react-router-dom";


export default function NavBar() {
	return (
		<nav className="main-navbar">
			<div className="main-navbar-link"> <Link to="/">	Home </Link> </div>
			
			<div className="main-navbar-dropdown"> 
				<Link to="/tutoring"> Tutoring </Link>
			
				<div className="main-navbar-dropdown-menu">  
					<Link to="/tutoring/cs"> Computer Science </Link>
					<Link to="/tutoring/math"> Math </Link>
				</div>
			</div>
			

			<div className="main-navbar-link"> 
				<Link to="/projects"> Projects </Link> 
			</div>
			<div className="main-navbar-link"> 
				<Link to="/settings"> Settings </Link> 
			</div>
			<div className="main-navbar-link"> 
				<Link to="/about"> About </Link> 
			</div>
		</nav>
	);
}
