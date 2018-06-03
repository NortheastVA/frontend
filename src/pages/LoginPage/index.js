import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKey from '@material-ui/icons/VpnKey';

import { attemptLogin } from 'ducks/login';

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 768,
    margin: '24px auto 0'
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
};

class LoginPage extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
    attemptLogin: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    this.props.attemptLogin(username, password);
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardHeader title="Login" />
          <CardContent className={classes.form}>
            <TextField
              id="username-input"
              label="Pilot ID"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                )
              }}
              margin="normal"
              value={this.state.username}
              onChange={this.handleChange('username')}
            />
            <TextField
              id="password-input"
              label="Password"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKey />
                  </InputAdornment>
                )
              }}
              margin="normal"
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
          </CardContent>
          <CardActions className={classes.actions}>
            <Button
              variant="raised"
              size="large"
              color="primary"
              onClick={this.handleLogin}
            >
              Login
            </Button>
          </CardActions>
        </Card>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  attemptLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LoginPage));
