import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useLocation,
  withRouter,
} from "react-router-dom";
import Testmonial from "./Testimonial";
import Team from "./Team";
import Contact from "./Contact";
// import Footer from "./Footer";
import logo from "./img/logo.png";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}

const ScrollToTop = withRouter(_ScrollToTop);

function NavBar() {
  const [affix, setAffix] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setAffix(true);
      } else {
        setAffix(false);
      }
    });
  }, []);

  const toogleClass = () => {
    setActive(!active);
  };
  const clickNavItem = () => {
    setActive(!active);
  };

  return (
    <Router>
      <ScrollToTop>
        <nav className={"nav " + (affix ? "affix" : "")}>
          <div className="container">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div
              id="mainListDiv"
              className={"main_list " + (active ? "show_list" : "")}
            >
              <ul className="navlinks">
                <li>
                  <Link to="/team" onClick={clickNavItem}>
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <span
              className={"navTrigger " + (active ? "active" : "")}
              onClick={toogleClass}
            >
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
        </nav>
      </ScrollToTop>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/team" component={Team} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Main />
      <AboutUs />
      <Testmonial />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

function Main() {
  return (
    <section className="home">
      <img src={logo} alt="LOGO" />
      <div className="br"></div>
      <div className="tagline">
        <span>Formulate,</span>
        <span>Collaborate,</span>
        <span>Initiate</span>
      </div>
    </section>
  );
}

function PageNotFound() {
  return <div>404 Error</div>;
}

function AboutUs() {
  return (
    <div className="about">
      <div className="aboutwrap">
        <h1>About Us</h1>
        <p>
          Making these words our foundation we at our Entrepreneurship Cell try
          to build arks so that budding entrepreneurs can wade through. We play
          a key role in India's transformation in the new millennium by turning
          a pile of creative ideas into sustainable innovations. We endeavour to
          be altruistic in assisting the students to kick off from being{" "}
          <span>WANTREPRENEURS TO ENTREPRENEURS.</span>
        </p>
      </div>
    </div>
  );
}

export default NavBar;
