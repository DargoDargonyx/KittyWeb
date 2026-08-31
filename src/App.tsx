import { Routes, Route } from "react-router-dom";

import NavBar from "./components/general/Navbar";

import Home from "./pages/Home";
import Settings from "./pages/Settings";
import About from "./pages/About";

import Tutoring from "./pages/tutoring/Tutoring";
import CSTutoring from "./pages/tutoring/CSTutoring";
import MathTutoring from "./pages/tutoring/MathTutoring";

import Projects from "./pages/projects/Projects";


export default function App() {
	return (
		<div className="webpage-body">
			<div className="hero"> 
				<h1> KittyWeb </h1>
				<NavBar />
			</div>
		  
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/settings" element={<Settings/>}/>
				<Route path="/about" element={<About/>}/>
        
				<Route path="/tutoring" element={<Tutoring/>}/>
				<Route path="/tutoring/cs" element={<CSTutoring/>}/>
				<Route path="/tutoring/math" element={<MathTutoring/>}/>
        
				<Route path="/projects" element={<Projects/>}/>
      </Routes>
		</div>
	);
}
