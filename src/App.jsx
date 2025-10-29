import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Nav.jsx";
import Body from "./Main/Body.jsx";
import Page2 from "./Main/page2.jsx";
import TeamMem from "./Main/Teams.jsx";
import SplashCursor from "./components/SplashCursor.jsx";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="main-pages min-h-screen w-full bg-[#080A16]">
        <NavBar />
        <Routes>
          {/* Routing for Home */}
          <Route
            path="/"
            element={
              <>
                <Body />
                <Page2 />
                <SplashCursor />
              </>
            }
          />

          {/* Routing for Team  */}
          <Route path="/teams" element={<TeamMem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
