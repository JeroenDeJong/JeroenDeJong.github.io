import styled from "styled-components"

const ExperienceBulletPoints = styled.ul`
  list-style: inside;
`


function LivingMap() {
  return (
    <>
      <p style={{marginBottom: '20px'}}>
        At Living Map, I started out as a GIS developer, but quickly thereafter switched to the front-end team and then got hired as a full-time developer. 
        In the 3 and a half years that I have worked there, we have been busy crafting a WebGL based mapping product with various map data layers and unique smart UX workflows
        to help users make sense and also navigate their indoor geospatial environments.
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

function KPVLab() {
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`

const ExperienceContainer = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 712px) {
    flex-direction: column;
    gap: 10px;
  }
`

const ExperienceImage = styled.img`
  max-width: 220px;
  border-radius: 25px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

const ExperienceTitle = styled.h3`
  --gradient-to-color: #FF006E;
  --gradient-from-color: #FB5607;
  --gradient-color-stops: var(--gradient-from-color), var(--gradient-to-color, rgba(251, 86, 7, 0));
  background-image: linear-gradient(to right, var(--gradient-color-stops));
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;

  font-size: 23px;
  margin-bottom: 8px;
`

const ExperiencePeriod = styled.h5`

`

function LifeExperience() {
  return (
    <Container>

      <ExperienceContainer>
        <div>
          <ExperienceImage src="/assets/Radboud.png"/>
        </div>
        <div>
          <ExperienceTitle>Msc in Human Geography at Radboud University</ExperienceTitle>
          <ExperiencePeriod>September 2021 - November 2023</ExperiencePeriod>
          
        </div>
      </ExperienceContainer>

      <ExperienceContainer>
        <div>
          <ExperienceImage src="/assets/KPV.jpg"/>
        </div>
        <div>
          <ExperienceTitle>Frontend Software Developer at KPV Lab</ExperienceTitle>
          <ExperiencePeriod>December 2020 - September 2021</ExperiencePeriod>
          <KPVLab/>
        </div>
      </ExperienceContainer>

      <ExperienceContainer>
        <div>
          <ExperienceImage src="/assets/LM.png"/>
        </div>
        <div>
          <ExperienceTitle>Software Developer at Living Map</ExperienceTitle>
          <ExperiencePeriod>February 2017 - December 2020</ExperiencePeriod>
          <LivingMap/>
        </div>
      </ExperienceContainer>

      <ExperienceContainer>
        <div>
          <ExperienceImage src="/assets/HU.png"/>
        </div>
        <div>
          <ExperienceTitle>BSc Geodesy and Geo-informatics</ExperienceTitle>
          <ExperiencePeriod>August 2013 - August 2017</ExperiencePeriod>
          
        </div>
      </ExperienceContainer>

    </Container>
  )
}

export { LifeExperience }