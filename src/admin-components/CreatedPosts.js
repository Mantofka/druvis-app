import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Post from './Post';

const Container = styled.div`
  color: #9abd3a;
  margin: 25px 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

function CreatedPosts() {
const [posts, setPosts] = useState({});

  useEffect(() => {
    getInfo();

  }, []);

  const getInfo = () => {
      axios.get('http://localhost:5000/posts')
      .then(result => setPosts(result))
      .finally(
          console.log(posts)
      )
  }

  return (
    <Container>
      {posts.data ? (
            posts.data.map(post => (
              <Post
                key={post._id}
                post={post}
              />
            ))
            ) : (<h1>Viso</h1>)}
    </Container>
  );
}

export default CreatedPosts;