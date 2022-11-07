import { Chrono } from "react-chrono"
import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel"


// February 2017 – December 2020
// Living Map, Bath, United Kingdom

// December 2020 – September 2021
// KPV LAB, Edinburgh, United Kingdom

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
        At Living Map, I started out as a GIS intern, but after completion got hired as a full-time developer. 
        In the last few years, we have been busy crafting a WebGL based mapping product with various map data layers, 
        to help customers make sense of their geospatial environments.
      </p>
      
      <ul style={{listStyle: 'inside'}}>
        <li>
          Made use of different APIs and websites to retrieve useable data
        </li>
        <li>
          Gained experience in collaborating with design teams to create rich and complex UX workflows.
        </li>
        <li>Worked on backend services and how to set up a mutually understood and well documented API structure</li>
        <li>Made use of SQL like PostgreSQL and PostGIS and other data management tools to maintain and create data</li>
        <li>Worked with tools such as Mapbox, WebGL, D3 and react to add a richer experience to our product</li>
      </ul>
    </div>
  )
}

function KPVLab() {
  return (
    <div>
      <p style={{marginBottom: '20px'}}>
        Moving to KPV was an important step in search for a new challenge. KPV works on a very advanced 3D graphical graphing application with very modern development tool chains, resulting in challenging problems.
      </p>

      <ul style={{listStyle: 'inside'}}>
        <li>
          Gained experience working in a different company, different culture, and other people
        </li>
        <li>
          Gained experience working with 3d software, and the associated way of solving problems
        </li>
        <li>
          Was able to structure code in a functional way
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