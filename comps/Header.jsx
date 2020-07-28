import * as React from "react"
import { logoIcon } from "../assets/icons"

const Header = (_) => (
  <header>
    <div className="bs-header-wrapper">
      <div className="bs-logo-block">
        <div className="bs-logo">{logoIcon()}</div>
        <div className="bs-logo-Name">Fosch</div>
      </div>
      <div className="bs-logo-user-Name">Boopathi</div>
    </div>
  </header>
)

export default Header
