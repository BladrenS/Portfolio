import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Logos from './components/Logos/Logos';
import Portfolio from './components/Portfolio/Portfolio';
import Stack from './components/Stack/Stack';
import Testimonials from './components/Testimonials/Testimonials';
import Whatido from './components/Whatido/Whatido';


function App() {

  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Logos/>
      <About/>
      <Stack/>
      <Portfolio/>
      <Whatido/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
