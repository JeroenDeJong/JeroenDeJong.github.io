import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.main`
  margin-top: 90px;
  margin-bottom: 50px;
`

const Title = styled.span`
  --gradient-to-color: #FF006E;
  --gradient-from-color: #FB5607;
  --gradient-color-stops: var(--gradient-from-color), var(--gradient-to-color, rgba(251, 86, 7, 0));
  background-image: linear-gradient(to right, var(--gradient-color-stops));
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;

  font-size: 40px; 
`

const Description = styled.p`
  margin-top: 0.5em;
  color: #4a5568;

  strong {
    color: black;
  }
`

const Naviation = styled.div`
  margin: 2em;
  width: min-content;
`

const LinkItem = styled(Link)`
  color: black;
  display: block;
  padding: 0.25em;
  font-size: 25px;
  font-weight: 700;
  border-bottom: 5px solid black;

  &:hover, &:focus {
    border-bottom: 5px solid #FB5607;
    transition: 0.2s;
    color: #FB5607;
  }
`

function Home() {
  return (
    <Container>
      <h1>
        <Title>
          Jeroen de Jong
        </Title>
      </h1>
      <Description>
        I am a <strong>Human Geography master student</strong> at the Radboud University in Nijmegen.
        I've previously worked as a Frontend Developer in England and Scotland.
      </Description>

      <Naviation>
        <LinkItem id="about" to="/about">About</LinkItem>
        <LinkItem id="projects" to="/projects">Works</LinkItem>
        <LinkItem id="articles" to="/articles">Articles</LinkItem>
      </Naviation>
    </Container>
  )
}

export { Home }