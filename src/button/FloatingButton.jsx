import './button.less';
import React from 'react';
import { noop, getOpacityColor, extendProto } from '../common/util.js';
import { pinkA200, darkWhite } from '../common/ColorPalette.js';
import ButtonBase from './_base.js';

class FloatingButton extends React.Component {
  constructor() {
    super();
    ButtonBase.constructor.call(this, true);
  }
  render() {
    let clsDepth = this.state.press ? '12' : (this.state.hover ? '8' : '6');
    let sty = {
      color: this.props.color,
      backgroundColor: this.props.background
    };
    return this._render(sty, `md-floating-btn md-shadow-elevation-${clsDepth} md-wave`);
  }
}

FloatingButton.propTypes = {
  icon: React.PropTypes.string.isRequired
};

FloatingButton.defaultProps = {
  color: darkWhite,
  background: pinkA200
};

extendProto(FloatingButton, ButtonBase);

export default FloatingButton;