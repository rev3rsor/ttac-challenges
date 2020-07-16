import { graphql, Link } from "gatsby"
import { darken } from "polished"
import React from "react"
import styled from "styled-components"
import { useQueryParam, NumberParam } from "use-query-params"

import backgroundGroup from "$assets/background-group.jpg"
import backgroundIndividual from "$assets/background-individual.jpg"
import backgroundParty from "$assets/background-party.jpg"
import BackgroundContainer from "$components/BackgroundContainer"
import ImageSlide from "$components/ImageSlide"

const Background = styled(BackgroundContainer)`
  background-image: url(${props =>
    props.type === "group"
      ? backgroundGroup
      : props.type === "individual"
      ? backgroundIndividual
      : backgroundParty});
`

const HomeLink = styled(Link)`
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

const HomeLinkContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Img = styled.img`
  height: 500px;
`

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Points = styled.p`
  font-size: 3rem;
  text-align: center;
`

const Challenge = ({ data }) => {
  const [groupNum] = useQueryParam("g", NumberParam)
  const [individualNum] = useQueryParam("i", NumberParam)
  const [partyNum] = useQueryParam("p", NumberParam)

  const type = data.googleSheetSheet1Row.type

  return (
    <Background type={type}>
      <h1>{data.googleSheetSheet1Row.name}</h1>
      {data.googleSheetSheet1Row.isMultiImage ? (
        <ImageSlide imageURLs={data.googleSheetSheet1Row.imageUrl.split(" ")} />
      ) : (
        <ImgContainer>
          <Img src={data.googleSheetSheet1Row.imageUrl} />
        </ImgContainer>
      )}

      <Points>Score: {data.googleSheetSheet1Row.points}</Points>
      <HomeLinkContainer>
        <HomeLink
          to={`/?g=${type === "group" ? groupNum + 1 : groupNum}&i=${
            type === "individual" ? individualNum + 1 : individualNum
          }&p=${type === "party" ? partyNum + 1 : partyNum}`}
        >
          Back to main
        </HomeLink>
      </HomeLinkContainer>
    </Background>
  )
}

export default Challenge

export const query = graphql`
  query($id: String) {
    googleSheetSheet1Row(id: { eq: $id }) {
      imageUrl
      isMultiImage
      name
      number
      points
      type
    }
  }
`
