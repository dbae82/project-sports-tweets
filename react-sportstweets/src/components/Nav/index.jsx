import { Container, Menu } from "semantic-ui-react";

import "./nav.css";

const Nav = () => {
  return (
    <div className="nav-bar">
      <Menu fixed="top">
        <Container>
          <Menu.Item as="a" header>
            <i class="fab fa-twitter fa-3x"></i>
            Project Sports Tweets
          </Menu.Item>
          <Menu.Item as="a" position="right">
            Register
          </Menu.Item>
          <Menu.Item as="a">Login</Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};

export default Nav;
