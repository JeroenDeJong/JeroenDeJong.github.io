import { Link } from "react-router-dom"
import styled from "styled-components"
import { ExperienceContainer, ExperienceImage, ExperienceTitle } from "./About/FlexContent"
import { Section } from "./About"

const Container = styled.main`
  margin-top: 90px;
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;
  row-gap: 50px;
`


function Projects() {
  return (
    <Section title="Projects">
      <Container>
        <ExperienceContainer>
          <>
            <div>
              <ExperienceImage src="/assets/JeroenTravel.png"/>
            </div>
            <div>
              <ExperienceTitle as='a' rel="noopener noreferrer" href="http://www.jeroentravel.com">Jeroen Travel - My Personal Travel Tracker</ExperienceTitle>
              <p>
                I made this personal travel website out of a longing for a better experience during travel as well as the ability for a more detailed geographical representation of my travels.
                I have developed an admin portal for this, which i can acces to upload gps tracks data as well as pictures. From the pictures uploaded, the GPS data will automaticallically be pulled out of the picture,
                and these picture will then also be represented on the map. 

                Furthermore it is also possible to write stories on every entry. 

                This project is in active work in progress, so some features might still require improvements. 
              </p>
            </div>
          </>
        </ExperienceContainer>
      </Container>
    </Section>
  )
}

export { Projects } 