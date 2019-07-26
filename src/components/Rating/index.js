import React, { Component } from 'react';
import RatingScreen from './views/RatingScreen';

class Rating extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      rate: 0,
    };
  }

  setRating = rate => this.setState({ rate });

  render() {
    const { rate } = this.state;

    return <RatingScreen rate={rate} setRating={this.setRating} />;
  }
}

export default Rating;
