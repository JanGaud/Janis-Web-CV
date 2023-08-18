import React, { Component } from "react";

class TxtType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loopNum: 0,
      txt: "",
      isDeleting: false,
    };
    this.tick = this.tick.bind(this);
    this.toRotate = JSON.parse(props.toRotate);
    this.period = parseInt(props.period, 10) || 2000;
    this.el = React.createRef();
  }

  componentDidMount() {
    this.tick();
  }

  tick() {
    const { loopNum, txt, isDeleting } = this.state;
    const i = loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    let newTxt;
    if (isDeleting) {
      newTxt = fullTxt.substring(0, txt.length - 1);
    } else {
      newTxt = fullTxt.substring(0, txt.length + 1);
    }

    this.setState({ txt: newTxt });

    let delta = 200 - Math.random() * 100;

    if (isDeleting) {
      delta /= 2;
    }

    if (!isDeleting && txt === fullTxt) {
      delta = this.period;
      this.setState({ isDeleting: true });
    } else if (isDeleting && txt === "") {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1,
      });
      delta = 500;
    }

    setTimeout(this.tick, delta);
  }

  render() {
    return (
      <small className="typewrite text-[15px]">
        <span className="wrap">{this.state.txt}</span>
      </small>
    );
  }
}

class TypingAnimation extends Component {
  render() {
    const elements = this.props.elements || [];

    return (
      <div>
        {elements.map((elem, index) => (
          <TxtType key={index} toRotate={elem.toRotate} period={elem.period} />
        ))}
        <style>{`.typewrite > .wrap { border-right: 0.08em solid #fff}`}</style>
      </div>
    );
  }
}

export default TypingAnimation;
