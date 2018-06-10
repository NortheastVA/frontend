import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { getRoute } from 'ducks/route';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'rgb(247,247,247)'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

class RoutePage extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
    getRoute: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    route: PropTypes.shape({})
  };

  static defaultProps = {
    route: null
  };

  componentDidMount() {
    const {
      match: {
        params: { id }
      },
      getRoute
    } = this.props;
    getRoute(id);
  }

  renderRoute() {
    const { route } = this.props;
    if (route) {
      return <div>{`${route.departure} - ${route.arrival}`}</div>;
    }
    return null;
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs>
            <Paper className={classes.paper}>{this.renderRoute()}</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  route: state.route.route
});

const mapDispatchToProps = {
  getRoute
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(RoutePage));
