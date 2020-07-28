import Link from "next/link"
import Layout from "../comps/layout"
import UserList from "../comps/UserList"
import UserProfile from "../comps/UserProfile"
import fetch from "isomorphic-unfetch"

const Index = (props) => {
  const { dataResponse = [] } = props

  const [isUserList, setIsUserList] = React.useState(true)
  const [indexValue, setIndex] = React.useState("")

  const onTabClick = React.useCallback((event) => {
    const item = event.target.getAttribute("item")
    if (item === "list") {
      setIsUserList(true)
    } else {
      setIsUserList(false)
      setIndex("")
    }
  }, [])

  const onRowClick = (event) => {
    const item = event.currentTarget.getAttribute("index")
    setIndex(+item)
  }
  React.useEffect(() => {
    if (indexValue !== "") {
      setIsUserList(false)
    }
  }, [indexValue])

  return (
    <Layout>
      <div className="bs-home-wrapper">
        <h1 className="bs-home-title">User Details</h1>
        <div className="bs-tab-panel">
          <div onClick={onTabClick} className="bs-tab-head-block">
            <div
              className={`bs-tab-head-item ${isUserList ? "active" : ""}`}
              item="list"
            >
              User List
            </div>
            <div
              className={`bs-tab-head-item ${!isUserList ? "active" : ""}`}
              item="profile"
            >
              User Profile
            </div>
          </div>
          <div className="bs-tab-content-block">
            {isUserList ? (
              <UserList onRowClick={onRowClick} dataResponse={dataResponse} />
            ) : (
              <UserProfile
                data={indexValue !== "" ? dataResponse[indexValue] : {}}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

Index.getInitialProps = async function (ctx) {
  const res = await fetch("https://reqres.in/api/users?page=1")
  const { data = [] } = await res.json()

  return {
    dataResponse: data,
  }
}

export default Index
