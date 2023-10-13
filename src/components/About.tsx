import styled from "styled-components"
import { LifeExperience } from "./About/LifeExperience";
import { ElevatorPitch, Personal } from "./About/Personal";


const AboutContainer = styled.div`
  @media (min-width: 712px) {
    margin: 0 100px;
  }
`

const SectionTitle = styled.h2`
  margin: 30px 0;
  border-bottom: 5px solid black;
`

function Section({ title, children }: { title: string, children: any }) {
  return (
    <>
      <SectionTitle>
        {title}
      </SectionTitle>
      {children}
    </>
  )
}

function About() {
  return (
    <AboutContainer>
      <Personal/>
      <ElevatorPitch/>

      <Section title="Life Experience">
        <LifeExperience/>
      </Section>

      <div style={{height: '100px'}}/>
    </AboutContainer>
  )
}


export { About }