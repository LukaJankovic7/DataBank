const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const dataTemplate = path.resolve('./src/templates/dataTemplate.js');
    const response = await graphql(`
        query{
            allContentfulData{
                edges{
                    node{
                        slug
                    }
                }
            }
        }
    `)

    response.data.allContentfulData.edges.forEach((edge) => {   
        createPage({
            component: dataTemplate,
            path: `/account/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}