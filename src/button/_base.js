import { noop, getEventOffsetPosition } from '../common/util.js';
import React from 'react';
import { darkWhite, blue500 } from '../common/ColorPalette.js';
import Icon from '../icon';

export default {
  constructor(isFloating = false) {
    this.state = {
      hover: false,
      focus: false,
      press: false,
      waters: []
    };
    this._handlers = {
      md: this.handleMouseDown.bind(this),
      mu: this.handleMouseUp.bind(this),
      me: this.handleMouseEnter.bind(this),
      ml: this.handleMouseLeave.bind(this)
    };
    this._isFloating = isFloating;
  },
  defaultProps: {
    color: darkWhite,
    background: blue500,
    onMouseDown: noop,
    onMouseUp: noop,
    onMouseEnter: noop,
    onMouseLeave: noop
  },
  propTypes: {
    color: React.PropTypes.string,
    background: React.PropTypes.string,
    onMouseDown: React.PropTypes.func,
    onMouseUp: React.PropTypes.func,
    onMouseEnter: React.PropTypes.func,
    onMouseLeave: React.PropTypes.func
  },
  handleMouseDown(evt) {
    let waters = this.state.waters;
    let pos = getEventOffsetPosition(evt, this.refs.container);
    let w = this.refs.container.offsetWidth;
    let h = this.refs.container.offsetHeight;
    let radius;
    if (this._isFloating) {
      let dx = w / 2 - pos.x;
      let dy = w / 2 - pos.y;
      radius = Math.ceil(w / 2 + Math.sqrt(dx * dx + dy * dy));
    } else {
      let mx = Math.max(pos.x, w - pos.x);
      let my = Math.max(pos.y, h - pos.y);
      radius = Math.ceil(Math.sqrt(mx * mx + my * my));
    }

    let water = {
      key: `${Date.now()}-${Math.round(Math.random() * 10000)}`,
      style: {
        left: pos.x - radius,
        top: pos.y - radius,
        width: radius * 2,
        height: radius * 2
      }
    };
    waters.push(water);
    this.setState({
      press: true,
      waters
    });
    setTimeout(this.handleAnimationEnd.bind(this, water), 400);
  },
  handleAnimationEnd(water) {
    let waters = this.state.waters;
    let idx = waters.indexOf(water);
    waters.splice(idx, 1);
    this.setState({
      waters
    });
  },
  handleMouseUp() {
    this.setState({
      press: false
    });
  },
  handleMouseEnter() {
    this.setState({
      hover: true
    });
  },
  handleMouseLeave() {
    this.setState({
      hover: false
    });
  },
  _render(sty, clsName) {
    clsName = clsName + (this.props.className ? ' ' + this.props.className : '');
    return (
      <span ref="container"
            style={sty}
            className={clsName}>
        <span className="md-btn-back md-wave-back">
          {this.state.waters.map(water => {
            return <span key={water.key}
                         style={water.style}
                         className="md-wave-water"/>
          })}
        </span>
        <span onMouseDown={this._handlers.md} onMouseUp={this._handlers.mu}
              onMouseEnter={this._handlers.me} onMouseLeave={this._handlers.ml}
              className="md-btn-front md-wave-front">
          {this.props.icon ?  <Icon type={this.props.icon}/> : undefined}
          {this._isFloating ? undefined : this.props.children}
        </span>
      </span>
    );
  }
}