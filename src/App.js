import React from 'react';
import './App.css';
import Card from './Card'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.fetchFollowers()
  }


  fetchFollowers = () => {
    fetch("https://api.github.com/users/nooraldarraji/followers")
      .then(res => {
        return res.json()
      })
      .then(user => this.setState({ users: user }))
      // .then(console.log(this.state.users))
      .catch(error => {
        console.log('err', error)
      })
  }




  render() {
    // this.fetchFollowers()
    return (
      <>
        <h1>Github</h1>
        {this.state.users.forEach(user =>
          <Card props={user.login} />

        )}
        {this.state.users.map(user => {
          return <img width="200" key={user.id} src={user.avatar_url} alt="Github user" />;
        })
        }
      </>
    );
  }
}

export default App;
