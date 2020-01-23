import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import "./app.css"

const App =() => {

  const data = [
    {label: 'Goint to learn REACT',important: false, id: 'wewq'},
    {label: 'That is so good',important: true, id: 'wesadwq'},
    {label: 'I Need a Break',important: true, id: 'wewfgq'},
    120,
    'SF'
  ]

  return (
    <div className="app">

      <AppHeader/>
      <div className="search-panel d-flex">
        <SearchPanel/>
        <PostStatusFilter/>
      </div> 
      <PostList posts={data} />
      <PostAddForm/>

    </div>
  )
}

export default App;
