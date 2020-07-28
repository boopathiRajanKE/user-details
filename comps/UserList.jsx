import * as React from "react"

function UserList(props) {
  const { dataResponse = [], onRowClick = () => {} } = props

  const renderTableContents = (item, index) => {
    const {
      avatar = "",
      email = "",
      first_name = "",
      last_name = "",
      id = "",
    } = item

    return (
      <tr
        onClick={onRowClick}
        key={`content-table-item-${index}`}
        className="table-row"
        index={index}
      >
        <td>{id}</td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>{email}</td>
        <td>
          <img className="bs-pic" src={avatar} alt={first_name} />
        </td>
      </tr>
    )
  }

  return (
    <table id="bs-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Full Name</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Profile Image</th>
        </tr>
      </thead>
      <tbody>
        {dataResponse.length > 0 && dataResponse.map(renderTableContents)}
      </tbody>
    </table>
  )
}

export default UserList
export { UserList }
