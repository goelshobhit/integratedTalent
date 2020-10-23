/**
 *
 * Loader
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Loader() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Loader.propTypes = {};

export default Loader;
