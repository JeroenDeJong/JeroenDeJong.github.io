import styled from "styled-components"
import { LifeExperience } from "./About/LifeExperience";
import { ElevatorPitch, Personal } from "./About/Personal";


const SectionTitle = styled.h2`
  margin: 30px 0;
  border-bottom: 5px solid black;
`

export function Section({ title, children }: { title: string, children: any }) {
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
    <>
      <Personal/>
      <ElevatorPitch/>

      <Section title="Life Experience">
        <LifeExperience/>
      </Section>

      <div style={{height: '100px'}}/>
    </>
  )
}


export { About }