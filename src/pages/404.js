import { darken } from "polished"
import React from "react"
import styled from "styled-components"

import ttacBackground from "$assets/ttac-cover.jpg"
import BackgroundContainer from "$components/BackgroundContainer"

const Background = styled(BackgroundContainer)`
  background-image: url(${ttacBackground});
`

const HomeLink = styled.button`
  background-color: #ff6a00;
  border: none;
  border-radius: 6px;
  box-sizing: border-box;
  color: black;
  flex: 1;
  font-size: 1.4rem;
  margin: 20px;
  max-width: 30%;
  outline: none;
  padding: 12px;
  text-decoration: none;

  :hover {
    background-color: ${darken(0.1, "#ff6a00")};
    cursor: pointer;
  }
`

const P = styled.p`
  font-size: 1.5rem;
`

export default () => (
  <Background>
    <P>You reached the end of these events!</P>
    <HomeLink onClick={() => window.history.back()}>Go Back</HomeLink>
  </Background>
)
