import "./app.scss"
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experiences from "./components/Experiences/Experiences";
import Project from "./components/Projects/Project";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
const App =() => {
return <div className="app">
<section id='Homepage'>
    <Navbar/>
    <Hero/></section>
    
<section id='About Me'><About/> </section>
<div id='Experiences'><Experiences/></div>
<section id='Projects'><Project/></section>
<section id="Contact"><Contact/></section>
</div>
};
export default App;