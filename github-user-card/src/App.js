import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import CardContainer from './components/CardContainer'
import Form from './components/Form'
import { AppContainDiv } from './StyledComps'

class App extends Component {
  constructor()
  {
    super()
    this.state = 
    {
      userHandle: "Bastlifa",
      personData: [],
      followerData: [],
      searchText: ""
    }
  }

  getPerson = () =>
  {
    axios.get(`https://api.github.com/users/${this.state.userHandle}`)
    .then (response => 
    {
      this.setState({personData: response.data})
    })
    .catch( error =>
    {
      console.log("Error:", error)
    })
  }

  getFollowers = () =>
  {
    axios.get(`https://api.github.com/users/${this.state.userHandle}`)
    .then (response => {
      this.setState({followerData: []})
      return axios.get(response.data.followers_url)
    })
    .then(response => 
      {
        response.data.forEach(follower =>
          {
            axios.get(follower.url)
            .then(resp =>{
              this.setState({followerData: [...this.state.followerData, resp.data]})
            })
          })
      })
    .catch( error =>
    {
      console.log("Error:", error)
    })
  }

  handleText = (event) => this.setState({searchText: event.target.value})

  handleSubmit = event =>
  {
    event.preventDefault()
    this.setState({userHandle: this.state.searchText || "Bastlifa"})
    this.setState({searchText: ""})
  }

  componentDidMount()
  {
    this.getPerson()
    this.getFollowers()
  }

  componentDidUpdate(prevProps, prevState)
  {
    if(prevState.userHandle !== this.state.userHandle)
    {
      this.getPerson()
      this.getFollowers()
    }
  }

  render() {
    console.log('Don\'t inf loop')
    return (
      <AppContainDiv>
        <Form currentText={this.state.searchText} handleText={this.handleText} handleSubmit={this.handleSubmit} />
        <CardContainer selectedUser={this.state.personData} aFollowers={this.state.followerData} />
      </AppContainDiv>
    );
  }
}

export default App;
