import React, {Component} from 'react';

import "./post-add-form.css"

export default class PostAddForm extends Component{
  constructor(props){
    super(props)
  }
  state={
    text: ''
  }
  onValueChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
    if(!this.state.text){
      return({})
    }
    this.props.onAdd(this.state.text);
    this.setState({
      text: ''
    })
  }
  render(){
    return(
      <form 
      onSubmit={this.onSubmit}
      className="bottom-panel d-flex">
        <input
           type="text"
           placeholder="О чем вы думаете сейчас ?"
           className="form-control new-post-label"
           onChange={this.onValueChange}
           value={this.state.text}
        />
        <button
           type="submit"
           className="btn btn-outline-secondary"
        >Добавить</button>
      </form>
   )
  }
 
}