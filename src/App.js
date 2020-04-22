import React from "react";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import { Route, Switch } from "react-router-dom";
import Play from "./components/Play";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page404 from "./components/Page404";

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

        <Route exact path={"/play"}>
          <Play />
        </Route>

        <Route path={""}>
          <Page404 />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
