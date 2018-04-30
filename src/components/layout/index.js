import 'styles/global';
import theme from 'styles/theme';

import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import { PageLayout } from './style';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.element
  };

  static defaultProps = {
    children: <div>Test</div>
  };

  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <PageLayout>{children}</PageLayout>
      </ThemeProvider>
    );
  }
}

export default Layout;
