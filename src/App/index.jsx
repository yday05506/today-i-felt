import React from 'react'; // 리액트 문법을 쓸 때 React Import
import FeelingList from '../FeelingList';
import FeelingDetail from '../FeelingDetail';
import './style.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FeelingList />
        <FeelingDetail />
      </div>
    );
  }
}

export default App;
