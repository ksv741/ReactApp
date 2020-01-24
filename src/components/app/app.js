import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import "./app.css"
import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px
`

export default class App extends Component {
  constructor(props){
    super(props);
    this.maxId = 4;
  }
  state = {
    data: [
      {label: 'Goint to learn REACT',important: false, like: false, id: 1},
      {label: 'That is so good',important: true, like: false, id: 2},
      {label: 'I Need a Break',important: true, like: false, id: 3},
      120,
      'SF'
    ],
    term: '',
    filter: 'all'
  }
  deleteItem = (id) => {
    this.setState(({data})=>{
      const index = data.findIndex(elem => elem.id  === id)
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      return({
        data: newArr
      })
    })
  }
  addItem = (body) => {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return({
        data: newArr
      })
    })
    
  }
  onToggleImportant = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];
      const newItem = {...old, important: !old.important};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)]
      return{
        data: newArr
      }
    })
  }
  onToggleLiked = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];
      const newItem = {...old, like: !old.like};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)]
      return{
        data: newArr
      }
    })
  }
  searchPosts = (items, term) => {
    if(term.length === 0 ){
      return(items)
    }
    return items.filter((item) => {
      if(typeof(item) === 'object'){
        return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
      }
      
    });
  }
  onUpdateSearch = (term) => {
    this.setState({term})
  }
  onFilterSelect = (filter) =>{
    this.setState({filter})
  }
  filterPost = (items, filter) => {
    if(filter === 'like'){
      return items.filter((item) => item.like)
    }else{
      return items
    }
  }
  render(){
    const {data, term, filter} = this.state;
    const liked = data.filter((item) => item.like).length;
    const allPosts = data.filter((item) => typeof(item) === 'object').length;
    const visiblePosts = this.filterPost(this.searchPosts(data, term), filter);
    return(
      <AppBlock>

      <AppHeader
      liked={liked}
      allPosts={allPosts }/>
      <div className="search-panel d-flex">
        <SearchPanel
        onUpdateSearch={this.onUpdateSearch}
        />
        <PostStatusFilter
        onFilterSelect={this.onFilterSelect}
        filter={filter}/>
      </div> 
      <PostList 
      posts={visiblePosts} 
      onDelete = {this.deleteItem}
      onToggleImportant={this.onToggleImportant}
      onToggleLiked={this.onToggleLiked}/>
      <PostAddForm
        onAdd={this.addItem}
      />

      </AppBlock>
    )
  }
}
