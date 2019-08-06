import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import CardContainer from './components/CardContainer'
import { AppContainDiv } from './StyledComps'

class App extends Component {
  constructor()
  {
    super()
    this.state = 
    {
      personData: [],
      followerData: []
    }
  }

  getPerson = () =>
  {
    axios.get('https://api.github.com/users/Bastlifa')
    .then (response => 
    {
      console.log("me",response)
      this.setState({personData: response.data})
    })
    .catch( error =>
    {
      console.log("Error:", error)
    })
  }

  getFollowers = () =>
  {
    axios.get('https://api.github.com/users/Bastlifa')
    .then (response => axios.get(response.data.followers_url))
    .then(response => 
      {
        response.data.forEach(follower =>
          {
            axios.get(follower.url)
            .then(resp =>{console.log("follower", resp.data); this.setState({followerData: [...this.state.followerData, resp.data]})})
          })
      })
    .catch( error =>
    {
      console.log("Error:", error)
    })
  }

  componentDidMount()
  {
    this.getPerson()
    this.getFollowers()
  }
  render() {
    return (
      <AppContainDiv>
        <CardContainer selectedUser={this.state.personData} aFollowers={this.state.followerData} />
      </AppContainDiv>
    );
  }
}

export default App;
