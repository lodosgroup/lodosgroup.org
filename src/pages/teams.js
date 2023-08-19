import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const lpmTeams = [
  {
    text: "Core Team",
    url: "#",
    description: "Maintains the essential crates, internals and optimizations of LPM.",
  },
  {
    text: "Library Team",
    url: "#",
    description: "Oversees the development and management of LPM libraries.",
  },
  {
    text: "SDK Team",
    url: "#",
    description: "Manages the SDK layer of LPM.",
  },
  {
    text: "Modules Team",
    url: "#",
    description: "Develops and maintains the official dynamic modules of LPM.",
  },
  {
    text: "Infrastructure Team",
    url: "#",
    description: "Manages infrastructure, including CI, releases, bots, metrics and web APIs.",
  },
  {
    text: "Package Release Team",
    url: "#",
    description: "Handles package releases on the official LPM repositories.",
  },
  {
    text: "UI Team",
    url: "#",
    description: "Maintains various UI projects, including terminal interfaces, desktop applications, and web UI projects.",
  },
  {
    text: "Content Team",
    url: "#",
    description: "Creates and maintains LPM documentation and news content.",
  },
];

const SecondPage = () => (
  <Layout>
    <h2>Teams empowering the LodOS Group</h2>

    <p>
      Welcome to the Teams page of LodOS Group! Here, we provide a transparent overview of our project teams, highlighting the dedicated individuals who bring our projects to life and showcasing their respective areas of responsibility.
    </p>

    <hr />

    <div
      style={{
        background: `#d7ccc8`,
        opacity: `100%`,
        borderRadius: `10px`,
        paddingTop: `50px`,
      }}
    >
      <h3
        style={{
          marginBottom: `-80px`,
          marginTop: `-30px`,
          textAlign: `center`,
          fontStyle: `italic`,
          color: `#f5f5f5`,
          background: `#757575`
        }}
      >
        Lod Package Manager
      </h3>
      <ul
        style={{
          padding: `50px 50px 50px 100px`,
        }}
        className={styles.list}>
        {lpmTeams.map(link => (
          <li key={link.url} className={styles.listItem}>
            {link.text}
            <p className={styles.listItemDescription}>{link.description}</p>
          </li>
        ))}
      </ul>
    </div>

  </Layout>
)

export const Head = () => <Seo title="Teams" />

export default SecondPage
