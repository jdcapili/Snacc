import React from 'react';


class SessionForm extends React.Component {
  constructor(props){
    super(props);
    // debugger
    
    let email = this.props.history.location.state ? this.props.history.location.state.email : '';
    
    this.state = {
      display_name: '',
      email,
      password: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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

  demoLogin(demoUser){
    return (e) => {
    e.preventDefault();
    this.setState({
      display_name: demoUser.display_name,
      email: demoUser.email,
      password: demoUser.password 
    }, () => this.props.action(this.state))
  }
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
    let demoButton;
    if(this.props.formType === 'Sign In'){
      let demoUser = {
        display_name: 'DemoUser',
        email: 'demo@user.com',
        password: '123456'
      }
      demoButton = <input type="button" onClick={this.demoLogin(demoUser)} value='Demo Mode'/>
    }
    
    debugger

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
        {demoButton}
      </form>
    </div>
  }
}

export default SessionForm