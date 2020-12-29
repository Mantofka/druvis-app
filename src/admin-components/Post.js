import React, { useEffect } from 'react';
import styled from 'styled-components';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

const Container = styled.div`
  position: relative;
  border: 1px solid #ffe066;
  background-color: #406865;
  border-radius: 5px;
  margin: 30px 20px;
  box-sizing: border-box;
  color: rgb(230, 230, 230);
  width: 200px;
  height: 300px;
`;

const Content = styled.div`
  margin: 10px;
  box-sizing: border-box;
`;

const PrimaryText = styled.h1`
  font-size: 24px;
  margin-bottom: 15px;
`;

const DescText = styled.p`
  font-size: 14px;
  color: rgb(180, 180, 180);
  margin-bottom: 15px;
`;

const Buttons = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  display: flex;
`;

const ButtonDelete = styled.div`
  color: #e3525c;
`;

const ButtonEdit = styled.div`
  color: #C1C2E9;
`;

function Post({ post }) {
  return (
    <Container>
      <Content>
        <PrimaryText>{post.title}</PrimaryText>
        <DescText>{post.description}</DescText>
        <div>Skiltis: {post.section}</div>
        <Buttons>
          <ButtonDelete><DeleteForeverIcon /></ButtonDelete>
          <ButtonEdit><EditIcon /></ButtonEdit>
        </Buttons>
      </Content>
    </Container>
  );
}

export default Post;
