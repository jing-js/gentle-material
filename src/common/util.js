function str2rgba(clr_str) {
  clr_str = clr_str.toLowerCase();
  var r = 0, g = 0, b = 0, a = 1.0, m;
  if (/^#[0-9a-f]{3}$/i.test(clr_str)) {
    r = parseInt(clr_str.substr(1, 1) + clr_str.substr(1, 1), 16);
    g = parseInt(clr_str.substr(2, 1) + clr_str.substr(2, 1), 16);
    b = parseInt(clr_str.substr(3, 1) + clr_str.substr(3, 1), 16);
    a = 1.0;
  } else if (/^#[0-9a-f]{6}$/i.test(clr_str)) {
    r = parseInt(clr_str.substr(1, 2), 16);
    g = parseInt(clr_str.substr(3, 2), 16);
    b = parseInt(clr_str.substr(5, 2), 16);
    a = 1.0;
  } else if ((m = clr_str.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i)) != null) {
    r = parseInt(m[1]);
    g = parseInt(m[2]);
    b = parseInt(m[3]);
    a = 1.0;
  } else if ((m = clr_str.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d(\.\d+)?)\s*\)$/i)) != null) {
    r = parseInt(m[1]);
    g = parseInt(m[2]);
    b = parseInt(m[3]);
    a = parseFloat(m[4]);
  } else {
    throw new Error('bad color format');
  }
  return {
    r: r,
    g: g,
    b: b,
    a: a
  };
}
function rgba2str(rgba) {
  return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a.toFixed(2)})`;
}
function extendNoOverride(target, src, exclude = []) {
  for(let n in src) {
    if (exclude.indexOf(n) < 0 && !target.hasOwnProperty(n)) {
      target[n] = src[n];
    }
  }
  return target;
}

export function noop() {}

export function getOpacityColor(color, opacity) {
  let rgba = str2rgba(color);
  rgba.a = opacity;
  return rgba2str(rgba);
}

export function extendProto(Clazz, Proto) {
  let tp = Clazz.prototype;
  extendNoOverride(tp, Proto, ['constructor', 'defaultProps', 'propTypes']);
  if (Proto.defaultProps) {
    Clazz.defaultProps = extendNoOverride(Clazz.defaultProps || {}, Proto.defaultProps);
  }
  if (Proto.propTypes) {
    Clazz.propTypes = extendNoOverride(Clazz.propTypes || {}, Proto.propTypes);
  }
}

function _isType(type, obj) {
  return typeof obj === type;
}

export let isFunction = _isType.bind(null, 'function'),
  isObject = _isType.bind(null, 'object'),
  isNumber = _isType.bind(null, 'number'),
  isString = _isType.bind(null, 'string'),
  isBoolean = _isType.bind(null, 'boolean'),
  isUndefined = _isType.bind(null, 'undefined');

export let isArray = Array.isArray || (obj => obj instanceof Array);
export let isDefined = obj => !isUndefined(obj);

export function getEventOffsetPosition(evt, element) {
  evt = evt.nativeEvent ? evt.nativeEvent : evt;
  let px = evt.pageX;
  let py = evt.pageY;
  let left = element.offsetLeft;
  let top = element.offsetTop;
  while ((element = element.offsetParent)) {
    left += element.offsetLeft;
    top += element.offsetTop;
  }
  return {
    x: px - left,
    y: py - top
  }
}