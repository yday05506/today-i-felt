import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cover from '../Cover';
import AddFeeling from '../AddFeeling';
import './style.css';

class CurrentContents extends React.Component {
  render() {
    return (
      <div className="current-contents">
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/add-feeling" element={<AddFeeling />} />
        </Routes>
      </div>
    );
  }
}

export default CurrentContents;
