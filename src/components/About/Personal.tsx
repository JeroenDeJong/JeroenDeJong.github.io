import styled from "styled-components"
import {Geo, Linkedin, Twitter, EnvelopeCheckFill, MapFill, Translate, HospitalFill, FlagFill} from 'react-bootstrap-icons'

const RoundedImage = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  box-shadow: 0 30px 40px 0 rgb(16 36 94 / 30%);
  border: 3px solid #FB5607;
  float: left;
  shape-outside: circle(50%);
`

const ImageContainer = styled.div`
  height: calc(300px + 6px);
  margin-top: 40px;
  margin-bottom: 40px;

  position: relative;
  left: calc(50% - 150px);
`

const IconContainer = styled.div`
  display: block;
  color: black;
  margin: 5px 0;
  left: 15px;
  position: relative;

  span {
    margin-left: 5px;
  }

  svg {
    vertical-align: middle;
  }

`

function Personal() {
  return (
 <ImageContainer>
      <RoundedImage src="assets/IMG_5551.jpeg"/>

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
          <span>Limited German Proficianty</span>
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
    </ImageContainer>
  )
}

function ElevatorPitch() {

  return (
    <div>
      <p>
      Hi, Welcome to my personal website. My name is Jeroen de Jong, born in the north of The Netherlands. 
      I am pursuing a career as a student of violent conflicts, with a specific interest in Eastern Europe, Caucasus and Central Asia.
      My aim is to highlight many of the under- or un- told stories from this region. 
      Me, and many other scholars agree how this region is systematically under researched (The the civil war in Tajikistan is an example hereof). 
      Specific research focus right now are very broad, but key topics that so far spark my interest are: legitimacy, de-facto states, non state actors
      </p>
      <br/>
      <p>
      Currently, I am studying at the Radboud University in Nijmegen doing my masters degree in Human Geography: Conflicts, Territories and Identities. 
      In this study I am learning alot more about conflicts, both philosphically and theorethically. 
      I have found that the study of violence interest me tremendously. The puzzeling element of violence and the high stakes thereof is very intriguing. 
      Therefore I believe that bringing nuance and understanding of violent conflicts to the wider public an apt goal for me to chased after. 
      </p>
      <br/>
      <p>
      My background, and hence this website, lies not only in politics and geography but also in software development. 
  I have worked in The Netherlands, England and Scotland as a software developer, developing data visualisation applications on the web. 
      </p>
    </div>
  )

}


export { Personal, ElevatorPitch }