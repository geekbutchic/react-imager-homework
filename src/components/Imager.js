import React, { Component } from "react";
import Display from "./Display";
import Thumbnails from "./Thumbnails";
export class Imager extends Component {
  state = {
    images: [
      "images/1.jpg",
      "images/2.jpg",
      "images/3.jpg",
      "images/4.jpg",
      "images/5.jpg",
      "images/6.jpg",
      "images/7.jpg",
      "images/8.jpg",
      "images/9.jpg",
      "images/10.jpg",
      "images/11.jpg",
      "images/12.jpg",
    ],
    bigImage: "",
    indexImage: "",
  };
  componentDidMount() {
    let randomNum = Math.floor(Math.random() * this.state.images.length);
    this.setState({
      bigImage: this.state.images[randomNum],
      indexImage: randomNum,
    });
  }
  randomImageGenerator = () => {
    let randomNum = Math.floor(Math.random() * this.state.images.length);
    this.setState({
      bigImage: this.state.images[randomNum],
    });
  };
  backButton = () => {
    if (this.state.indexImage === 0) {
      this.setState({
        bigImage: this.state.images[this.state.images.length - 1],
        indexImage: this.state.images.length - 1,
      });
    } else {
      this.setState({
        bigImage: this.state.images[this.state.indexImage - 1],
        indexImage: this.state.indexImage - 1,
      });
    }
  };
  forwardButton = () => {
    console.log(this.state.indexImage);
    if (this.state.indexImage === 11) {
      this.setState({
        bigImage: this.state.images[0],
        indexImage: 0,
      });
    } else {
      this.setState({
        bigImage: this.state.images[this.state.indexImage + 1],
        indexImage: this.state.indexImage + 1,
      });
    }
  };
  render() {
    return (
      <div>
        <Display
          bigImage={this.state.bigImage}
          randomImageGenerator={this.randomImageGenerator}
        />
        <button onClick={this.backButton}> {"<"} </button>
        <button onClick={this.forwardButton}> {">"} </button>
        <Thumbnails images={this.state.images} backButton={this.backButton} />
      </div>
    );
  }
}
export default Imager;
