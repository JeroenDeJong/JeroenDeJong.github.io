import styled from "styled-components"
import { FlexContentWithImage } from "./FlexContent"
import { JobExperienceAtKPVLab, JobExperienceAtLivingMap } from "./Experiences"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`

function LifeExperience() {
  return (
    <Container>
      <FlexContentWithImage 
        imageSource="/assets/Radboud.png"
        title="Msc in Human Geography at Radboud University"
      >
        <h5>September 2021 - November 2023</h5>
        <p>
          My time working as a software developer taught me the importance of think before you act. I realised, i wanted to address this by taking a more theorethical 
          approach to my career. I decided to work towards achieving a masters degree at the Radboud University. I chose this degree because this topic has always been of much personal interest to me.
        </p>        
      </FlexContentWithImage>

      <FlexContentWithImage 
        imageSource="/assets/KPV.jpg"
        title="Frontend Software Developer at KPV Lab"
      >
        <h5>December 2020 - September 2021</h5>
        <JobExperienceAtKPVLab/>
      </FlexContentWithImage>

      <FlexContentWithImage 
        imageSource="/assets/LM.png"
        title="Software Developer at Living Map"
      >
        <h5>February 2017 - December 2020</h5>
        <JobExperienceAtLivingMap/>
      </FlexContentWithImage>

      <FlexContentWithImage 
        imageSource="/assets/HU.png"
        title="BSc Geodesy and Geo-informatics at the Hogeschool Utrecht"
      >
        <h5>August 2013 - August 2017</h5>
      </FlexContentWithImage>

    </Container>
  )
}

export { LifeExperience }