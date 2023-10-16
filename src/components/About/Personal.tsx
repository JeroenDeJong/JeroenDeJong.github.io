import styled from "styled-components"
import {Geo, Linkedin, Twitter, EnvelopeCheckFill, MapFill, Translate, HospitalFill, FlagFill} from 'react-bootstrap-icons'

/**
 * In principle: if its mobile we use flexbox,
 * if its desktop: we use float left, and right due to the shape-outside requirements. 
 */

const RoundedImage = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  box-shadow: 0 30px 40px 0 rgb(16 36 94 / 30%);
  border: 3px solid #FB5607;

  @media (min-width: 712px) {
    float: left;
    shape-outside: circle(50%);
  }

  @media (max-width: 712px) {
    margin: auto;
    margin-bottom: 20px;
  }
`

const ImageContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;

  @media (min-width: 712px) {
    height: calc(300px + 6px);
    position: relative;
    left: calc(50% - 250px);
  }

  @media (max-width: 712px) {
    display: flex;
    flex-direction: column;
  }
`

const IconContainer = styled.div`
  display: block;
  color: black;
  margin: 5px 0;

  @media (min-width: 712px) {
    left: 15px;
    position: relative;
  }

  span {
    margin-left: 5px;
  }

  svg {
    vertical-align: middle;
  }
`

const InformationContainer = styled.div`
  @media (max-width: 712px) {
    margin: auto;
  }
`



function Personal() {
  return (
    <ImageContainer>
      <RoundedImage src="assets/IMG_5551.jpeg"/>

      <InformationContainer>
        <IconContainer>
          <Geo/>
          <span>Nijmegen, The Netherlands</span>
        </IconContainer>

        <IconContainer>
          <HospitalFill/>
          <span>19 September 1995</span>
        </IconContainer>

        <IconContainer>
          <FlagFill/>
          <span>Dutch Nationality</span>
        </IconContainer>

        <IconContainer>
          <Translate/>
          <span>Native Dutch & English</span>
        </IconContainer>

        <IconContainer>
          <Translate/>
          <span>Limited German</span>
        </IconContainer>

        <IconContainer>
          <Translate/>
          <span>Learning Russian</span>
        </IconContainer>

        <br/>

        <IconContainer as={'a'} href="https://www.linkedin.com/in/jeroen-dejong/" target="_blank" rel="noopener noreferrer">
          <Linkedin/>
          <span>Connect with me on LinkedIn</span>
        </IconContainer>

        <IconContainer as={'a'} href="https://twitter.com/jeroendj11" target="_blank" rel="noopener noreferrer">
          <Twitter/>
          <span>Follow me on Twitter</span>
        </IconContainer>

        <IconContainer as={'a'} href="mailto:jdjjong@hotmail.com" target="_blank" rel="noopener noreferrer">
          <EnvelopeCheckFill/>
          <span>Feel free to contact me!</span>
        </IconContainer>

        <IconContainer as={'a'} href="http://www.jeroentravel.com" target="_blank" rel="noopener noreferrer">
          <MapFill/>
          <span>Personal Travel website</span>
        </IconContainer>
      </InformationContainer>
    </ImageContainer>
  )
}

const TextAlignParagrah = styled.p`
  text-align: justify;
`

function ElevatorPitch() {
  return (
    <>
      <TextAlignParagrah>
        Hi, Welcome to my personal website. My name is Jeroen de Jong, born and raised in the north of The Netherlands. 
        At the end of my bachelors in Geo-informatics, I found a lot of joy in solving geographical problems. The appropriate outlet i found for this was software development.
        I came to thoroughly enjoy working with like minded people on building complex and user friendly applications. 
        Specifically frontend development was something I enjoyed due to the ease of accesibility for the user. 
        I came to love working with <u>TypeScript</u>, <u>React</u>, <u>Vue</u>, <u>Mapbox</u>, and other frontend tools to be able to create even beter user experiences. 

        I have worked as a software developer for almost 5 years now, but I concluded to myself that I was missing the level of theorethical thinking i thought i needed to be even better at my job
        As a result, I decided to pursue a Master degree in Geography at the Radboud University in Nijmegen. 

        Now that I've finished this I am once again looking for a place where I can help build awesome (geographical) software that aim to help people in interesting ways. 
      </TextAlignParagrah>
      <br/>
      <TextAlignParagrah>
        During my BSc I was also able to work alot with geographical databases. As such I have maintained but also structured and integrated databases services with backend services to provide the most optional computational layers. 
      </TextAlignParagrah>
      <br/>
      <TextAlignParagrah>
        From a person point of view, my background lies not only in software development, but also in (geo)politics, culture and conflicts.
        During my masters degree at the Radboud Unversity I have had the oportunity to write various essays, analytical papers and work on projects to research and investiage various political conflicts around the world.
        Most of these papers you can find in my Article section on this web page. 
      </TextAlignParagrah>
    </>
  )
}


export { Personal, ElevatorPitch }