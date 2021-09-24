import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AboutUs from "./components/About";
import Portfolio from "./components/Portfolio";



function App() {
  return (
    
      <Layout className="height-100">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          
        </Switch>
        <Footer />
      </Layout>
    
  );
}

export default App;