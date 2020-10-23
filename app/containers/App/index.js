/**
 *
 * App
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectApp from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function App() {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  return (
    <div>
      <Helmet>
        <title>App</title>
        <meta name="description" content="Description of App" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(App);
