import { Routes, Route } from "react-router-dom";

import NavBar from "./components/Navbar";

import Home from "./pages/Home";
import Tutoring from "./pages/Tutoring";
import Projects from "./pages/Projects";
import Settings from "./pages/Settings";
import About from "./pages/About";


export default function App() {
	return (
		<div className="webpage-body">
			<div className="hero"> 
				<h1> KittyWeb </h1>
				<NavBar />
			</div>
		  
			<Routes>
        <Route path="/"					element={ <Home /> }		 />
        <Route path="/tutoring" element={ <Tutoring /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/settings" element={ <Settings /> } />
        <Route path="/about"		element={ <About /> }    />
      </Routes>
		</div>
	);
}
