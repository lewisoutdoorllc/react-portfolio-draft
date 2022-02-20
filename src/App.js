
import './App.css';
import About from './componets/About';
import Experience from './componets/Experience';
import Footer from './componets/Footer';
import Hobbies from './componets/Hobbies';
import Navbar from './componets/Navbar';
import Projects from './componets/Projects';


function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Experience />
      <Hobbies />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
