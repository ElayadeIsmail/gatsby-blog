import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"

import Layout from "../components/layout"
import Head from "../components/Head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(post => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${post.node.slug}`}>
                <h2>{post.node.title}</h2>
                <p>{post.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
