const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const Challenge = path.resolve("./src/templates/Challenge.js")
  const Seat = path.resolve("./src/templates/Seat.js")

  const result = await graphql(`
    {
      allGoogleSheetSheet1Row {
        nodes {
          id
          number
          type
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const Challenges = result.data.allGoogleSheetSheet1Row.nodes

  Challenges.forEach(node => {
    const componentChooser = {
      group: Challenge,
      individual: Challenge,
      party: Challenge,
      spade: Seat,
      heart: Seat,
      club: Seat,
    }
    const component = componentChooser[node.type]
    createPage({
      path: `/${node.type}/${node.number}/`,
      component: component,
      context: {
        id: node.id.toString(),
      },
    })
  })
}
