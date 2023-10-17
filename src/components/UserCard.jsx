import React, { useEffect, useState } from 'react';
import { Card , ListGroup } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserCard = ({userDetails}) => {
    const [userPosts , setUserPosts] = useState([]);
    const [loadpost , setLaodPost] = useState(true);
    const {id} = useParams()
    const getPosts = async()=>{
        try {
            const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            console.log(result.data)
            setUserPosts(result.data)
            setLaodPost(false)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getPosts()
    },[])
  return (
    <>
    <Card style={{ width: '18rem' }}>
    {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
    <Card.Body>
      <Card.Title>User Detail</Card.Title>
      <Card.Text>
        {userDetails.name + " " + userDetails.username}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item> {userDetails.email} </ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
  </Card>
    {loadpost? <h1>load....</h1>  : userPosts.map((el)=>(
        <div>
            <h3>{el.title}</h3>;
            <p>{el.body}</p>
        </div>)
    )}
  </>
  )
}

export default UserCard