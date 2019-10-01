import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display_name: '',
      email: '',
      password: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.update = this.update.bind(this)
  }

  update(field){
    return (e) => this.setState({[field]: e.target.value})
  }

  handleClick(e){
    e.preventDefault();
    this.props.action(this.state)
  }

  render(){

    return <div>
      <h1>{this.props.formType}</h1>
      <form onSubmit={this.handleClick}>
        <label>
          Username: 
          <input type="text" 
          onChange={this.update('display_name')}
          value={this.state.display_name}
          placeholder="username" />
        </label>

        <label>
          Email:
          <input type="text"
            onChange={this.update('email')}
            value={this.state.email}
            placeholder="email" />
        </label>

        <label>
          Password:
          <input type="password"
            onChange={this.update('password')}
            value={this.state.password}
            placeholder="password" />
        </label>

        <input type="submit" value={this.props.formType}/>
      </form>
    </div>
  }
}

export default SessionForm