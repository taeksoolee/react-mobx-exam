import { useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import { counter, timer } from './store';
import { Button, Login } from './components';
import { observer } from 'mobx-react';
import AnimalList from './components/AnimalList';

setInterval(() => {
  timer.increase();
}, 1000);

function App() {
  useEffect(() => {
    // fetch('http://localhost:3003/animals', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: JSON.stringify({id: 5, name: 'rabbit'})
    // })
    // .then((res) => (res.json()))
    // .then((data) => {console.log(data)});
  }, []);

  return (
    <div className="App">
      <Login />
      <hr />
      <div>{timer.secondPassed}</div>
      <hr />
      <div>{counter.num}</div>
      <Button />
      <hr />
      <AnimalList />
    </div>
  );
}

export default observer(App);
