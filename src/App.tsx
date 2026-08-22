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
        <Route path="/KittyWeb"					 element={ <Home />     }	/>
        <Route path="/KittyWeb/tutoring" element={ <Tutoring /> } />
        <Route path="/KittyWeb/projects" element={ <Projects /> } />
        <Route path="/KittyWeb/settings" element={ <Settings /> } />
        <Route path="/KittyWeb/about"		 element={ <About />		} />
      </Routes>
		</div>
	);
}
