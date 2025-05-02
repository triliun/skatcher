import About from "./components/About";
import Benefit from "./components/Benefit";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Newslatter from "./components/Newslatter";
import Overview from "./components/Overview";
import Provide from "./components/Provide";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Provide />
        <Overview />
        <Benefit />
        <Contact />
        <Newslatter />
      </main>
      <Footer />
    </>
  );
};

export default App;
