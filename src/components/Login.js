import React, { Component } from 'react';
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import { timer } from '../store';

@observer
class Login extends Component {
  @observable email = ''
  @observable passwords = ''

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  render() {
    const { email, password } = this
    console.log(this.email);
    console.log(this);
    return (
      <div className="App">
        <header>Login</header>
          <input name="email" placeholder="Email" onChange={this.onChange} />
          <input
            name="password"
            // type="password"
            placeholder="Password"
            onChange={this.onChange}
            // value={password}
            // fluid="true"
          />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }

  @action.bound
  onChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    this[name] = value;
  }

  onSubmit() {
    const { email, password } = this
    console.log('결과확인 : ', email, password);
    fetch(`http://localhost:3003/users?id=${email}&password=${password}`)
    .then((res) => (res.json()))
    .then((data) => {
      if(data[0]) {
        alert('로그인 성공');
      }
    });
  }
}

export default Login;