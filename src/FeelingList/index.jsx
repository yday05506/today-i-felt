import React from 'react';
import './style.css';
// eslint-disable-next-line no-unused-vars
import BtnMonth from '../components/BtnMonth';

class FeelingList extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedMonth: 1,
    };

    this.onClickBtnMonth = this.onClickBtnMonth.bind(this);
  }

  onClickBtnMonth(month) {
    this.setState({ selectedMonth: month });
  }

  renderBtnMonthList() {
    const btnList = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < 12 + 1; i += 1) {
      // eslint-disable-next-line react/destructuring-assignment, max-len
      const btn = (
        <BtnMonth
          month={i}
          // eslint-disable-next-line react/destructuring-assignment
          active={this.state.selectedMonth === i}
          onClick={this.onClickBtnMonth}
        />
      );
      btnList.push(btn);
    }

    return btnList;
  }

  render() {
    return (
      <div className="feeling-list">
        <div className="header">
          {this.renderBtnMonthList()}
        </div>
      </div>
    );
  }
}

export default FeelingList;
