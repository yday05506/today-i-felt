/* eslint-disable linebreak-style */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddFeeling from '../AddFeeling';
import './style.css';

class FeelingDetail extends React.Component {
  saveName(name) {
    window.localStorage.setItem('owner-name', name);
  }

  renderCover() {
    return (
      <div className="title">
        <h1>
          Today
          <br />
          I
          <br />
          Felt
        </h1>
        <div className="owner-name">
          <strong>Name : </strong>
          <input
            type="text"
            maxLength={5}
            // eslint-disable-next-line max-len
            onBlur={(event) => {
              console.log(event.target.value);
              this.saveName(event.target.value);
            }}
            defaultValue={window.localStorage.getItem('onwer-name')}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="feeling-detail">
        <Routes>
          <Route path="/" element={this.renderCover()} />
          <Route path="/add-feeling" element={<AddFeeling />} />
        </Routes>
      </div>
    );
  }
}

export default FeelingDetail;
