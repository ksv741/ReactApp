import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PostListItem from '../post-list-item';

export default class EditWindow extends Component{
  constructor(props){
    super(props)
  }
  state = {
    label: this.props.label
  }
  saveEdit =(event) => {
    this.setState(({label}) =>({
      label: event.target.closest('div').querySelector('input').value
    }));
  }
  render(){
    return(
       <div>
        <input placeholder="asdad"/>
        <button type="submit" onClick={this.saveEdit}>Изменить</button>
      </div>
    )
  }
 
}