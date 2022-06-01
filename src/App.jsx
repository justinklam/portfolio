import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeProvider } from "./context";

const App = () => {

  return <div>
    <ThemeProvider>
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </ThemeProvider>
    </div>;
};

export default App;