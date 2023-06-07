import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Lod Package Manager",
    url: "https://lodpm.com",
    status: "pre-alpha",
    description: "Modern, lightning-fast, and highly secure package manager as key component of LodOS Group's infrastructure.",
  },
]

const SecondPage = () => (
  <Layout>
    <h3>List of all projects maintained by the LodOS Group</h3>

    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            target="_blank"
            href={`${link.url}`}
          >
            {link.text} ↗
          </a>
          <p style={{ marginTop: 4 }}> <span style={{ background: "#d2e4bd", padding: '3px', color: '#212121' }}>{link.status}</span> </p>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Projects" />

export default SecondPage
