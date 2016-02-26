import './button.less';
import React from 'react';
import { noop, getOpacityColor, extendProto } from '../common/util.js';
import { blue500, darkWhite } from '../common/ColorPalette.js';
import ButtonBase from './_base.js';

class RaisedButton extends React.Component {
  constructor() {
    super();
    ButtonBase.constructor.call(this);
  }
  render() {
    let clsDepth = this.state.press ? '4' : (this.state.hover ? '3' : '2');
    let sty = {
      color: this.props.color,
      backgroundColor: this.props.background
    };
    return this._render(sty, `md-raised-btn md-shadow-elevation-${clsDepth} md-wave`);
  }
}

extendProto(RaisedButton, ButtonBase);

export default RaisedButton;