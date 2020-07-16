import React from "react"

import GlobalStyle from "$styled-components/GlobalStyle"

const WrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  )
}

export default WrapRootElement
