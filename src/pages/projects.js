import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "lpm(lod package manager)",
    url: "https://lpm.lodosgroup.org",
    status: "pre-alpha",
    description: "Modern, lightning-fast, and highly secure package manager.",
  },
  // {
  //   text: "drive-it",
  //   url: "#",
  //   status: "under r&d",
  //   description: "A robust system and service initializer that seamlessly combines lightweight and high-speed performance, while ensuring high compatibility with systemd commands and unit configurations.",
  // },
  // {
  //   text: "lodOS",
  //   url: "#",
  //   status: "upcoming",
  //   description: "A Linux distribution constructed using the software developed by the LodOS Group, offering various spins for both end-users and servers.",
  // },
  // {
  //   text: "layers",
  //   url: "#",
  //   status: "upcoming",
  //   description: "Effortlessly operable, robust software designed for security infrastructure management similar to SELinux and AppArmor.",
  // },
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
