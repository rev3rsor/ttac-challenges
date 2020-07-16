import React from "react"

import WrapRootElement from "$helpers/WrapRootElement"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap"
      rel="stylesheet"
    />,
  ])
}

export const wrapRootElement = WrapRootElement
