import React from 'react';
import styled from 'styled-components';
import "./app-header.css"

const HeaderBlock = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`

const AppHeader = ({allPosts, liked}) => {
  return (
    <HeaderBlock>
      <h1>Sergey Krylov</h1>
  <h2>{allPosts} записей, из них понравилось {liked}</h2>
    </HeaderBlock>
  )
}

export default AppHeader