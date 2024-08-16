import "./style.css";
import React from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./Components/About";

function App() {
  let [progress, setProgress] = React.useState(0);

  const apiKey = process.env.REACT_APP_NEWS_API;
  console.log("API Key:", apiKey);

  return (
    <BrowserRouter>
      <Navbar />
      <LoadingBar color="#f11946" progress={progress} />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setprogress={setProgress}
                key="generalHome"
                country="in"
                category="general"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                setprogress={setProgress}
                key="business"
                country="in"
                category="business"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                setprogress={setProgress}
                key="technology"
                country="in"
                category="technology"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                setprogress={setProgress}
                key="sports"
                country="in"
                category="sports"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setprogress={setProgress}
                key="entertainment"
                country="in"
                category="entertainment"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                setprogress={setProgress}
                key="health"
                country="in"
                category="health"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                setprogress={setProgress}
                key="science"
                country="in"
                category="science"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                setprogress={setProgress}
                key="general"
                country="in"
                category="general"
                apiKey={apiKey}
              />
            }
          ></Route>
          \<Route exact path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
