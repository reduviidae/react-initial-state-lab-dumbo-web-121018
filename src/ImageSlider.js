import React, { Component } from 'react';

export default class ImageSlider extends Component {
  state ={
    currentSlideIndex: 0
  }

  render() {
    return(
      `I am on slide ${this.state.currentSlideIndex}`
    )
  }
}
