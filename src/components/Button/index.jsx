import React from 'react';

import PropTypes from 'prop-types';

import PrimaryButton from './styles';

export default function Button({ text }) {
  return <PrimaryButton type="button">{text}</PrimaryButton>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
