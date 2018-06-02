import React from 'react';
import { Container, Image, Menu, Button } from 'semantic-ui-react';

class MainMenu extends React.PureComponent {
  onLoginButtonClick = () => {
    window.location.href = 'https://login.vatusa.net';
  };

  renderLoginButton() {
    return (
      <Button as="a" primary onClick={this.onLoginButtonClick}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <Container>
        <Menu.Item>
          <Image size="small" />
        </Menu.Item>
        <Menu.Item as="a" active>
          Home
        </Menu.Item>
        <Menu.Item as="a">Facilities</Menu.Item>
        <Menu.Item as="a">Forums</Menu.Item>
        <Menu.Item as="a">Division Info</Menu.Item>
        <Menu.Item as="a">Pilot Tools</Menu.Item>
        <Menu.Item as="a">Join Us</Menu.Item>
        <Menu.Item as="a">TMU Maps</Menu.Item>
        <Menu.Item as="a">Support</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item className="item">{this.renderLoginButton()}</Menu.Item>
        </Menu.Menu>
      </Container>
    );
  }
}

export default MainMenu;
