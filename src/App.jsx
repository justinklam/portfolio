import { useContext } from "react";
import { ThemeContext } from "./context";

// Components
import TopNav from "./components/topNav/TopNav";
import Toggle from "./components/toggle/Toggle";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";

const App = () => {
  
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    // if dark mode, make background color #222. else make white
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <TopNav/>
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
};

export default App;