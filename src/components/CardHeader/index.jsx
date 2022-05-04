import React from 'react';

import PropTypes from 'prop-types';

import Header from './styles';

export default function CardHeader({ Icon, title, subtitle }) {
  return (
    <Header>
      <div>
        <Icon />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </Header>
  );
}

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  Icon: PropTypes.shape({
    $$typeof: PropTypes.symbol,
  }).isRequired,
};
