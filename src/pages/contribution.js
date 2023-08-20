import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"


const SecondPage = () => (
  <Layout>

    <h2>Code Contributions</h2>

    <p>We welcome and encourage code contributions from developers of all skill levels. Whether you're a seasoned programmer or just getting started, you are always welcomed to contribute projects under our <a target="_blank" href="https://github.com/lodosgroup">LodOS Group</a> Every repository contains contribution guidelines designed to assist you in getting started.</p>

    <p>Pull requests will typically undergo review within approximately 7 days, taking into account the ongoing tasks of the team responsible for the area you're contributing to. The timing may vary based on their current workload and commitments.</p>


    <h2>Becoming a Sponsor</h2>

    <p>To explore sponsorship options or to inquire further about becoming a sponsor, kindly reach out to us <a href="mailto:work@onurozkan.dev">by sending an email</a>. We'd be delighted to provide you with more information and discuss how you can get involved.</p>

    <h2>Donations</h2>
    <p>Monetary contributions in the form of donations are highly appreciated and contribute directly to the advancement of our projects. Your generous donations enable us to allocate resources where they are needed most, ensuring the sustainability and growth of the LodOS Group.Every donation, no matter the size, makes a motivational impact and is deeply valued.</p>

    <h4> Bitcoin </h4>
    <span>
      Address: bc1q4n48w7rdwvs4cqwe2m7d2t8lkdme6l3pyyqdt3
    </span>
    <br />

    QR code:
    <StaticImage
      src="../images/btc.jpg"
      loading="eager"
      width={250}
      quality={100}
      formats={["auto", "webp", "avif"]}
      alt="BTC address QRCode"
      style={{ marginLeft: `var(--space-3)` }}
      imgStyle={{ transition: 'none' }}
      placeholder='none'
    />


    <br />
    <br />
    <hr />

    <h4> ERC20(ETH and all tokens) </h4>

    <span>
      Address: 0x6bdbc221Dcbbed22fec09FBEA08aBC26908B3C53
    </span>
    <br />

    QR code:
    <StaticImage
      src="../images/erc20.jpg"
      loading="eager"
      width={250}
      quality={100}
      formats={["auto", "webp", "avif"]}
      alt="BTC address QRCode"
      style={{ marginLeft: `var(--space-3)` }}
      imgStyle={{ transition: 'none' }}
      placeholder='none'
    />
  </Layout>
)

export const Head = () => <Seo title="Contribution" />

export default SecondPage
