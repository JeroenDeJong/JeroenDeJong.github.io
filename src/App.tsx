import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { About } from "./components/About";
import { Article } from "./components/Article";
import { Articles } from "./components/Articles";
import { Header } from './components/Header'
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import styled from "styled-components";

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/'
  return (
    <Routes>
      <Route path="/" element={<Layout header={!isHome}/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="articles" element={<Articles />} />
        <Route path="projects" element={<Projects />} />
        <Route path="articles/:id" element={<Article/>} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

const Container = styled.div`
  @media (min-width: 712px) {
    margin: 0 200px;
  }
`

function Layout({header}: {header: boolean}) {
  return (
    <>
      {header && <Header/>} 
      <Container>
        <Outlet />
      </Container>
    </>
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
