import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../../component/Layout'
import PostList from '../../component/PostList'


export default () => (
    <StaticQuery
      query={graphql`
        query ReviewQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "review" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  description
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                }
              }
            }
          }
        }
      `}
      render={(data) => (<Layout>  
        <PostList
          markdownNodes={data.allMarkdownRemark.edges.map(
            ({ node }) => node
          )}
        />
      </Layout>)}
    />
  )
