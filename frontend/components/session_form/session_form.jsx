import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    debugger
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
    this.props.action(this.state).then(()=>
    this.setState({
      display_name: '',
      email: '',
      password: ''
    }));
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  render(){
      let {errors} = this.props
    if(errors.length > 0){
      errors = errors.map((error) => {
        return <li key={error}>{error}</li>
      })
    }
    


    return <div className="session-form-div">
      
      <h1>{this.props.formType}</h1>
      {errors}
      <form onSubmit={this.handleClick} className="session-form">
        
          <input type="text" 
          onChange={this.update('display_name')}
          value={this.state.display_name}
          placeholder="username" />
        

        
          <input type="email"
            onChange={this.update('email')}
            value={this.state.email}
            placeholder="email@example.com" />
        
        
          <input type="password"
            onChange={this.update('password')}
            value={this.state.password}
            placeholder="password" />
        

        <input type="submit" value={this.props.formType}/>
      </form>
    </div>
  }
}

export default SessionForm