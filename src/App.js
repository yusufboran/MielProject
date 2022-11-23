import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import ScrollToTop from "./helpers/ScrollToTop";
import OfficesPage from "./pages/Offices";
import ProjectsPage from "./pages/Projects";
import ServiceDetails from "./pages/ProjectDetails";
import i18next from "i18next";

const App = () => {
  React.useEffect(() => {
    i18next.changeLanguage("tr");
  }, []);
  return (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/projects"}`}
            component={ProjectsPage}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/projects/:serviceID"}`}
            component={ServiceDetails}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/about"}`}
            component={About}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/about"}`}
            component={About}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/contact"}`}
            component={Contact}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/offices"}`}
            component={OfficesPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/"}`}
            component={HomePage}
          />

          <Route path={"*"} component={Error404} />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  );
};

export default App;
