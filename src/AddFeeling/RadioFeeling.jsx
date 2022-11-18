import React from 'react';

class RadioFeeling extends React.Component {
  render() {
    const { feeling } = this.props;
    const id = `feeling-${feeling}`;
    return (
      <label htmlFor={id}>
        <input
          type="radio"
          id={id}
          value={feeling}
          name="feeling"
        />
        <img
          className="radio-feeling-image"
          src={`${process.env.PUBLIC_URL}/images/feeling-${feeling}.svg`}
          alt=""
        />
      </label>
    );
  }
}

export default RadioFeeling;
