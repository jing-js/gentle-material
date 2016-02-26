import './style/index.less';
import { RaisedButton, FloatingButton, FlatButton } from './button';

exports['default'] = {
  RaisedButton,
  FloatingButton,
  FlatButton
};

if (typeof window !== 'undefined') {
  window.GentleMaterial = exports['default'];
}
module.exports = exports['default'];
