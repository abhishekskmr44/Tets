import { useContext, useEffect } from "react";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import { ThemeContext } from "./context";
import "./common.css";
import NIntro from "./components/NIntro/NIntro";
import Skill from "./components/Skills/Skill";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // if you want to show the loader when React loads data again

  const hideLoader = (loader) => {
    loader.classList.remove("loader--show");
    loader.classList.add("loader--hide");
  };
  useEffect(() => {
    setTimeout(() => {
      const loader = document.querySelector(".fullpage");
      hideLoader(loader);
    }, 1500);
  }, []);
  return (
    <>
      <div
        style={{
          backgroundColor: darkMode ? "#222" : "white",
          color: darkMode && "white",
        }}
      >
        <div className="fullpage loader--show">
          <div className="loader"></div>
        </div>
        {/* <Quote /> */}
        <Navbar />
        <NIntro />
        <About />
        <Skill />
        <ProductList />
        <Footer />
      </div>
    </>
  );
}

export default App;
