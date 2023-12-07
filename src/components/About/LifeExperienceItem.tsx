import styled from "styled-components"

export const ExperienceContainer = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 712px) {
    flex-direction: column;
    gap: 10px;
  }
`

export const ExperienceImage = styled.img`
  max-width: 220px;
  border-radius: 25px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export const ExperienceTitle = styled.h3`
  --gradient-to-color: #FF006E;
  --gradient-from-color: #FB5607;
  --gradient-color-stops: var(--gradient-from-color), var(--gradient-to-color, rgba(251, 86, 7, 0));
  background-image: linear-gradient(to right, var(--gradient-color-stops));
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;

  font-size: 23px;
  margin-bottom: 4px;
  font-weight: bold;
`

export type Props = {
  imageSource: string,
  period: string,
  title: string,
  children: any,
}

export function LifeExperienceItem(props: Props) {
  const {imageSource, children, title} = props

  return (
    <ExperienceContainer>
      <>
        <div>
          <ExperienceImage src={imageSource}/>
        </div>
        <div>
          <ExperienceTitle>{title}</ExperienceTitle>
          <h5>{props.period}</h5>
          {children}
        </div>
      </>
    </ExperienceContainer>
  )
}