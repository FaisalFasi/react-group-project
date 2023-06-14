// from packages
import { Route } from "wouter";

// components
import Navbar from "./component/Navbar";

//pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="h-screen flex flex-col justify-stretch ">
      <Navbar />
      <section id="main-section" className="bg-gray-200 p-5 w-full">
        <Route path="/">{<Landing />}</Route>
        <Route path="/login">{<Login />}</Route>
        <Route path="/register">{<Register />}</Route>
        <Route path="/search">{<Search />}</Route>
        <Route path="/settings">{<Settings />}</Route>
      </section>
    </div>
  );
}

export default App;
