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
  font-size: 4rem;
  padding-bottom: 12px;
`

const TextHalo = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  margin: 0 auto;
  max-width: 80%;
`

const Seat = ({ data }) => {
  const type = data.googleSheetSheet1Row.type

  return (
    <>
      <Background type={type}>
        <TextHalo>
          <h1>{data.googleSheetSheet1Row.name}</h1>
          <P>{data.googleSheetSheet1Row.instructions}</P>
        </TextHalo>
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
