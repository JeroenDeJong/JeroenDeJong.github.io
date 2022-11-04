import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Article } from "./components/Article";
import { Articles } from "./components/Articles";
import { Header } from './components/Header'
import { Home } from "./components/Home";

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/'
  return (
    <Routes>
      <Route path="/" element={<Layout header={!isHome}/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="articles" element={<Articles />} />
        <Route path="projects" element={<Projects />} />
        <Route path="articles/:id" element={<Article/>} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function Layout({header}: {header: boolean}) {
  return (
    <>
      {header && <Header/>} 
      <Outlet />
    </>
  );
}

function About() {
  return (
    <div>
      <h2>This is a place for my CV and stuff</h2>
    </div>
  )
}

function Projects() {
  return (
    <div>
      <h2>Projects -- Mostly a place for my website: JeroenTravel</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
