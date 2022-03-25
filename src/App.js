import "./App.css";
import { HashRouter, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <HashRouter basename="/">
      <Home />
    </HashRouter>
  );
}

export default App;
