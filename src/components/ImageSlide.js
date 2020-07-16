import React, { useState } from "react"
import styled from "styled-components"

import arrowIcon from "$assets/arrow-icon.svg"

const Arrow = styled.img`
  height: 80px;
  visibility: ${props => (props.active ? "visible" : "hidden")};

  :hover {
    cursor: pointer;
  }
`

const ArrowPrevious = styled(Arrow)`
  transform: rotate(90deg);
`

const ArrowNext = styled(Arrow)`
  transform: rotate(-90deg);
`

const Img = styled.img`
  height: 500px;
`

const SlideContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

const ImageSlide = ({ imageURLs }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClickPrevious = () =>
    currentIndex > 0 && setCurrentIndex(currentIndex - 1)

  const handleClickNext = () =>
    currentIndex < imageURLs.length - 1 && setCurrentIndex(currentIndex + 1)

  return (
    <SlideContainer>
      <ArrowPrevious
        active={currentIndex > 0}
        alt=""
        onClick={handleClickPrevious}
        src={arrowIcon}
      />
      <Img alt="" src={imageURLs[currentIndex]} />
      <ArrowNext
        active={currentIndex < imageURLs.length - 1}
        alt=""
        onClick={handleClickNext}
        src={arrowIcon}
      />
    </SlideContainer>
  )
}

export default ImageSlide
