import React from "react"
import { Layout, SEO } from "../components/common"
import "./404.css" 

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="not-found-container">
      <h1>NOT FOUND</h1>
      <p>OOPS! You just hit a page that doesn&#39;t exist...</p>
    </div>
  </Layout>
)

export default NotFoundPage