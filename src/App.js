import React, { Component } from 'react'
import CardList from './components/card-list/card-list.component';
import Search from './components/search/search.component';

import './App.css';
export default class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchQuery: ''
    };
  }

  handleOnChange = (e) => {
    this.setState({searchQuery: e.target.value})
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}) );
  }

  render() {
    let filteredMonsters = this.state.monsters.filter(monster =>monster['name'].toLowerCase().includes(this.state.searchQuery.toLowerCase()))
    return (
      <div className='app'>
        <h1>Welcome to Monster Rolodex</h1>
        <h4>Built using simple React Application</h4>
        <Search 
        placeholder = "Type robo name"
        handleOnChange={this.handleOnChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}
