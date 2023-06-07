import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontWeight: `bold`,
        fontSize: `var(--font-md)`,
        textDecoration: `underline`,
      }}
    >
      {siteTitle}
    </Link>
  </header>
)

export default Header
