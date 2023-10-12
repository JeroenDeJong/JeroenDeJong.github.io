import { Chrono } from "react-chrono"
import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel"

const chronoTheme = {
  primary: '#FF006E',
  secondary: 'black',
  textColor: 'green',
  titleColor: 'orange',
  titleColorActive: 'orange',
}

const WorkExperienceItems: TimelineItemModel[] = [
  {
    cardTitle:" Frontend Software Developer at KPV Lab",
    cardSubtitle: "December 2020 untill September 2021",    
  },
  {
    cardTitle:"Software Developer at Living Map",
    cardSubtitle: "February 2017 untill December 2020",    
  }
]

function LivingMap() {
  return (
    <div>
      <p style={{marginBottom: '20px'}}>
        At Living Map, I started out as a GIS developer, but quickly thereafter switched to the front-end team and then got hired as a full-time developer. 
        In the 3 and a half years that I have worked there, we have been busy crafting a WebGL based mapping product with various map data layers and unique smart UX workflows
        to help users make sense and also navigate their indoor geospatial environments.
      </p>
      
      <ul style={{listStyle: 'inside'}}>
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
      </ul>
    </div>
  )
}

function KPVLab() {
  return (
    <div>
      <p style={{marginBottom: '20px'}}>
        Moving to KPV was an important change because I was overdue for a new challenge. KPV Labs certainly provided that by working on a very advanced and technically interesting 3D graphical graphing application with modern development tool chains.
      </p>

      <ul style={{listStyle: 'inside'}}>
        <li>
          Gained experience working in a different company with different approaches
        </li>
        <li>
          Gained more experience working with 3d software, and the associated way through which such problems should be solved 
        </li>
        <li>
          Was able to structure code in a functional way, and to apply the Test Driven Development (TDD) software philosophy
        </li>
      </ul>
    </div>
  )
}

function WorkExperience() {
  return (
    <Chrono flipLayout items={WorkExperienceItems} useReadMore={false} mode="VERTICAL" hideControls={true} theme={chronoTheme} cardHeight={50}>
      <KPVLab/>
      <LivingMap/>
    </Chrono>
  )
}

export { WorkExperience }