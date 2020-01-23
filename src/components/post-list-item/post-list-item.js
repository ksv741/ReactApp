import React from 'react';

import "./post-list-item.css"

let createTime = new Date();

const PostListItem = () => {
  return(
    <li className="app-list-item d-flex justify-content-between">
      <span className="app-list-item-label">
        Hi there
      </span>
      <span>
        *created {createTime.getFullYear()}.{createTime.getMonth()+1}.{createTime.getDate()} {createTime.getHours()}.{createTime.getMinutes()}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn-star btn-sm">
          <i className="fa fa-star"></i>
        </button>
        <button className="btn-trash btn-sm">
          <i className="fa fa-trash-o"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </li>
  )
}
export default PostListItem