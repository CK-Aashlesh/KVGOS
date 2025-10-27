import Body from "./Main/Body.jsx";
import NavBar from "D:/web/OscReact/src/components/Nav.jsx";
import SplashCursor from "D:/web/OscReact/src/components/SplashCursor.jsx";
import Page2 from "D:/web/OscReact/src/Main/page2.jsx";
import "./index.css";

function App() {
  return (
    <div className="main-pages h-screen w-full bg-[#080A16]">
      <NavBar></NavBar>
      <Body />
      <SplashCursor />
      <Page2 />
    </div>
  );
}

export default App;
