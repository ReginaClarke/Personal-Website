import React from "react";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import { Route, Switch } from "react-router-dom";
import Fun from "./components/Fun";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page404 from "./components/Page404";
import Resume from "./components/Resume";
import Resources from "./components/Resources";

// import ContactForm from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>

        <Route exact path={"/about"}>
          <About />
        </Route>

        <Route exact path={"/projects"}>
          <Projects />
        </Route>

        <Route exact path={"/resume"}>
          <Resume />
        </Route>

        <Route exact path={"/fun"}>
          <Fun />
        </Route>

        <Route exact path={"/resources"}>
          <Resources />
        </Route>
        {/* <Route exact path={"/contact"}>
          <ContactForm />
        </Route> */}

        <Route path={""}>
          <Page404 />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
