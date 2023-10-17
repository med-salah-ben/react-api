import React from 'react'
import UsersCard from './UsersCard'

const UsersList = ({users , usersLoad}) => {
  return (
    <div style={{display:'flex' , flexWrap :"wrap" , justifyContent:"space-around"}}>
        {usersLoad ? (<h1>Loading....</h1>) :( users.map((el)=> <UsersCard key={el.id} user={el} /> ))}
    </div>
  )
}

export default UsersList