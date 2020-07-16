import { graphql } from "gatsby"
import { darken } from "polished"
import React from "react"
import styled from "styled-components"

import backgroundSeatBlueShell from "$assets/background-seat-blue-shell.jpg"
import backgroundSeatChallenge from "$assets/background-seat-challenge.jpg"
import backgroundSeatWild from "$assets/background-seat-wild.jpg"
import BackgroundContainer from "$components/BackgroundContainer"

const Background = styled(BackgroundContainer)`
  background-image: url(${props =>
    props.type === "spade"
      ? backgroundSeatWild
      : props.type === "heart"
      ? backgroundSeatChallenge
      : backgroundSeatBlueShell});
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
  font-size: 2.5rem;
`

const Seat = ({ data }) => {
  const type = data.googleSheetSheet1Row.type

  return (
    <>
      <Background type={type}>
        <h1>{data.googleSheetSheet1Row.name}</h1>
        <P>{data.googleSheetSheet1Row.instructions}</P>
        <HomeLink onClick={() => window.history.back()}>Back to main</HomeLink>
      </Background>
    </>
  )
}

export default Seat

export const query = graphql`
  query($id: String) {
    googleSheetSheet1Row(id: { eq: $id }) {
      instructions
      name
      number
      type
    }
  }
`
