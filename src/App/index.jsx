import React from 'react'; // 리액트 문법을 쓸 때 React Import
// eslint-disable-next-line import/no-named-as-default
import { BrowserRouter } from 'react-router-dom';
import FeelingList from '../FeelingList';
import CurrentContents from '../CurrentContents';
import './style.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <FeelingList />
          <CurrentContents />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
