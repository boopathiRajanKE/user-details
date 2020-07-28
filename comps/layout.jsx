import Header from "./Header"
import Navigator from "./Navigation"

const Layout = (props) => (
  <div>
    <div className="bs-main-wrapper">
      <div className="bs-sidebar-wrapper">
        <Navigator />
      </div>
      <div className="bs-content-wrapper">
        <Header />
        {props.children}
      </div>
    </div>
  </div>
)

export default Layout
