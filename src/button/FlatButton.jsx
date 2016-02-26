import './button.less';
import React from 'react';
import { noop, getOpacityColor, extendProto } from '../common/util.js';
import { blue500, transparent } from '../common/ColorPalette.js';
import ButtonBase from './_base.js';

class FlatButton extends React.Component {
  constructor() {
    super();
    ButtonBase.constructor.call(this);
  }
  render() {
    let sty = {
      color: this.props.color,
      backgroundColor: this.state.hover ? getOpacityColor(this.props.color, 0.12) : this.props.background
    };
    return this._render(sty, 'md-flat-btn md-wave');
  }
}

FlatButton.defaultProps = {
  color: blue500,
  background: transparent
};

extendProto(FlatButton, ButtonBase);

export default FlatButton;