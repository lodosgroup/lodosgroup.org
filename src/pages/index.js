import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Projects",
    url: "/projects",
    description: "Explore the projects maintained by the LodOS Group.",
  },
  {
    text: "Teams",
    url: "/teams",
    description: "Discover the dedicated teams powering LodOS Group's mission.",
  },
  {
    text: "About",
    url: "/about",
    description: "Learn who we are, our mission, and vision.",
  },
  {
    text: "Contribution",
    url: "/contribution",
    description: "Find out how you can actively participate and contribute to the growth and development in projects of LodOS Group.",
  },
]

const moreLinks = [
  {
    text: "Github",
    url: "https://github.com/lodosgroup",
  },
]

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/lod.png"
        loading="eager"
        width={250}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt="LodOS Group Logo"
        style={{ marginBottom: `var(--space-3)` }}
        imgStyle={{ transition: 'none' }}
        placeholder='none'
      />
      <h3
        style={{
          fontStyle: `italic`,
          fontWeight: `lighter`,
        }}
      >
        Boosting Linux systems with secure and efficient infrastructure
      </h3>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
