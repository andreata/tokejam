module.exports = function (api) {
    
    api.createPages(async ({ graphql, createPage }) =>{
        // Use the Pages API here: https://gridsome.org/docs/pages-api
        const { data } = await graphql(`
        query  {
            posts(first: 200){
                nodes{
                    title
                    postId
                    slug
                    id
                }
            }
        }
        `)  
        
      

        data.posts.nodes.forEach(function(node, index){
            createPage({
                path: `/${node.slug}`,
                component: './src/templates/WordPressPost.vue',
                context: {
                    id: node.id,
                    postId: node.postId,
                    slug: node.slug,
                    title: node.title,
                }
            })
        })

    })

    api.createPages(async ({ graphql, createPage }) =>{
        
        const { data } = await graphql(`
            query {
                categories(first: 200) {
                    edges {
                        node {
                            name
                            slug
                            id
                            uri
                        }
                    }
                }       
            }
        `)    

        data.categories.edges.forEach(({ node }) => {
            /* 
            if ('null' != node.children.edges) {
                createPage({
                    path: `${node.uri}/${node.slug}`,
                    component: './src/templates/WordPressCategory.vue',
                    context: {
                        id: node.id,
                        slug: node.slug,
                        title: node.name
                    }
                })
            } else { 
                createPage({
                    path: `/category/${node.slug}`,
                    component: './src/templates/WordPressCategory.vue',
                    context: {
                        id: node.id,
                        slug: node.slug,
                        title: node.name
                    }
                })
            }  */

            createPage({
                    path: `/${node.uri}`,
                    component: './src/templates/WordPressCategory.vue',
                    context: {
                        id: node.id,
                        slug: node.slug,
                        title: node.name
                    }
                })
        })

    })

    api.createPages(async ({ graphql, createPage }) =>{
        
        const { data } = await graphql(`
            query {
                tags(first: 200) {
                    edges {
                        node {
                            name
                            slug
                            id
                            uri
                        }
                    }
                }       
            }
        `)    

        data.tags.edges.forEach(({ node }) => {
            createPage({
                path: `/${node.uri}`,
                component: './src/templates/WordPressPostTag.vue',
                context: {
                    id: node.id,
                    slug: node.slug,
                    title: node.name
                }
            })
        })

    })

    
    api.createPages(async ({ graphql, createPage }) =>{
        
        const { data } = await graphql(`
            query {
                pages(first: 200) {
                    edges {
                        node {
                            title
                            slug
                            id
                        }
                    }
                }       
            }
        `)    

        data.pages.edges.forEach(({ node }) => {
            createPage({
                path: `/${node.slug}`,
                component: './src/templates/WordPressPage.vue',
                context: {
                    id: node.id,
                    slug: node.slug,
                    title: node.title
                }
            })
        })

    })
}


