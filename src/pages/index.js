import { Link } from "gatsby"
import { darken } from "polished"
import React, { useState } from "react"
import styled from "styled-components"
import { useQueryParam, NumberParam } from "use-query-params"

import ttacBackground from "$assets/ttac-cover.jpg"
import ttacTitle from "$assets/ttac-title.png"
import BackgroundContainer from "$components/BackgroundContainer"

const Background = styled(BackgroundContainer)`
  background-image: url(${ttacBackground});
`

const ChallengeLink = styled(Link)`
  background-color: ${props => props.color};
  border: none;
  border-radius: 6px;
  box-sizing: border-box;
  color: black;
  flex: 1;
  font-size: 1.4rem;
  margin: 0 20px;
  outline: none;
  padding: 12px;
  text-decoration: none;

  :first-child {
    margin-left: 0;
  }

  :hover {
    background-color: ${props => darken(0.1, props.color)};
    cursor: pointer;
  }

  :last-child {
    margin-right: 0;
  }
`

const ChallengeLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  max-width: 960px;
  overflow: auto;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const H1 = styled.h1`
  margin: 0;
`

const SeatEventButton = styled.button`
  background-color: ${props => (props.active ? "white" : "#a0a0a0")};
  border: 3px solid black;
  border-radius: 50%;
  color: ${props => (props.name === "heart" ? "red" : "black")};
  font-size: 1.5rem;
  height: 50px;
  margin: 0 8px;
  outline: none;
  padding: 8px;
  width: 50px;

  :hover {
    background-color: #808080;
    cursor: pointer;
  }
`

const SeatEventButtonSet = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
  width: 100%;
`

const SeatEventLink = styled(Link)`
  background-color: red;
  border: none;
  border-radius: 6px;
  box-sizing: border-box;
  color: black;
  flex: 1;
  font-size: 1.4rem;
  max-width: 30%;
  outline: none;
  padding: 12px;
  text-decoration: none;

  :hover {
    background-color: ${darken(0.1, "red")};
    cursor: ${props => (props.active ? "pointer" : "not-allowed")};
  }
`

const SeatEventLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`

const TitleImg = styled.img`
  max-width: 100%;
`

const WheelIframe = styled.iframe`
  border: none;
  margin: 20px auto;
`

export default () => {
  const [groupNum = 1] = useQueryParam("g", NumberParam)
  const [individualNum = 1] = useQueryParam("i", NumberParam)
  const [partyNum = 1] = useQueryParam("p", NumberParam)

  const [seatEventNumber, setSeatEventNumber] = useState(0)
  const [seatEventSuit, setSeatEventSuit] = useState("")

  const handleSeatEventClick = evt => {
    if (!seatEventNumber || !seatEventSuit) {
      evt.preventDefault()
      alert("Please select both a number and a suit.")
    }
  }

  return (
    <Background>
      <H1>
        <Link to="/?g=1&i=1&p=1">
          <TitleImg alt="TiC Tock Around the Clock" src={ttacTitle} />
        </Link>
      </H1>
      <Container>
        <WheelIframe
          src="https://wheeldecide.com/e.php?c1=Group+Challenge&c2=Individual+Challenge&c3=Group+Challenge&c4=Individual+Challenge&c5=Group+Challenge&c6=Individual+Challenge&c7=Group+Challenge&c8=Individual+Challenge&cols=84BCF0,F0E984&t=Spin+the+Wheel%21&time=5&width=500"
          width="500"
          height="500"
          scrolling="no"
          frameborder="0"
        />
      </Container>
      <ChallengeLinkContainer>
        <ChallengeLink
          color="#0094ff"
          to={`/group/${groupNum}?g=${groupNum}&i=${individualNum}&p=${partyNum}`}
        >
          Group Challenge
        </ChallengeLink>
        <ChallengeLink
          color="#ffd800"
          to={`/individual/${individualNum}?g=${groupNum}&i=${individualNum}&p=${partyNum}`}
        >
          Individual Challenge
        </ChallengeLink>
        <ChallengeLink
          color="#4cff00"
          to={`/party/${partyNum}?g=${groupNum}&i=${individualNum}&p=${partyNum}`}
        >
          Party Challenge
        </ChallengeLink>
      </ChallengeLinkContainer>
      <h2>Seat Events</h2>
      <SeatEventButtonSet>
        {new Array(9).fill(0).map((elm, idx) => {
          idx++
          return (
            <SeatEventButton
              active={seatEventNumber === idx}
              key={idx}
              onClick={() => setSeatEventNumber(idx)}
            >
              {idx}
            </SeatEventButton>
          )
        })}
      </SeatEventButtonSet>
      <SeatEventButtonSet>
        {["spade", "heart", "club"].map(elm => {
          const symbolChooser = {
            spade: "♠",
            heart: "♥",
            club: "♣",
          }
          return (
            <SeatEventButton
              active={seatEventSuit === elm}
              key={elm}
              name={elm}
              onClick={() => setSeatEventSuit(elm)}
            >
              {symbolChooser[elm]}
            </SeatEventButton>
          )
        })}
      </SeatEventButtonSet>
      <SeatEventLinkContainer>
        <SeatEventLink
          active={seatEventNumber && seatEventSuit}
          onClick={handleSeatEventClick}
          to={`${seatEventSuit}/${seatEventNumber}`}
        >
          Go to Seat Event
        </SeatEventLink>
      </SeatEventLinkContainer>
    </Background>
  )
}
