import React from 'react';


class SessionForm extends React.Component {
  constructor(props){
    super(props);
    
    
    let email = this.props.history.location.state ? this.props.history.location.state.email : '';
    
    this.state = {
      display_name: '',
      email,
      password: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.loginOrlogout = this.loginOrlogout.bind(this);
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
    this.autocomp = ''
  }

  demoLogin(demoUser){
    return (e) => {
    e.preventDefault();
    this.autocomp = 'typewriter-text'
    this.setState({
      display_name: demoUser.display_name,
      email: demoUser.email,
      password: demoUser.password 
    }, () => setTimeout(() => this.props.action(this.state), 2500))
  }
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  loginOrlogout(formType){
    if(formType === "Sign In"){
      return [<input type="text"
        onChange={this.update('display_name')}
        value={this.state.display_name}
        placeholder="username" className={this.autocomp} 
        key='display_name' />,
        <input type="password"
          onChange={this.update('password')}
          value={this.state.password}
          placeholder="password" className={this.autocomp} 
          key='password' />]
    }else if(formType === 'Sign Up'){
      return [<input type="text"
        onChange={this.update('display_name')}
        value={this.state.display_name}
        placeholder="username" className={this.autocomp} 
        key='display_name' />,



        <input type="email"
          onChange={this.update('email')}
          value={this.state.email}
          placeholder="email@example.com" className={this.autocomp} 
          key='email' />,


        <input type="password"
          onChange={this.update('password')}
          value={this.state.password}
          placeholder="password" className={this.autocomp} 
          key='password' />]
    }
  }

  render(){
    
    let {errors} = this.props;
    let allErrors = [];
    if(errors.length > 0){
      errors = errors.map((error) => {
        return <li key={error}>{error}</li>
      })
      allErrors = <div className='session-errors'>
        <ul>
        {errors}
        </ul>
      </div>
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
    
    let formElements = this.loginOrlogout(this.props.formType)

    

    return <>
    <div className='session-form-parent'>
      
      {allErrors}

      <div className="session-form-div">
        
        <h1>{this.props.formType}</h1>
        <form onSubmit={this.handleClick} className="session-form">
          
          {formElements}
          

          <input type="submit" value={this.props.formType}/>
          {demoButton}
        </form>
      </div>
    </div>
    </>
  }
}

export default SessionForm