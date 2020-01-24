import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PostListItem from '../post-list-item';

import "./post-list.css"

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) =>{

  const elements = posts.map((item)=>{
    if(typeof(item) == 'object'){
      return (
        <li key={item.id} className='list-group-item'>
          
          <PostListItem {...item} 
          onDelete = {() => {onDelete(item.id)}}
          onToggleImportant = {() => onToggleImportant(item.id)}
          onToggleLiked = {() => onToggleLiked(item.id)}
          />
        </li>
      )
    }
    
  })

  return(
    <ListGroup 
    className="app-list">
      {elements}
    </ListGroup>
  )
}
export default PostList