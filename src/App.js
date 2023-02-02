import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  );
}

export default App;
