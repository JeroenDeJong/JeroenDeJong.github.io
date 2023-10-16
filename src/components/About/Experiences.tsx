import styled from "styled-components"

const ExperienceBulletPoints = styled.ul`
  list-style: inside;
`

export function JobExperienceAtLivingMap() {
  return (
    <>
      <p style={{marginBottom: '20px'}}>
        At Living Map, I started out as a GIS developer, but quickly thereafter switched to the front-end team and then got hired as a full-stack developer. 
        In the 3 and a half years that I have worked there, we have been busy crafting a WebGL based mapping product with various map data layers and unique smart UX workflows
        to help users make sense and also navigate their indoor geospatial environments. Within the team i grew to become the frontend team lead, and was responsible for the web apps.
      </p>
      
      <ExperienceBulletPoints>
        <li>
          I was responsible for leading the conversation between our dev team and the design team, to ensure a smooth implementation of new UX and UI features. 
        </li>
        <li>
          Implemented  various different ways of data visualisations to support UX at the right times
        </li>
        <li>
          Gained experience in collaborating with various other teams as well as working with management to effectively communicate technical issues and challenges. 
        </li>
        <li>Worked on backend services and how to set up a mutually understood and well documented API structure</li>
        <li>I champiogned new technologies into our software stack to effectively combat longstanding software design issues</li>
        <li>Worked with tools such as React, Redux, Mapbox, WebGL, D3 and react to add a richer experience to our product</li>
      </ExperienceBulletPoints>
    </>
  )
}

export function JobExperienceAtKPVLab() {
  return (
    <>
      <p style={{marginBottom: '20px'}}>
        Moving to KPV was an important change because I was overdue for a new challenge. KPV Labs certainly provided that by working on a very advanced and technically interesting 3D graphical graphing application with modern development tool chains.
      </p>

      <ExperienceBulletPoints>
        <li>
          Gained experience working in a different company with different approaches
        </li>
        <li>
          Gained more experience working with 3d software, and the associated way through which such problems should be solved 
        </li>
        <li>
          Was able to structure code in a functional way, and to apply the Test Driven Development (TDD) software philosophy
        </li>
      </ExperienceBulletPoints>
    </>
  )
}