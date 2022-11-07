import { Link } from "react-router-dom"
import styled from "styled-components"


const Container = styled.div`
  margin-top: 75px;
  display: flex;
  flex-wrap: wrap;
`

const ProjectItemLink = styled.a`
  width: 400px;
  height: 300px;
  margin: 10px;

  --gradient-to-color: #FF006E;
  --gradient-from-color: #FB5607;
  --gradient-color-stops: var(--gradient-from-color),var(--gradient-to-color,rgba(251,86,7,0));
  border: 3px solid transparent;
  border-image-slice: 20;
  border-image-source: linear-gradient(to right,var(--gradient-color-stops));

`


function Projects() {
  return (
    <Container>
      <ProjectItemLink href="http://www.jeroentravel.com">
      <h3>
        Jeroen Travel - My Personal Travel Tracker
      </h3>

      <span>
        Track here my past, and current travels. 
      </span>

      </ProjectItemLink>
      <ProjectItemLink/>
      <ProjectItemLink/>
      <ProjectItemLink/>

    </Container>
  )
}

export { Projects } 