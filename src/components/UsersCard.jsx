import React from 'react';
import { Button, Card , ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UsersCard = ({user}) => {
  return (
    <Card style={{ width: '18rem' , margin:"10px" }}>
    <Card.Header style={{height:"5rem"}}>Name : {user.name + " " + user.username }</Card.Header>
    <ListGroup style={{height:"13rem"}} variant="flush">
      <ListGroup.Item>Email :  {user.email} </ListGroup.Item>
      <ListGroup.Item>City : {user.address.city}</ListGroup.Item>
      <ListGroup.Item>lat : {user.address.geo.lat}</ListGroup.Item>
      <ListGroup.Item>Company Name:  {user.company.name} </ListGroup.Item>
    </ListGroup>
    <Link to={`/user/${user.id}`}><Button variant='secondary' style={{width:"100%"}}>More Details</Button></Link>
  </Card>
  )
}

export default UsersCard