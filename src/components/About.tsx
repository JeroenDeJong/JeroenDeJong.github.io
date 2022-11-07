import styled, { createGlobalStyle } from "styled-components"
import { WorkExperience } from "./About/WorkExperience";
import { ElevatorPitch, Personal } from "./About/Personal";
import { Education } from "./About/Education";


const ChronaCustomStyles = createGlobalStyle`
  .card-sub-title {
    color: black !important;
  }
`

const AboutContainer = styled.div`
  @media (min-width: 712px) {
    margin: 0 100px;
  }
`

const SectionTitle = styled.h2`
  margin-top: 30px;
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
      <ChronaCustomStyles/>
      <Personal/>
      <ElevatorPitch/>

      <Section title="Education">
        <Education/>
      </Section>

      <Section title="Work Experience">
        <WorkExperience/>
      </Section>

      <div style={{height: '100px'}}/>
    </AboutContainer>
  )
}


export { About }