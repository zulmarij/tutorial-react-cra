import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import AbooutTeam from "./AboutTeam";
import Blog from "./Blog";
import BlogDetail from "./BlogDetail";
import NotFound from "./NotFound";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="team" element={<AbooutTeam />} />
        </Route>
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
