import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"


const SecondPage = () => (
  <Layout>
    <h3>About</h3>

    <p>
      LodOS Group is a non-profit organization that is dedicated to making a positive impact in the world of Linux systems. Our main goal is to create highly efficient, incredibly fast, and extremely secure infrastructure solutions that are tailored for Linux environments. At the core of our vision is the idea of developing a special Linux distribution called LodOS, which is carefully designed around these innovative software infrastructures.
    </p>

    <p>
      We aim to maintain special package repositories that cater to both regular users and servers. For everyday users, these repositories promise cutting-edge software updates, ensuring they stay aligned with the latest technological advancements. Additionally, our repositories for servers are characterized by the utmost stringency in package releases. This approach includes conducting comprehensive security reviews for every package release, contributing to the creation of the most secure server environments possible.
    </p>

    <p>
      Our journey began with a strong desire to improve the experience of using Linux for everyone. We realized that it's important not only to benefit our own distribution but also to contribute to the broader Linux community. That's why we are fully committed to making sure that all the useful tools and solutions we create are compatible and supportive of other Linux distributions. Our mission extends beyond a single operating system to encompass the entire Linux ecosystem.
    </p>
  </Layout>
)

export const Head = () => <Seo title="About" />

export default SecondPage
