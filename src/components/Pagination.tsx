import styled from "styled-components";


const PageControls = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  background: white;
  /* opacity: 0; */
  transform: translateX(-50%);
  transition: opacity ease-in-out 0.2s;
  box-shadow: 0 30px 40px 0 rgb(16 36 94 / 20%);
  border-radius: 4px;
`
const PageText = styled.span`
  margin: 10px;
`

const PageButton = styled.button`
  width: 44px;
  height: 44px;
  background: white;
  border: 0;
  font: inherit;
  font-size: 0.8em;
  border-radius: 4px;
  cursor: pointer;

  :first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  :last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  :hover {
    background-color: #e6e6e6;
  }

`


export { PageControls, PageButton, PageText }

