import Body from "./Main/Body.jsx";
import NavBar from "./components/Nav.jsx";
import SplashCursor from "./components/SplashCursor.jsx";
import Page2 from "./Main/page2.jsx";
import TeamMem from "D:/web/OscReact/src/Main/Teams.jsx";
import "./index.css";

function App() {
  return (
    <div className="main-pages min-h-screen w-full bg-[#080A16]">
      <NavBar />
      <Body />
      <SplashCursor />
      <Page2 />
      <TeamMem />
    </div>
  );
}

export default App;
