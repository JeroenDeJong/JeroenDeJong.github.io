import { Link } from "react-router-dom";
import styled from "styled-components";
import articlesConfig from '../config.json'
import { Section } from "./About";

const Container = styled.main`
  margin-top: 90px;
  margin-bottom: 50px;
`

const ArticleLink = styled(Link)`
  border-bottom: 2px solid #3A86FF;
  background-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  color: rgb(58, 134, 255);
  transition: 0.1s;

  &:hover,
  &:focus {
    color: #FB5607;
    border-color: #FB5607;
  }
`

const ArticleItem = styled.li`
  display: block;
  margin-bottom: 50px;
`

const ArticleDate = styled.div`
  letter-spacing: -0.025em;
  font-size: 1rem;
  font-weight: 700;
  color: #2d3748;
`

const ArticleTeaser = styled.p`
  font-style: italic;
  margin-top: 4px;
`

const ArticleTag = styled.div`
  background-color: #dde3e7;
  width: fit-content;
  padding: 2px 8px;
  border-radius: 20px;
  color: #435362;
`

const ArticleTagContainer = styled.div`
  margin: 10px 0;
  display: flex;
  column-gap: 5px;
`

function Articles() {
  return (
    <Section title="Articles">
      <Container>
        <ul>
          <ArticlesList/>
        </ul>
      </Container>
    </Section>
  )
}

function ArticlesList() {
  // here im using Korean format since they use year month day. And tbh i am too lazy right now to fix this. 
  const formatter = new Intl.DateTimeFormat('ko-KR')

  const list = articlesConfig.articles.map(article => {
    const date = formatter.format(new Date(article.date));

    const tags = article.tags.map(tag => {
      return <ArticleTag>{tag}</ArticleTag>;
    })

    return (
      <ArticleItem key={article.id}>
        <ArticleDate>
          {date}
        </ArticleDate>
        <ArticleLink to={`/articles/${article.id}`}>
          {article.title}
        </ArticleLink>
        <ArticleTagContainer>
          {tags}
        </ArticleTagContainer>
        <ArticleTeaser>
          {article.subtitle}
        </ArticleTeaser>
      </ArticleItem>
    )
  })

  return <>{list}</>
}

// exterior #dde3e7
// int #435362


export { Articles }