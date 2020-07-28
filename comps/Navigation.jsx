import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { homeIcon, leafIcon, eyeIcon, profileIcon } from "../assets/icons"

const Navigator = (_) => {
  const { pathname = "" } = useRouter()

  return (
    <aside>
      <div className="bs-sidebar-wrapper">
        <Link href="/">
          <a>
            <div
              active={pathname === "/" ? "true" : "false"}
              className="bs-icons bs-home-icon"
            >
              {homeIcon()}
            </div>
          </a>
        </Link>
        <Link href="/menu">
          <a>
            <div
              active={pathname === "/menu" ? "true" : "false"}
              className="bs-icons bs-leaf-icon"
            >
              {leafIcon()}
            </div>
          </a>
        </Link>
        <Link href="/dashboard">
          <a>
            <div
              active={pathname === "/dashboard" ? "true" : "false"}
              className="bs-icons bs-eye-icon"
            >
              {eyeIcon()}
            </div>
          </a>
        </Link>
        <Link href="/profile">
          <a>
            <div
              active={pathname === "/profile" ? "true" : "false"}
              className="bs-icons bs-profile-icon"
            >
              {profileIcon()}
            </div>
          </a>
        </Link>
      </div>
    </aside>
  )
}

export default Navigator
export { Navigator }
