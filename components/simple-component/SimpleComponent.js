import './SimpleComponent.scss';
import React from 'react';
import PropTypes from 'prop-types';

export default class SimpleComponent extends React.PureComponent {
  render() {
    return (
      <div className="simple-component">Simple component</div>
    );
  }
}

SimpleComponent.propTypes = {

};
