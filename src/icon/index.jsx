import React from 'react';

class Icon extends React.Component {
  render() {
    return (
      <span className={`material-icons`}>{this.props.type}</span>
    );
  }
}

Icon.propTypes = {
  type: React.PropTypes.string.isRequired
};

export default Icon;