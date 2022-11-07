import { Chrono } from "react-chrono"

const EducationItems = [
  {
    cardTitle: "MSc Human Geography: Conflicts, Territories and Identities",
    cardSubtitle: "September 2021 - Now @ Radboud University Nijmegen"
  },
  {
    cardTitle: "BSc Geodesy and Geo-informatics (GIS)",
    cardSubtitle: "August 2013 - August 2017 @ Hogeschool Utrecht",
  },
  {
    cardTitle: "Minor Software Development",
    cardSubtitle: "August 2015 - August 2016 @ University of Amsterdam",
  },
]

const theme = {
  primary: '#FF006E',
  secondary: 'black',
  textColor: 'green',
  titleColor: 'orange',
  titleColorActive: 'orange',
}

function Education() {
  return (
    <Chrono items={EducationItems} mode="VERTICAL" hideControls={true} theme={theme} cardHeight={50}>
    </Chrono>
  )
}


export { Education }