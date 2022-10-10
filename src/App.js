import "./styles.css";
import scrollTo from "./helper";

const Nav = () => {
  return (
    <nav className="d-flex al-center gap-1rem">
      <button
        data-to="home"
        onClick={({
          target: {
            dataset: { to }
          }
        }) => {
          scrollTo(to);
        }}
      >
        Home
      </button>
      <button
        data-to="port"
        onClick={({
          target: {
            dataset: { to }
          }
        }) => {
          scrollTo(to);
        }}
      >
        Poftfolio
      </button>
      <button
        data-to="about"
        onClick={({
          target: {
            dataset: { to }
          }
        }) => {
          scrollTo(to);
        }}
      >
        About
      </button>
    </nav>
  );
};

const Home = () => {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div id="port">
      <h1>Portfolio</h1>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div id="about">
      <h1>AboutUs</h1>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Portfolio />
      <AboutUs />
    </div>
  );
}
