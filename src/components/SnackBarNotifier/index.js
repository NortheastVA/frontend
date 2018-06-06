import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { closeSnack } from 'ducks/notifications';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4
  }
});

class SnackBarNotifier extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
    showSnack: PropTypes.bool.isRequired,
    snackText: PropTypes.string.isRequired,
    closeSnack: PropTypes.func.isRequired
  };

  handleCloseErrorSnack = () => {
    const { closeSnack } = this.props;

    closeSnack();
  };

  render() {
    const { snackText, showSnack, classes } = this.props;

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={showSnack}
        autoHideDuration={6000}
        onClose={this.handleCloseErrorSnack}
        ContentProps={{
          'aria-describedby': 'message-id'
        }}
        message={<span id="message-id">{snackText}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={this.handleCloseErrorSnack}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    );
  }
}

const mapStateToProps = state => ({
  showSnack: state.notifications.showSnack,
  snackText: state.notifications.snackText
});

const mapDispatchToProps = {
  closeSnack
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SnackBarNotifier));
