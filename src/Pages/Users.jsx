import React from 'react'
import UsersList from '../components/UsersList'

const Users = ({users}) => {
  return (
    <div>
        <UsersList users={users} />
    </div>
  )
}

export default Users