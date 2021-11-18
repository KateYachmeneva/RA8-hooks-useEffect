import React from 'react';
import PropTypes from 'prop-types';

const Description = ({desc, text}) => {
  return (
    <li className="list-group-item">
      <span className="text-capitalize">{desc}</span>:
      <span className="text-capitalize">{` ${text}`}</span>
    </li>
  );
};

Description.propTypes = {
  desc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Description;